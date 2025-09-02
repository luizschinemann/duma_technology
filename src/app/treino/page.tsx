"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const treinos = [
    {
    dia: "Segunda-feira",
    exercicios: [
      {
        nome: "Crossfit",
        series: "-",
        repeticoes: "-",
        video: "-"
      },
    ]
    },  
    {
    dia: "Terça-feira",
    exercicios: [
      {
        nome: "Cadeira abdutora",
        series: "4",
        repeticoes: "12–15",
        video: "https://www.youtube.com/watch?v=_ARUxqrII3Y&ab_channel=Gymleco"
      },
      {
        nome: "Flexora deitada/pé ou Stiff",
        series: "4",
        repeticoes: "10–12",
        video: "https://www.youtube.com/watch?v=uO7JvlaxXAk&ab_channel=AcademiaEnergyFitness"
      },
      {
        nome: "Extensora unilateral",
        series: "3",
        repeticoes: "12",
        video: "https://www.youtube.com/watch?v=wpvFnlVR4s4&ab_channel=TotalHealth"
      },
      {
        nome: "Glúteo no cabo/4 apoios",
        series: "4",
        repeticoes: "12–15",
        video: "https://www.youtube.com/watch?v=lWGoLvPjXCU&ab_channel=MAM%C3%83EEMFORMA"
      },
      {
        nome: "Panturrilha (sentada/em pé)",
        series: "4",
        repeticoes: "15–20",
        video: ""
      }
    ]
  },
  {
    dia: "Quarta-feira",
    exercicios: [
      {
        nome: "Crossfit",
        series: "-",
        repeticoes: "-",
        video: "-"
      },
    ]
  },
  {
    dia: "Quinta-feira",
    exercicios: [
      {
        nome: "Supino reto",
        series: "3",
        repeticoes: "8–10",
        video: "https://www.youtube.com/watch?v=YiP-Zhk5YMk&ab_channel=AllanHenriqueEvaristo"
      },
      {
        nome: "Supino inclinado",
        series: "3",
        repeticoes: "8–10",
        video: "https://www.youtube.com/watch?v=F4Q1g2z8MWM&ab_channel=MyTrainingPRO"
      },
      {
        nome: "Desenvolvimento com halter",
        series: "3",
        repeticoes: "10–12",
        video: "https://www.youtube.com/watch?v=L-iQfHVeuVg&ab_channel=MyTrainingPRO"
      },
      {
        nome: "Elevação lateral",
        series: "4",
        repeticoes: "12–15",
        video: "https://www.youtube.com/watch?v=W5hRdgwEoEA&ab_channel=MyTrainingPRO"
      },
      {
        nome: "Tríceps corda",
        series: "3",
        repeticoes: "12",
        video: "https://www.youtube.com/shorts/u36jNfqh8_U"
      },
      {
        nome: "Tríceps francês/testa",
        series: "3",
        repeticoes: "10",
        video: "https://www.youtube.com/shorts/9IZIgdT5Mag"
      }
    ]
  },
  {
    dia: "Sexta-feira",
    exercicios: [
      {
        nome: "Crossfit",
        series: "-",
        repeticoes: "-",
        video: "-"
      },
    ]
  },
  {
    dia: "Sábado",
    exercicios: [
      {
        nome: "Puxada alta barra aberta",
        series: "3",
        repeticoes: "10",
        video: "https://www.youtube.com/shorts/ftcql3-AMRs"
      },
      {
        nome: "Puxada alta triângulo",
        series: "3",
        repeticoes: "10",
        video: "https://www.youtube.com/shorts/4sf-GYakuBo"
      },
      {
        nome: "Remada curvada com halter",
        series: "3",
        repeticoes: "10",
        video: "https://www.youtube.com/shorts/j-OssGQT9kg"
      },
      {
        nome: "Rosca direta Polia ou halter",
        series: "3",
        repeticoes: "8–10",
        video: "https://www.youtube.com/shorts/4-9Kh81ephA"
      },
      {
        nome: "Rosca martelo Polia ou halter",
        series: "3",
        repeticoes: "8–10",
        video: "https://www.youtube.com/watch?v=5vPGH1uTtbs&ab_channel=MyTrainingPRO"
      },
      {
        nome: "Abdominal infra + prancha",
        series: "3",
        repeticoes: "Até a falha",
        video: "https://www.youtube.com/watch?v=9EYiA8gbnRA&ab_channel=EXECU%C3%87%C3%83ODEEXERC%C3%8DCIOS"
      }
    ]
  },
  {
    dia: "Domingo",
    exercicios: [
      {
        nome: "Agachamento livre/Smith",
        series: "4",
        repeticoes: "8–10",
        video: "https://www.youtube.com/shorts/r_1TM-fycEI"
      },
      {
        nome: "Avanço (passada)",
        series: "3",
        repeticoes: "10 (cada)",
        video: "https://www.youtube.com/watch?v=koeV-24SQOo&ab_channel=ConsultoriaOn-lineMYTAHT"
      },
      {
        nome: "Cadeira extensora",
        series: "3",
        repeticoes: "12",
        video: "https://www.youtube.com/watch?v=wpvFnlVR4s4&ab_channel=TotalHealth"
      },
      {
        nome: "Cadeira adutora",
        series: "3",
        repeticoes: "12–15",
        video: "https://www.youtube.com/watch?v=M_2CxnklU-0&ab_channel=AcademiaBrownFit"
      },
      {
        nome: "Glúteo máquina/cabo",
        series: "4",
        repeticoes: "12–15",
        video: "https://www.youtube.com/shorts/2aEx45AyMYs"
      },
      {
        nome: "Panturrilha em pé",
        series: "4",
        repeticoes: "15–20",
        video: ""
      }
    ]
  }
];

export default function TreinosPamela() {
  const [diaSelecionado, setDiaSelecionado] = useState<string | null>(null);
  const [exercicioSelecionado, setExercicioSelecionado] = useState<any>(null);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Treinos da Pamela Schinemann
      </h1>

      {/* Filtro por dia */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {treinos.map((t) => (
          <Button
            key={t.dia}
            variant={diaSelecionado === t.dia ? "default" : "outline"}
            onClick={() => setDiaSelecionado(t.dia)}
          >
            {t.dia}
          </Button>
        ))}
      </div>

      {/* Lista de exercícios */}
      {diaSelecionado && (
        <div className="grid gap-4">
          {treinos
            .find((t) => t.dia === diaSelecionado)
            ?.exercicios.map((ex) => (
              <Card
                key={ex.nome}
                className="cursor-pointer hover:shadow-lg"
                onClick={() => setExercicioSelecionado(ex)}
              >
                <CardContent className="p-4 flex flex-col">
                  <span className="font-semibold">{ex.nome}</span>
                  <span className="text-sm text-gray-600">
                    {ex.series} séries x {ex.repeticoes} repetições
                  </span>
                </CardContent>
              </Card>
            ))}
        </div>
      )}

      <Dialog
        open={!!exercicioSelecionado}
        onOpenChange={() => setExercicioSelecionado(null)}
      >
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>{exercicioSelecionado?.nome}</DialogTitle>
          </DialogHeader>
          {exercicioSelecionado && (
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={exercicioSelecionado.video.replace("watch?v=", "embed/")}
                title={exercicioSelecionado.nome}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
