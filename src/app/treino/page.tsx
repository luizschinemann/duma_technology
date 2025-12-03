"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, Dumbbell, Activity, Calendar } from "lucide-react";

// --- Dados dos Treinos (Hardcoded) ---

const TREINO_CROSSFIT = [
  {
    nome: "Crossfit",
    series: "-",
    repeticoes: "-",
    video: "-"
  }
];

const TREINO_POSTERIOR = [ // Antagonista de Quadríceps
  { nome: "Stiff", series: "4", repeticoes: "10-12", video: "https://www.youtube.com/watch?v=uO7JvlaxXAk" },
  { nome: "Mesa Flexora", series: "4", repeticoes: "12", video: "https://www.youtube.com/shorts/c3cng1WqREQ" },
  { nome: "Cadeira Flexora", series: "3", repeticoes: "12-15", video: "https://www.youtube.com/shorts/T46yKiz8laY" },
  { nome: "Elevação Pélvica", series: "4", repeticoes: "12-15", video: "https://www.youtube.com/shorts/ICdsKf6yTys" },
  { nome: "Glúteo na Polia", series: "3", repeticoes: "12-15", video: "https://www.youtube.com/shorts/2aEx45AyMYs" }
];

const TREINO_QUADRICEPS = [ // Antagonista de Posterior
  { nome: "Agachamento Livre/Smith", series: "4", repeticoes: "8-10", video: "https://www.youtube.com/shorts/3uZE_E11eg4" },
  { nome: "Leg Press 45", series: "4", repeticoes: "10-12", video: "https://www.youtube.com/shorts/EotSw18oR9w" },
  { nome: "Cadeira Extensora", series: "4", repeticoes: "12-15", video: "https://www.youtube.com/watch?v=wpvFnlVR4s4" },
  { nome: "Agachamento Búlgaro", series: "3", repeticoes: "10 (cada)", video: "https://www.youtube.com/shorts/rltJymhFtHg" },
  { nome: "Passada", series: "3", repeticoes: "20 passos", video: "https://www.youtube.com/shorts/rltJymhFtHg" }
];

const TREINO_COXA_COMPLETA = [ // Antagonista de Panturrilha (foco em coxa, sem panturrilha)
  { nome: "Agachamento Sumô", series: "4", repeticoes: "10-12", video: "https://www.youtube.com/shorts/Qlof2sSafDg" },
  { nome: "Cadeira Extensora", series: "3", repeticoes: "12-15", video: "https://www.youtube.com/watch?v=wpvFnlVR4s4" },
  { nome: "Mesa Flexora", series: "4", repeticoes: "12", video: "https://www.youtube.com/shorts/c3cng1WqREQ" },
  { nome: "Leg Press Horizontal", series: "3", repeticoes: "12-15", video: "-" },
  { nome: "Cadeira Adutora", series: "3", repeticoes: "15", video: "https://www.youtube.com/watch?v=M_2CxnklU-0" }
];

const TREINO_INFERIOR_PADRAO = [ // Caso não tenha dor
  { nome: "Agachamento Livre", series: "4", repeticoes: "10", video: "https://www.youtube.com/shorts/3uZE_E11eg4" },
  { nome: "Stiff", series: "4", repeticoes: "12", video: "https://www.youtube.com/watch?v=uO7JvlaxXAk" },
  { nome: "Leg Press", series: "4", repeticoes: "12", video: "https://www.youtube.com/shorts/EotSw18oR9w" },
  { nome: "Elevação Pélvica", series: "4", repeticoes: "12", video: "https://www.youtube.com/shorts/ICdsKf6yTys" },
  { nome: "Panturrilha em Pé", series: "4", repeticoes: "15-20", video: "" }
];

const TREINO_SUPERIOR_PUSH = [ // Peito, Tríceps, Ombro Frontal
  { nome: "Supino Reto", series: "3", repeticoes: "8-10", video: "https://www.youtube.com/watch?v=YiP-Zhk5YMk" },
  { nome: "Supino Inclinado Halter", series: "3", repeticoes: "10", video: "https://www.youtube.com/watch?v=F4Q1g2z8MWM" },
  { nome: "Desenvolvimento Halter", series: "3", repeticoes: "10-12", video: "https://www.youtube.com/watch?v=L-iQfHVeuVg" },
  { nome: "Elevação Lateral", series: "4", repeticoes: "12-15", video: "https://www.youtube.com/watch?v=W5hRdgwEoEA" },
  { nome: "Tríceps Corda", series: "3", repeticoes: "12-15", video: "https://www.youtube.com/shorts/u36jNfqh8_U" },
  { nome: "Tríceps Francês", series: "3", repeticoes: "10-12", video: "https://www.youtube.com/shorts/9IZIgdT5Mag" }
];

const TREINO_SUPERIOR_PULL = [ // Costas, Bíceps, Ombro Posterior
  { nome: "Puxada Alta", series: "3", repeticoes: "10-12", video: "https://www.youtube.com/shorts/ftcql3-AMRs" },
  { nome: "Remada Curvada", series: "3", repeticoes: "10-12", video: "https://www.youtube.com/shorts/j-OssGQT9kg" },
  { nome: "Remada Baixa", series: "3", repeticoes: "12", video: "https://www.youtube.com/shorts/7lc8Ow4vIwA" },
  { nome: "Crucifixo Invertido", series: "3", repeticoes: "12-15", video: "https://www.youtube.com/shorts/cNcLfzEbOQk" },
  { nome: "Rosca Direta", series: "3", repeticoes: "10-12", video: "https://www.youtube.com/shorts/4-9Kh81ephA" },
  { nome: "Rosca Martelo", series: "3", repeticoes: "10-12", video: "https://www.youtube.com/watch?v=5vPGH1uTtbs" }
];

// --- Tipos e Estados ---

type Step = "DIA" | "DOR_INFERIOR" | "DOR_SUPERIOR" | "RESULTADO";

export default function TreinosPamela() {
  const [step, setStep] = useState<Step>("DIA");
  const [diaSelecionado, setDiaSelecionado] = useState<string>("");
  const [treinoFinal, setTreinoFinal] = useState<any[]>([]);
  const [tituloTreino, setTituloTreino] = useState<string>("");
  const [exercicioSelecionado, setExercicioSelecionado] = useState<any>(null);

  const diasSemana = [
    { nome: "Segunda-feira", tipo: "CROSSFIT" },
    { nome: "Terça-feira", tipo: "INFERIOR" },
    { nome: "Quarta-feira", tipo: "CROSSFIT" },
    { nome: "Quinta-feira", tipo: "SUPERIOR" }, // Padrão: PUSH
    { nome: "Sexta-feira", tipo: "CROSSFIT" },
    { nome: "Sábado", tipo: "SUPERIOR" }, // Padrão: PULL
    { nome: "Domingo", tipo: "INFERIOR" },
  ];

  const handleDiaSelect = (dia: typeof diasSemana[0]) => {
    setDiaSelecionado(dia.nome);
    if (dia.tipo === "CROSSFIT") {
      setTreinoFinal(TREINO_CROSSFIT);
      setTituloTreino(`Treino de ${dia.nome} (Crossfit)`);
      setStep("RESULTADO");
    } else if (dia.tipo === "INFERIOR") {
      setStep("DOR_INFERIOR");
    } else if (dia.tipo === "SUPERIOR") {
      setStep("DOR_SUPERIOR");
    }
  };

  const handleDorInferior = (dor: string) => {
    let treino = [];
    let titulo = "";

    switch (dor) {
      case "QUADRICEPS":
        treino = TREINO_POSTERIOR;
        titulo = "Foco em Posterior (Antagonista de Quadríceps)";
        break;
      case "POSTERIOR":
        treino = TREINO_QUADRICEPS;
        titulo = "Foco em Quadríceps (Antagonista de Posterior)";
        break;
      case "PANTURRILHA":
        treino = TREINO_COXA_COMPLETA;
        titulo = "Foco em Coxas (Poupando Panturrilha)";
        break;
      default:
        treino = TREINO_INFERIOR_PADRAO;
        titulo = "Treino de Inferiores Completo";
    }
    setTreinoFinal(treino);
    setTituloTreino(titulo);
    setStep("RESULTADO");
  };

  const handleDorSuperior = (dor: string) => {
    let treino = [];
    let titulo = "";

    // Lógica:
    // Quinta (Push) -> Se dor em Push (Peito/Triceps/Ombro), faz Pull. Senão, Push.
    // Sábado (Pull) -> Se dor em Pull (Costas/Biceps), faz Push. Senão, Pull.

    const isQuinta = diaSelecionado === "Quinta-feira";
    // const isSabado = diaSelecionado === "Sábado"; // Implícito

    if (isQuinta) {
      // Padrão: PUSH
      if (dor === "PEITO_TRICEPS" || dor === "OMBROS") {
        treino = TREINO_SUPERIOR_PULL;
        titulo = "Costas, Bíceps e Ombro Posterior (Antagonista)";
      } else {
        treino = TREINO_SUPERIOR_PUSH;
        titulo = "Peito, Tríceps e Ombro Frontal (Padrão)";
      }
    } else {
      // Sábado -> Padrão: PULL
      if (dor === "COSTAS_BICEPS") {
        treino = TREINO_SUPERIOR_PUSH;
        titulo = "Peito, Tríceps e Ombro Frontal (Antagonista)";
      } else {
        treino = TREINO_SUPERIOR_PULL;
        titulo = "Costas, Bíceps e Ombro Posterior (Padrão)";
      }
    }

    setTreinoFinal(treino);
    setTituloTreino(titulo);
    setStep("RESULTADO");
  };

  const handleBack = () => {
    if (step === "RESULTADO") {
      const dia = diasSemana.find(d => d.nome === diaSelecionado);
      if (dia?.tipo === "CROSSFIT") {
        setStep("DIA");
        setDiaSelecionado("");
        setTreinoFinal([]);
        setTituloTreino("");
      } else if (dia?.tipo === "INFERIOR") {
        setStep("DOR_INFERIOR");
      } else if (dia?.tipo === "SUPERIOR") {
        setStep("DOR_SUPERIOR");
      }
    } else {
      setStep("DIA");
      setDiaSelecionado("");
      setTreinoFinal([]);
      setTituloTreino("");
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
                  <span className="text-xs text-gray-500 mt-1">
                    {dia.tipo === "CROSSFIT" ? "Crossfit/Natação" :
                      dia.tipo === "INFERIOR" ? "Inferiores" : "Superiores"}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* STEP 2: Dor Inferior */}
        {step === "DOR_INFERIOR" && (
          <div className="max-w-2xl mx-auto animate-in fade-in zoom-in duration-300">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Como você está se sentindo hoje?
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Selecione se estiver com alguma dor muscular específica para adaptarmos o treino.
            </p>
            <div className="grid gap-4">
              <Button
                className="h-16 text-lg bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 transition-all"
                onClick={() => handleDorInferior("PANTURRILHA")}
              >
                Dor na Panturrilha
              </Button>
              <Button
                className="h-16 text-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all"
                onClick={() => handleDorInferior("QUADRICEPS")}
              >
                Dor no Quadríceps (Coxa frente)
              </Button>
              <Button
                className="h-16 text-lg bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 transition-all"
                onClick={() => handleDorInferior("POSTERIOR")}
              >
                Dor no Bíceps Femural (Coxa trás)
              </Button>
              <Button
                variant="outline"
                className="h-16 text-lg border-2 hover:bg-gray-50"
                onClick={() => handleDorInferior("NENHUMA")}
              >
                Sem dores específicas
              </Button>
            </div>
          </div>
        )}

        {/* STEP 2: Dor Superior */}
        {step === "DOR_SUPERIOR" && (
          <div className="max-w-2xl mx-auto animate-in fade-in zoom-in duration-300">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Como você está se sentindo hoje?
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Selecione se estiver com alguma dor muscular específica para adaptarmos o treino.
            </p>
            <div className="grid gap-4">
              <Button
                className="h-16 text-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all"
                onClick={() => handleDorSuperior("PEITO_TRICEPS")}
              >
                Dor em Peito ou Tríceps
              </Button>
              <Button
                className="h-16 text-lg bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all"
                onClick={() => handleDorSuperior("COSTAS_BICEPS")}
              >
                Dor em Costas ou Bíceps
              </Button>
              <Button
                className="h-16 text-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all"
                onClick={() => handleDorSuperior("OMBROS")}
              >
                Dor nos Ombros
              </Button>
              <Button
                variant="outline"
                className="h-16 text-lg border-2 hover:bg-gray-50"
                onClick={() => handleDorSuperior("NENHUMA")}
              >
                Sem dores específicas
              </Button>
            </div>
          </div>
        )}

        {/* STEP 3: Resultado */}
        {step === "RESULTADO" && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
            <Card className="border-none shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-xl p-6">
                <CardTitle className="text-2xl md:text-3xl text-center">
                  {tituloTreino}
                </CardTitle>
                <p className="text-center text-blue-100 mt-2">
                  {diaSelecionado}
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