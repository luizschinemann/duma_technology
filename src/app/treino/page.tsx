"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, Dumbbell, Activity, Calendar } from "lucide-react";

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

export default function TreinosPamela() {
  const [step, setStep] = useState<Step>("DIA");
  const [diaSelecionado, setDiaSelecionado] = useState<string>("");
  const [treinoFinal, setTreinoFinal] = useState<any[]>([]);
  const [tituloTreino, setTituloTreino] = useState<string>("");
  const [exercicioSelecionado, setExercicioSelecionado] = useState<any>(null);

  const diasSemana = [
    { nome: "Segunda-feira", treino: TREINO_SEGUNDA, titulo: "Inferior - Foco Quadríceps" },
    { nome: "Terça-feira", treino: TREINO_TERCA, titulo: "Superior - Push (Empurrar)" },
    { nome: "Quarta-feira", treino: TREINO_QUARTA, titulo: "Inferior - Foco Posterior/Glúteo" },
    { nome: "Quinta-feira", treino: TREINO_QUINTA, titulo: "Superior - Pull (Puxar)" },
    { nome: "Sexta-feira", treino: TREINO_SEXTA, titulo: "Inferior - Completo/Metabólico" },
    { nome: "Sábado", treino: TREINO_SABADO, titulo: "Superior - Completo" },
    { nome: "Domingo", treino: TREINO_DOMINGO, titulo: "Cardio & Abdominais" },
  ];

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
                <div className="grid gap-4">
                  {treinoFinal.map((ex, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center justify-between p-4 rounded-lg border hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer"
                      onClick={() => setExercicioSelecionado(ex)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 group-hover:text-blue-700">
                            {ex.nome}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {ex.series} séries x {ex.repeticoes} reps
                          </p>
                        </div>
                      </div>
                      {ex.video && ex.video !== "-" && (
                        <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          Ver vídeo
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Modal de Vídeo/Detalhes */}
        <Dialog open={!!exercicioSelecionado} onOpenChange={() => setExercicioSelecionado(null)}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{exercicioSelecionado?.nome}</DialogTitle>
            </DialogHeader>
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
          </DialogContent>
        </Dialog>

      </div>
    </div>
  );
}
