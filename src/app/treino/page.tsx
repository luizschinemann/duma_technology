"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const treinos = [
  {
    dia: "Segunda-feira",
    variacoes: [
      {
        nome: "Crossfit",
        exercicios: [
          {
            nome: "Crossfit",
            series: "-",
            repeticoes: "-",
            video: "-"
          },
        ]
      }
    ]
  },  
  {
    dia: "Terça-feira",
    variacoes: [
      {
        nome: "Treino A - Inferiores",
        exercicios: [
          {
            nome: "Cadeira abdutora",
            series: "4",
            repeticoes: "12–15",
            video: "https://youtu.be/_ARUxqrII3Y?si=xV4_Y8yjOL5AVnUE"
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
        nome: "Treino B - Inferiores Alternativo",
        exercicios: [
          {
            nome: "Agachamento sumô",
            series: "4",
            repeticoes: "10–12",
            video: "https://www.youtube.com/shorts/Qlof2sSafDg"
          },
          {
            nome: "Leg press",
            series: "4",
            repeticoes: "10–12",
            video: "https://www.youtube.com/shorts/EotSw18oR9w"
          },
          {
            nome: "Cadeira flexora",
            series: "3",
            repeticoes: "12",
            video: "https://www.youtube.com/shorts/c3cng1WqREQ"
          },
          {
            nome: "Elevação pélvica",
            series: "4",
            repeticoes: "12–15",
            video: "https://www.youtube.com/shorts/ICdsKf6yTys"
          },
          {
            nome: "Panturrilha no leg press",
            series: "4",
            repeticoes: "15–20",
            video: "https://www.youtube.com/shorts/erUNxqpFxkc"
          }
        ]
      }
    ]
  },
  {
    dia: "Quarta-feira",
    variacoes: [
      {
        nome: "Crossfit",
        exercicios: [
          {
            nome: "Crossfit",
            series: "-",
            repeticoes: "-",
            video: "-"
          },
        ]
      }
    ]
  },
  {
    dia: "Quinta-feira",
    variacoes: [
      {
        nome: "Treino A - Superiores",
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
        nome: "Treino B - Superiores Alternativo",
        exercicios: [
          {
            nome: "Supino máquina",
            series: "3",
            repeticoes: "10–12",
            video: "https://www.youtube.com/shorts/8gj6hoQ7ky0"
          },
          {
            nome: "Desenvolvimento máquina",
            series: "3",
            repeticoes: "10–12",
            video: "https://www.youtube.com/shorts/HnzoFr9HTcc"
          },
          {
            nome: "Crucifixo invertido",
            series: "3",
            repeticoes: "12",
            video: "https://www.youtube.com/shorts/cNcLfzEbOQk"
          },
          {
            nome: "Mergulho em bancos",
            series: "3",
            repeticoes: "10–12",
            video: "https://www.youtube.com/shorts/jmznZ45g8jc"
          },
          {
            nome: "Tríceps pulley",
            series: "3",
            repeticoes: "12",
            video: "https://www.youtube.com/shorts/zwhQg6oEgTU"
          }
        ]
      }
    ]
  },
  {
    dia: "Sexta-feira",
    variacoes: [
      {
        nome: "Crossfit",
        exercicios: [
          {
            nome: "Crossfit",
            series: "-",
            repeticoes: "-",
            video: "-"
          },
        ]
      }
    ]
  },
  {
    dia: "Sábado",
    variacoes: [
      {
        nome: "Treino A - Costas e Bíceps",
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
        nome: "Treino B - Costas e Bíceps Alternativo",
        exercicios: [
          {
            nome: "Remada baixa",
            series: "3",
            repeticoes: "10–12",
            video: "https://www.youtube.com/shorts/7lc8Ow4vIwA"
          },
          {
            nome: "Puxada frontal",
            series: "3",
            repeticoes: "10–12",
            video: "https://www.youtube.com/shorts/_2MfZAj98tk"
          },
          {
            nome: "Rosca direta pulley",
            series: "3",
            repeticoes: "10–12",
            video: "https://www.youtube.com/shorts/x6JCKfdzPJE"
          },
          {
            nome: "Rosca martelo pulley",
            series: "3",
            repeticoes: "10–12",
            video: "https://www.youtube.com/shorts/EdsGRhdAye0"
          },
          {
            nome: "Prancha abdominal",
            series: "3",
            repeticoes: "30-60 segundos",
            video: "https://www.youtube.com/shorts/uxPlAbWFUDs"
          }
        ]
      }
    ]
  },
  {
    dia: "Domingo",
    variacoes: [
      {
        nome: "Treino A - Pernas Completo",
        exercicios: [
          {
            nome: "Agachamento livre/Smith",
            series: "4",
            repeticoes: "8–10",
            video: "https://www.youtube.com/shorts/3uZE_E11eg4"
          },
          {
            nome: "Avanço (passada)",
            series: "3",
            repeticoes: "10 (cada)",
            video: "https://www.youtube.com/shorts/rltJymhFtHg"
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
      },
      {
        nome: "Treino B - Pernas Completo Alternativo",
        exercicios: [
          {
            nome: "Agachamento hack",
            series: "4",
            repeticoes: "8–10",
            video: "https://www.youtube.com/shorts/ZsAu3REJnb0"
          },
          {
            nome: "Afundo",
            series: "3",
            repeticoes: "10 (cada)",
            video: "https://www.youtube.com/shorts/rltJymhFtHg"
          },
          {
            nome: "Cadeira flexora",
            series: "3",
            repeticoes: "12",
            video: "https://www.youtube.com/shorts/T46yKiz8laY"
          },
          {
            nome: "Abdução de quadril",
            series: "3",
            repeticoes: "12–15",
            video: "https://www.youtube.com/shorts/cZilgAG9Vx8"
          },
          {
            nome: "Elevação quadril",
            series: "4",
            repeticoes: "12–15",
            video: "https://www.youtube.com/shorts/uhGWSh09z9Q"
          },
          {
            nome: "Panturrilha sentada",
            series: "4",
            repeticoes: "15–20",
            video: "https://www.youtube.com/shorts/ulHIn4HtjCs"
          }
        ]
      }
    ]
  }
];

export default function TreinosPamela() {
  const [diaSelecionado, setDiaSelecionado] = useState<string | null>(null);
  const [variacaoSelecionada, setVariacaoSelecionada] = useState<string | null>(null);
  const [exercicioSelecionado, setExercicioSelecionado] = useState<any>(null);

  // Resetar variação selecionada quando mudar o dia
  const handleDiaClick = (dia: string) => {
    setDiaSelecionado(dia);
    setVariacaoSelecionada(null);
  };

  // Encontrar o treino do dia selecionado
  const treinoDia = treinos.find((t) => t.dia === diaSelecionado);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Treinos da Pamela Schinemann
      </h1>

      {/* Filtro por dia */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {treinos.map((t) => (
          <Button
            key={t.dia}
            variant={diaSelecionado === t.dia ? "default" : "outline"}
            onClick={() => handleDiaClick(t.dia)}
            className="text-xs sm:text-sm"
          >
            {t.dia}
          </Button>
        ))}
      </div>

      {/* Seletor de variação */}
      {diaSelecionado && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Selecione a variação:</h2>
          <div className="flex flex-wrap gap-2">
            {treinoDia?.variacoes.map((v) => (
              <Button
                key={v.nome}
                variant={variacaoSelecionada === v.nome ? "default" : "outline"}
                onClick={() => setVariacaoSelecionada(v.nome)}
                className="text-xs sm:text-sm"
              >
                {v.nome}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Lista de exercícios */}
      {variacaoSelecionada && (
        <div className="grid gap-3">
          <h2 className="text-xl font-semibold">Exercícios</h2>
          {treinoDia
            ?.variacoes.find((v) => v.nome === variacaoSelecionada)
            ?.exercicios.map((ex) => (
              <Card
                key={ex.nome}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setExercicioSelecionado(ex)}
              >
                <CardContent className="p-4">
                  <span className="font-semibold block mb-1">{ex.nome}</span>
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
        <DialogContent className="bg-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl">{exercicioSelecionado?.nome}</DialogTitle>
          </DialogHeader>
          {exercicioSelecionado && (
            <div className="mt-4">
              <p className="mb-2">
                <strong>Séries:</strong> {exercicioSelecionado.series}
              </p>
              <p className="mb-4">
                <strong>Repetições:</strong> {exercicioSelecionado.repeticoes}
              </p>
              {exercicioSelecionado.video && exercicioSelecionado.video !== "-" && (
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Demonstração em vídeo:</h3>
                  <a 
                    href={exercicioSelecionado.video} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline break-words"
                  >
                    {exercicioSelecionado.video}
                  </a>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}