"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Dumbbell, Activity, Calendar, Save, History, LineChart } from "lucide-react";
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

// --- Dados dos Treinos (Intermediário - 7 Dias) ---

const TREINO_SEGUNDA = [ // Inferior - Foco Quadríceps
  { nome: "Agachamento Livre ou Smith", series: "4", repeticoes: "10-12", video: "https://www.youtube.com/shorts/3uZE_E11eg4" },
  { nome: "Leg Press 45º", series: "4", repeticoes: "10-12", video: "https://www.youtube.com/shorts/EotSw18oR9w" },
  { nome: "Cadeira Extensora", series: "3", repeticoes: "12-15", video: "https://www.youtube.com/watch?v=wpvFnlVR4s4" },
  { nome: "Agachamento Búlgaro", series: "3", repeticoes: "10-12 (cada)", video: "https://www.youtube.com/shorts/rltJymhFtHg" },
  { nome: "Passada (Lunge)", series: "3", repeticoes: "20 passos totais", video: "https://www.youtube.com/shorts/rltJymhFtHg" },
  { nome: "Abdominal Infra", series: "3", repeticoes: "15", video: "https://www.youtube.com/shorts/6Qz8M2u6q7E" }
];

const TREINO_TERCA = [ // Superior - Foco Empurrar (Push)
  { nome: "Supino Reto (Halter ou Barra)", series: "4", repeticoes: "10-12", video: "https://www.youtube.com/watch?v=YiP-Zhk5YMk" },
  { nome: "Supino Inclinado (Halter)", series: "3", repeticoes: "10-12", video: "https://www.youtube.com/watch?v=F4Q1g2z8MWM" },
  { nome: "Desenvolvimento Militar/Halter", series: "3", repeticoes: "10-12", video: "https://www.youtube.com/watch?v=L-iQfHVeuVg" },
  { nome: "Elevação Lateral", series: "4", repeticoes: "12-15", video: "https://www.youtube.com/watch?v=W5hRdgwEoEA" },
  { nome: "Tríceps Testa ou Francês", series: "3", repeticoes: "10-12", video: "https://www.youtube.com/shorts/9IZIgdT5Mag" },
  { nome: "Tríceps Corda", series: "3", repeticoes: "12-15", video: "https://www.youtube.com/shorts/u36jNfqh8_U" }
];

const TREINO_QUARTA = [ // Inferior - Foco Posterior e Glúteo
  { nome: "Stiff", series: "4", repeticoes: "10-12", video: "https://www.youtube.com/watch?v=uO7JvlaxXAk" },
  { nome: "Elevação Pélvica", series: "4", repeticoes: "10-12", video: "https://www.youtube.com/shorts/ICdsKf6yTys" },
  { nome: "Mesa Flexora", series: "4", repeticoes: "12", video: "https://www.youtube.com/shorts/c3cng1WqREQ" },
  { nome: "Cadeira Flexora", series: "3", repeticoes: "12-15", video: "https://www.youtube.com/shorts/T46yKiz8laY" },
  { nome: "Cadeira Abdutora", series: "3", repeticoes: "15-20", video: "https://www.youtube.com/shorts/2aEx45AyMYs" },
  { nome: "Panturrilha em Pé", series: "4", repeticoes: "15-20", video: "" }
];

const TREINO_QUINTA = [ // Superior - Foco Puxar (Pull)
  { nome: "Puxada Alta (Aberta)", series: "4", repeticoes: "10-12", video: "https://www.youtube.com/shorts/ftcql3-AMRs" },
  { nome: "Remada Curvada (Barra ou Halter)", series: "4", repeticoes: "10", video: "https://www.youtube.com/shorts/j-OssGQT9kg" },
  { nome: "Remada Baixa (Triângulo)", series: "3", repeticoes: "12", video: "https://www.youtube.com/shorts/7lc8Ow4vIwA" },
  { nome: "Crucifixo Invertido / Face Pull", series: "3", repeticoes: "15", video: "https://www.youtube.com/shorts/cNcLfzEbOQk" },
  { nome: "Rosca Direta (Barra ou Halter)", series: "3", repeticoes: "10-12", video: "https://www.youtube.com/shorts/4-9Kh81ephA" },
  { nome: "Rosca Martelo", series: "3", repeticoes: "12", video: "https://www.youtube.com/watch?v=5vPGH1uTtbs" }
];

const TREINO_SEXTA = [ // Inferior - Completo / Metabólico
  { nome: "Agachamento Sumô", series: "3", repeticoes: "12", video: "https://www.youtube.com/shorts/Qlof2sSafDg" },
  { nome: "Hack Machine ou Leg Horizontal", series: "3", repeticoes: "12", video: "-" },
  { nome: "Cadeira Extensora", series: "3", repeticoes: "15 (Drop-set na última)", video: "https://www.youtube.com/watch?v=wpvFnlVR4s4" },
  { nome: "Cadeira Flexora", series: "3", repeticoes: "15", video: "https://www.youtube.com/shorts/T46yKiz8laY" },
  { nome: "Glúteo na Polia ou Caneleira", series: "3", repeticoes: "15", video: "https://www.youtube.com/shorts/2aEx45AyMYs" },
  { nome: "Panturrilha Sentado/Banco", series: "4", repeticoes: "15", video: "" }
];

const TREINO_SABADO = [ // Superior - Completo
  { nome: "Desenvolvimento Arnold", series: "3", repeticoes: "10-12", video: "https://www.youtube.com/watch?v=3mX6Q3k-Z_0" },
  { nome: "Puxada Alta Fechada (Triângulo)", series: "3", repeticoes: "10-12", video: "-" },
  { nome: "Flexão de Braço (Apoio)", series: "3", repeticoes: "Falha", video: "https://www.youtube.com/shorts/qF4XqE-lT8" },
  { nome: "Elevação Frontal + Lateral", series: "3", repeticoes: "10+10 (Bi-set)", video: "-" },
  { nome: "Tríceps Banco", series: "3", repeticoes: "15", video: "https://www.youtube.com/shorts/6-12" },
  { nome: "Rosca Alternada", series: "3", repeticoes: "12", video: "-" }
];

const TREINO_DOMINGO = [ // Cardio / Recuperação Ativa
  { nome: "Cardio Moderado (Esteira/Bike/Elíptico)", series: "1", repeticoes: "30-45 min", video: "-" },
  { nome: "Prancha Abdominal", series: "3", repeticoes: "45s - 1min", video: "-" },
  { nome: "Abdominal Supra (Colchonete)", series: "3", repeticoes: "20", video: "-" },
  { nome: "Abdominal Oblíquo (Cruzado)", series: "3", repeticoes: "15 (cada lado)", video: "-" },
  { nome: "Alongamento Geral", series: "1", repeticoes: "10 min", video: "-" }
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

  // Estado para registro de peso
  const [exercicioSelecionado, setExercicioSelecionado] = useState<any>(null);
  const [novoPeso, setNovoPeso] = useState<string>("");
  const [historicoPesos, setHistoricoPesos] = useState<Record<string, number>>({}); // Mapa: exercicio -> ultimo peso
  const [historicoCompleto, setHistoricoCompleto] = useState<ExerciseHistory[]>([]);
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  const diasSemana = [
    { nome: "Segunda-feira", treino: TREINO_SEGUNDA, titulo: "Inferior - Foco Quadríceps" },
    { nome: "Terça-feira", treino: TREINO_TERCA, titulo: "Superior - Push (Empurrar)" },
    { nome: "Quarta-feira", treino: TREINO_QUARTA, titulo: "Inferior - Foco Posterior/Glúteo" },
    { nome: "Quinta-feira", treino: TREINO_QUINTA, titulo: "Superior - Pull (Puxar)" },
    { nome: "Sexta-feira", treino: TREINO_SEXTA, titulo: "Inferior - Completo/Metabólico" },
    { nome: "Sábado", treino: TREINO_SABADO, titulo: "Superior - Completo" },
    { nome: "Domingo", treino: TREINO_DOMINGO, titulo: "Cardio & Abdominais" },
  ];

  // Carregar últimos pesos ao abrir um treino
  useEffect(() => {
    if (step === "RESULTADO" && treinoFinal.length > 0) {
      fetchLatestWeights();
    }
  }, [step, treinoFinal]);

  const fetchLatestWeights = async () => {
    const exerciseNames = treinoFinal.map(e => e.nome);

    // Busca o registro mais recente de cada exercícios
    // Supabase não tem "DISTINCT ON" direto no JS simples em uma query só facilmente para mapear,
    // então vamos buscar todo o histórico recente e filtrar no cliente ou fazer queries individuais.
    // Para simplificar e não sobrecarregar, vamos buscar os ultimos 100 registros globais e filtrar.
    // *Melhor*: Buscar individualmente ou usar uma RPC seria ideal, mas vamos pelo simples:

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
    // Preenche apenas com o primeiro encontrado (que é o mais recente devido ao sort)
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
      .insert([
        { exercise_name: exerciseName, weight: pesoNum }
      ]);

    if (error) {
      console.error("Erro ao salvar:", error);
      toast.error("Erro ao salvar peso");
    } else {
      toast.success("Peso registrado!");
      setHistoricoPesos(prev => ({ ...prev, [exerciseName]: pesoNum }));
      setNovoPeso(""); // Limpa input se quiser, ou mantem
    }
  };

  const openHistory = async (exerciseName: string) => {
    const { data, error } = await supabase
      .from('training_history')
      .select('created_at, weight')
      .eq('exercise_name', exerciseName)
      .order('created_at', { ascending: true }); // Crescente para o gráfico

    if (data) {
      const formattedData = data.map(d => ({
        date: new Date(d.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
        weight: d.weight
      }));
      setHistoricoCompleto(formattedData);
      setExercicioSelecionado({ nome: exerciseName }); // Reusa estado para modal de titulo
      setShowHistoryModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Treinos da Pamela
          </h1>
          {step !== "DIA" && (
            <Button variant="ghost" onClick={handleBack} className="flex items-center gap-2">
              <ArrowLeft size={16} /> Voltar
            </Button>
          )}
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
                  {diaSelecionado} - Nível Intermediário
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
                      <div className="flex items-start gap-4 flex-1 cursor-pointer" onClick={() => setExercicioSelecionado(ex)}>
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg flex-shrink-0">
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-lg hover:text-blue-600 transition-colors">
                            {ex.nome}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {ex.series} séries x {ex.repeticoes} reps
                          </p>
                          {historicoPesos[ex.nome] ? (
                            <p className="text-xs text-green-600 font-semibold mt-1 flex items-center gap-1">
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
                        {ex.video && ex.video !== "-" && (
                          <Button
                            size="icon"
                            variant="ghost"
                            className="text-blue-500 hover:text-blue-700 hover:bg-blue-50"
                            onClick={() => setExercicioSelecionado(ex)}
                          >
                            <Dumbbell size={18} />
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Modal de Detalhes (Vídeo) ou Histórico */}
        <Dialog open={!!exercicioSelecionado} onOpenChange={(open) => {
          if (!open) {
            setExercicioSelecionado(null);
            setShowHistoryModal(false);
          }
        }}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{exercicioSelecionado?.nome}</DialogTitle>
            </DialogHeader>

            {showHistoryModal ? (
              // EXIBIÇÃO DO HISTÓRICO
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
              // EXIBIÇÃO DE DETALHES DO EXERCÍCIO
              <div className="space-y-4">
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

                {exercicioSelecionado?.video && exercicioSelecionado.video !== "-" && (
                  <div className="mt-4">
                    <Button
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => window.open(exercicioSelecionado.video, '_blank')}
                    >
                      Assistir Demonstração no YouTube
                    </Button>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>

      </div>
    </div>
  );
}
