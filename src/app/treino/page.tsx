"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Activity, Calendar, Save, LineChart } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const Model = dynamic(() => import('react-body-highlighter'), { ssr: false });

// --- Mapa de nomes PT-BR para os slugs do body-highlighter ---
const MUSCLE_NAMES: Record<string, string> = {
  "chest": "Peitoral",
  "triceps": "Tríceps",
  "biceps": "Bíceps",
  "front-deltoids": "Deltóide Frontal",
  "back-deltoids": "Deltóide Posterior",
  "upper-back": "Dorsal",
  "lower-back": "Lombar",
  "trapezius": "Trapézio",
  "abs": "Abdômen",
  "obliques": "Oblíquos",
  "quadriceps": "Quadríceps",
  "hamstring": "Isquiotibiais",
  "gluteal": "Glúteos",
  "calves": "Panturrilha",
  "adductor": "Adutores",
  "abductors": "Abdutores",
  "forearm": "Antebraço",
};

// --- Composição biológica de cada grupo muscular ---
const MUSCLE_BIO: Record<string, string[]> = {
  "chest": [
    "Peitoral maior (porção esternocostal e clavicular)",
    "Peitoral menor",
  ],
  "triceps": [
    "Tríceps — cabeça longa",
    "Tríceps — cabeça lateral",
    "Tríceps — cabeça medial",
  ],
  "biceps": [
    "Bíceps — cabeça longa",
    "Bíceps — cabeça curta",
    "Braquial",
  ],
  "front-deltoids": [
    "Deltóide — feixe anterior",
  ],
  "back-deltoids": [
    "Deltóide — feixe posterior",
    "Infraespinal",
    "Redondo menor",
  ],
  "upper-back": [
    "Latíssimo do dorso",
    "Rombóide maior",
    "Rombóide menor",
    "Redondo maior",
  ],
  "lower-back": [
    "Eretor da espinha — iliocostal",
    "Eretor da espinha — longuíssimo",
    "Eretor da espinha — espinal",
    "Multífido",
  ],
  "trapezius": [
    "Trapézio — feixe superior",
    "Trapézio — feixe médio",
    "Trapézio — feixe inferior",
  ],
  "abs": [
    "Reto abdominal",
    "Transverso do abdômen",
  ],
  "obliques": [
    "Oblíquo externo",
    "Oblíquo interno",
  ],
  "quadriceps": [
    "Reto femoral",
    "Vasto lateral",
    "Vasto medial",
    "Vasto intermédio",
  ],
  "hamstring": [
    "Bíceps femoral",
    "Semitendíneo",
    "Semimembranoso",
  ],
  "gluteal": [
    "Glúteo máximo",
    "Glúteo médio",
    "Glúteo mínimo",
  ],
  "calves": [
    "Gastrocnêmio",
    "Sóleo",
  ],
  "adductor": [
    "Adutor longo",
    "Adutor curto",
    "Adutor magno",
    "Grácil",
    "Pectíneo",
  ],
  "abductors": [
    "Glúteo médio",
    "Tensor da fáscia lata",
    "Glúteo mínimo",
  ],
  "forearm": [
    "Braquiorradial",
    "Flexor radial do carpo",
    "Extensor radial longo do carpo",
    "Pronador redondo",
  ],
};

// --- Dados dos Treinos (Adaptado para Gestante - 7 Dias) ---
// Adaptações: sem exercícios deitada de costas (supina) prolongados, sem séries até a falha,
// sem drop-set, sem exercícios de equilíbrio/impacto de risco, sem trabalho direto de abdômen
// (crunches/prancha) para evitar pressão intra-abdominal e diástase, cargas mais leves e reps mais altas.
// Consulte sempre o médico/obstetra antes de iniciar ou manter o treino.

const TREINO_SEGUNDA = [ // Inferior - Foco Quadríceps (com apoio, carga leve)
  { nome: "Agachamento com Apoio (Cadeira/Smith)", series: "3", repeticoes: "12-15", musculos: ["quadriceps", "gluteal", "hamstring", "lower-back"] },
  { nome: "Leg Press 45º (carga leve/moderada)", series: "3", repeticoes: "12-15", musculos: ["quadriceps", "gluteal", "hamstring"] },
  { nome: "Cadeira Extensora (carga leve)", series: "3", repeticoes: "12-15", musculos: ["quadriceps"] },
  { nome: "Passada Estática com Apoio", series: "3", repeticoes: "10-12 (cada)", musculos: ["quadriceps", "gluteal", "hamstring"] },
  { nome: "Ativação de Assoalho Pélvico + Respiração Diafragmática", series: "3", repeticoes: "10 respirações", musculos: [] },
];

const TREINO_TERCA = [ // Superior - Foco Empurrar (Push) - evitar posição deitada de costas
  { nome: "Supino Inclinado (Halter, banco a 45º)", series: "3", repeticoes: "12-15", musculos: ["chest", "triceps", "front-deltoids"] },
  { nome: "Press Sentado com Apoio nas Costas", series: "3", repeticoes: "12-15", musculos: ["chest", "triceps", "front-deltoids"] },
  { nome: "Desenvolvimento Militar Sentado (Halter, carga leve)", series: "3", repeticoes: "12-15", musculos: ["front-deltoids", "triceps", "trapezius"] },
  { nome: "Elevação Lateral (carga leve)", series: "3", repeticoes: "12-15", musculos: ["front-deltoids", "trapezius"] },
  { nome: "Tríceps Corda (em pé, apoiada)", series: "3", repeticoes: "12-15", musculos: ["triceps"] },
];

const TREINO_QUARTA = [ // Inferior - Foco Posterior e Glúteo (glúteo/assoalho pélvico)
  { nome: "Stiff com Halteres Leves (amplitude reduzida)", series: "3", repeticoes: "12-15", musculos: ["hamstring", "gluteal", "lower-back"] },
  { nome: "Elevação Pélvica (curta duração, com apoio no 3º trimestre)", series: "3", repeticoes: "12-15", musculos: ["gluteal", "hamstring"] },
  { nome: "Cadeira Flexora (carga leve)", series: "3", repeticoes: "12-15", musculos: ["hamstring"] },
  { nome: "Coice na Polia (em pé, apoiada)", series: "3", repeticoes: "12-15 (cada)", musculos: ["gluteal", "hamstring"] },
  { nome: "Cadeira Abdutora (carga leve)", series: "3", repeticoes: "15-20", musculos: ["abductors", "gluteal"] },
  { nome: "Panturrilha em Pé (com apoio)", series: "3", repeticoes: "15-20", musculos: ["calves"] },
];

const TREINO_QUINTA = [ // Superior - Foco Puxar (Pull) - evitar flexão de tronco sob carga
  { nome: "Puxada Alta (Aberta, carga moderada)", series: "3", repeticoes: "12-15", musculos: ["upper-back", "biceps", "back-deltoids"] },
  { nome: "Remada Baixa Sentada (Triângulo, coluna apoiada)", series: "3", repeticoes: "12-15", musculos: ["upper-back", "lower-back", "biceps"] },
  { nome: "Remada Unilateral Apoiada no Banco (carga leve)", series: "3", repeticoes: "12 (cada)", musculos: ["upper-back", "lower-back", "biceps"] },
  { nome: "Crucifixo Invertido / Face Pull", series: "3", repeticoes: "15", musculos: ["back-deltoids", "upper-back", "trapezius"] },
  { nome: "Rosca Direta (Halter, carga leve)", series: "3", repeticoes: "12-15", musculos: ["biceps"] },
  { nome: "Rosca Martelo (carga leve)", series: "3", repeticoes: "12-15", musculos: ["biceps", "forearm"] },
];

const TREINO_SEXTA = [ // Inferior - Completo / Baixo Impacto
  { nome: "Agachamento Sumô (carga leve, com apoio)", series: "3", repeticoes: "12-15", musculos: ["adductor", "gluteal", "quadriceps"] },
  { nome: "Leg Press Horizontal (carga leve/moderada)", series: "3", repeticoes: "12-15", musculos: ["quadriceps"] },
  { nome: "Cadeira Extensora (sem drop-set)", series: "3", repeticoes: "15", musculos: ["quadriceps"] },
  { nome: "Cadeira Flexora", series: "3", repeticoes: "15", musculos: ["hamstring"] },
  { nome: "Glúteo na Polia ou Caneleira", series: "3", repeticoes: "15", musculos: ["gluteal"] },
  { nome: "Panturrilha Sentado/Banco", series: "3", repeticoes: "15", musculos: ["calves"] },
];

const TREINO_SABADO = [ // Superior - Completo (carga leve, sem falha)
  { nome: "Desenvolvimento Sentado com Halteres Leves", series: "3", repeticoes: "12-15", musculos: ["front-deltoids", "triceps"] },
  { nome: "Puxada Alta Fechada (Triângulo)", series: "3", repeticoes: "12-15", musculos: ["upper-back", "biceps"] },
  { nome: "Flexão Inclinada (na barra/parede ou banco)", series: "3", repeticoes: "12-15", musculos: ["chest", "triceps", "front-deltoids"] },
  { nome: "Elevação Lateral (carga leve)", series: "3", repeticoes: "12-15", musculos: ["front-deltoids", "trapezius"] },
  { nome: "Tríceps Corda (em pé)", series: "3", repeticoes: "15", musculos: ["triceps", "chest"] },
  { nome: "Rosca Alternada (carga leve)", series: "3", repeticoes: "12-15", musculos: ["biceps"] },
];

const TREINO_DOMINGO = [ // Cardio Leve / Mobilidade / Core Seguro
  { nome: "Cardio Leve a Moderado (Caminhada/Bike Ergométrica/Elíptico)", series: "1", repeticoes: "20-30 min", musculos: [] },
  { nome: "Ativação de Transverso Abdominal (Respiração, em pé ou 4 apoios)", series: "3", repeticoes: "10 respirações", musculos: ["abs"] },
  { nome: "Gato-Camelo (Mobilidade de Coluna, 4 apoios)", series: "2", repeticoes: "10-12", musculos: ["lower-back", "abs"] },
  { nome: "Inclinação Pélvica em Pé", series: "2", repeticoes: "12-15", musculos: ["abs", "gluteal"] },
  { nome: "Alongamento Geral", series: "1", repeticoes: "10 min", musculos: [] },
];

// --- Tipos e Estados ---

type Step = "DIA" | "RESULTADO";

interface ExerciseHistory {
  date: string;
  weight: number;
}

export default function TreinosPamela() {
  const [step, setStep] = useState<Step>("DIA");
  const [diaSelecionado, setDiaSelecionado] = useState<string>("");
  const [treinoFinal, setTreinoFinal] = useState<any[]>([]);
  const [tituloTreino, setTituloTreino] = useState<string>("");

  const [exercicioSelecionado, setExercicioSelecionado] = useState<any>(null);
  const [novoPeso, setNovoPeso] = useState<string>("");
  const [historicoPesos, setHistoricoPesos] = useState<Record<string, number>>({});
  const [historicoCompleto, setHistoricoCompleto] = useState<ExerciseHistory[]>([]);
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  const diasSemana = [
    { nome: "Segunda-feira", treino: TREINO_SEGUNDA, titulo: "Inferior - Foco Quadríceps (Apoio)" },
    { nome: "Terça-feira", treino: TREINO_TERCA, titulo: "Superior - Push (Empurrar)" },
    { nome: "Quarta-feira", treino: TREINO_QUARTA, titulo: "Inferior - Foco Posterior/Glúteo" },
    { nome: "Quinta-feira", treino: TREINO_QUINTA, titulo: "Superior - Pull (Puxar)" },
    { nome: "Sexta-feira", treino: TREINO_SEXTA, titulo: "Inferior - Completo/Baixo Impacto" },
    { nome: "Sábado", treino: TREINO_SABADO, titulo: "Superior - Completo (Carga Leve)" },
    { nome: "Domingo", treino: TREINO_DOMINGO, titulo: "Cardio Leve & Core Seguro" },
  ];

  useEffect(() => {
    if (step === "RESULTADO" && treinoFinal.length > 0) {
      fetchLatestWeights();
    }
  }, [step, treinoFinal]);

  const fetchLatestWeights = async () => {
    const exerciseNames = treinoFinal.map(e => e.nome);

    const { data, error } = await supabase
      .from('training_history')
      .select('exercise_name, weight, created_at')
      .in('exercise_name', exerciseNames)
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Erro ao buscar histórico:", error);
      return;
    }

    const latestWeights: Record<string, number> = {};
    data?.forEach((record) => {
      if (!latestWeights[record.exercise_name]) {
        latestWeights[record.exercise_name] = record.weight;
      }
    });
    setHistoricoPesos(latestWeights);
  };

  const handleDiaSelect = (dia: typeof diasSemana[0]) => {
    setDiaSelecionado(dia.nome);
    setTreinoFinal(dia.treino);
    setTituloTreino(dia.titulo);
    setStep("RESULTADO");
  };

  const handleBack = () => {
    setStep("DIA");
    setDiaSelecionado("");
    setTreinoFinal([]);
    setTituloTreino("");
  };

  const handleSaveWeight = async (exerciseName: string, weight: string) => {
    if (!weight) return;

    const pesoNum = parseFloat(weight.replace(',', '.'));
    if (isNaN(pesoNum)) {
      toast.error("Peso inválido");
      return;
    }

    const { error } = await supabase
      .from('training_history')
      .insert([{ exercise_name: exerciseName, weight: pesoNum }]);

    if (error) {
      console.error("Erro ao salvar:", error);
      toast.error("Erro ao salvar peso");
    } else {
      toast.success("Peso registrado!");
      setHistoricoPesos(prev => ({ ...prev, [exerciseName]: pesoNum }));
      setNovoPeso("");
    }
  };

  const openHistory = async (exerciseName: string) => {
    const { data, error } = await supabase
      .from('training_history')
      .select('created_at, weight')
      .eq('exercise_name', exerciseName)
      .order('created_at', { ascending: true });

    if (data) {
      const formattedData = data.map(d => ({
        date: new Date(d.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
        weight: d.weight
      }));
      setHistoricoCompleto(formattedData);
      setExercicioSelecionado({ nome: exerciseName, musculos: [] });
      setShowHistoryModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Treinos da Pamela — Gestante
          </h1>
          {step !== "DIA" && (
            <Button variant="ghost" onClick={handleBack} className="flex items-center gap-2">
              <ArrowLeft size={16} /> Voltar
            </Button>
          )}
        </div>

        <div className="mb-6 text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
          Treino adaptado para gestante: sem exercícios deitada de costas prolongados, sem séries até a falha,
          sem drop-set e sem trabalho direto de abdômen. Consulte sempre seu médico/obstetra antes de iniciar
          ou manter a atividade física.
        </div>

        {/* STEP 1: Seleção do Dia */}
        {step === "DIA" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {diasSemana.map((dia) => (
              <Card
                key={dia.nome}
                className="cursor-pointer hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500 hover:scale-105"
                onClick={() => handleDiaSelect(dia)}
              >
                <CardContent className="p-6 flex flex-col items-center justify-center h-32">
                  <Calendar className="w-8 h-8 mb-2 text-blue-500" />
                  <span className="font-semibold text-lg">{dia.nome}</span>
                  <span className="text-xs text-gray-500 mt-1 text-center">
                    {dia.titulo}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* STEP 2: Resultado (Treino) */}
        {step === "RESULTADO" && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
            <Card className="border-none shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-xl p-6">
                <CardTitle className="text-2xl md:text-3xl text-center">
                  {tituloTreino}
                </CardTitle>
                <p className="text-center text-blue-100 mt-2">
                  {diaSelecionado} - Adaptado para Gestante
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-6">
                  {treinoFinal.map((ex, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg border bg-white shadow-sm hover:shadow-md transition-all gap-4"
                    >
                      {/* Info do Exercício */}
                      <div
                        className="flex items-start gap-4 flex-1 cursor-pointer"
                        onClick={() => { setExercicioSelecionado(ex); setShowHistoryModal(false); }}
                      >
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg flex-shrink-0">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 text-lg hover:text-blue-600 transition-colors">
                            {ex.nome}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {ex.series} séries x {ex.repeticoes} reps
                          </p>
                          {/* Músculos trabalhados */}
                          {ex.musculos.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-1.5">
                              {ex.musculos.map((slug: string) => (
                                <span
                                  key={slug}
                                  className="text-xs bg-purple-100 text-purple-700 font-medium px-2 py-0.5 rounded-full"
                                >
                                  {MUSCLE_NAMES[slug] ?? slug}
                                </span>
                              ))}
                            </div>
                          )}
                          {historicoPesos[ex.nome] ? (
                            <p className="text-xs text-green-600 font-semibold mt-1.5 flex items-center gap-1">
                              <Activity size={12} /> Última carga: {historicoPesos[ex.nome]}kg
                            </p>
                          ) : (
                            <p className="text-xs text-gray-400 mt-1 italic">Sem carga registrada</p>
                          )}
                        </div>
                      </div>

                      {/* Ações de Peso */}
                      <div className="flex items-center gap-2 w-full md:w-auto">
                        <Input
                          placeholder="Kg"
                          className="w-20"
                          type="number"
                          id={`weight-${idx}`}
                        />
                        <Button
                          size="icon"
                          variant="default"
                          className="bg-green-600 hover:bg-green-700"
                          onClick={() => {
                            const input = document.getElementById(`weight-${idx}`) as HTMLInputElement;
                            handleSaveWeight(ex.nome, input.value);
                          }}
                        >
                          <Save size={18} />
                        </Button>
                        <Button
                          size="icon"
                          variant="outline"
                          title="Ver Histórico"
                          onClick={() => openHistory(ex.nome)}
                        >
                          <LineChart size={18} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Modal de Detalhes ou Histórico */}
        <Dialog open={!!exercicioSelecionado} onOpenChange={(open) => {
          if (!open) {
            setExercicioSelecionado(null);
            setShowHistoryModal(false);
          }
        }}>
          <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{exercicioSelecionado?.nome}</DialogTitle>
            </DialogHeader>

            {showHistoryModal ? (
              <div className="h-64 w-full">
                {historicoCompleto.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart data={historicoCompleto}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis domain={['auto', 'auto']} />
                      <Tooltip />
                      <Line type="monotone" dataKey="weight" stroke="#2563eb" strokeWidth={2} dot={{ r: 4 }} />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    Nenhum histórico encontrado.
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {/* Séries e Reps */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="block text-sm text-gray-500">Séries</span>
                    <span className="font-bold text-xl">{exercicioSelecionado?.series}</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="block text-sm text-gray-500">Repetições</span>
                    <span className="font-bold text-xl">{exercicioSelecionado?.repeticoes}</span>
                  </div>
                </div>

                {/* Músculos trabalhados */}
                {exercicioSelecionado?.musculos?.length > 0 && (
                  <>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Músculos trabalhados
                      </p>
                      {exercicioSelecionado.musculos.map((slug: string) => (
                        <div key={slug} className="bg-purple-50 rounded-lg px-3 py-2">
                          <p className="text-sm font-semibold text-purple-700">
                            {MUSCLE_NAMES[slug] ?? slug}
                          </p>
                          {MUSCLE_BIO[slug] && (
                            <ul className="mt-1 space-y-0.5">
                              {MUSCLE_BIO[slug].map((bio) => (
                                <li key={bio} className="text-xs text-gray-500 italic">
                                  · {bio}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Body Highlighter SVG */}
                    <div className="flex justify-center gap-2 pt-2">
                      <div className="text-center">
                        <p className="text-xs text-gray-400 mb-1">Frontal</p>
                        <Model
                          data={[{ name: exercicioSelecionado.nome, muscles: exercicioSelecionado.musculos }]}
                          type="anterior"
                          bodyColor="#e5e7eb"
                          highlightedColors={["#7c3aed", "#a78bfa"]}
                          style={{ width: "9rem" }}
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-400 mb-1">Posterior</p>
                        <Model
                          data={[{ name: exercicioSelecionado.nome, muscles: exercicioSelecionado.musculos }]}
                          type="posterior"
                          bodyColor="#e5e7eb"
                          highlightedColors={["#7c3aed", "#a78bfa"]}
                          style={{ width: "9rem" }}
                        />
                      </div>
                    </div>
                  </>
                )}

                {exercicioSelecionado?.musculos?.length === 0 && (
                  <p className="text-center text-sm text-gray-400 italic">
                    Exercício de mobilidade / cardio geral
                  </p>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>

      </div>
    </div>
  );
}
