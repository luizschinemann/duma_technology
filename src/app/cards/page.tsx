"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";

const flashcards = [
    {
        question: "Quais ferramentas a organização TETO fornece para a construção?",
        answer: "Cavadeira, alavanca, mangueira de nível e serrote."
    },
    {
        question: "Em que momentos o uso de óculos de proteção transparentes é obrigatório?",
        answer: "Sempre que martelo ou marreta estiverem em uso, mesmo para pessoas próximas, e também é recomendado durante a logística."
    },
    {
        question: "Pessoas que usam óculos de grau precisam utilizar o óculos de EPI?",
        answer: "Não, quem usa óculos de grau na construção não precisa utilizar o óculos de EPI."
    },
    {
        question: "Para quais atividades as luvas de proteção são obrigatórias?",
        answer: "Para a utilização de cavadeiras e alavancas, transporte, manuseio e fixação das telhas e dos painéis, e durante a logística."
    },
    {
        question: "A partir de qual etapa da construção o uso do capacete com jugular se torna obrigatório?",
        answer: "A partir da instalação da viga mestra até a finalização do telhado."
    },
    {
        question: "Ao cavar os buracos para os pilotis, qual deve ser o primeiro a ser fixado?",
        answer: "O piloti mestre."
    },
    {
        question: "Onde o piloti mestre deve ser obrigatoriamente posicionado?",
        answer: "No ponto mais alto do terreno, ou conforme a RAC (Requisição de Acompanhamento de Construção)."
    },
    {
        question: "Qual é o primeiro passo para fixar um piloti dentro do buraco cavado?",
        answer: "Criar uma camada base de pedras bem compactadas no fundo do buraco."
    },
    {
        question: "Como se deve preencher o espaço ao redor do piloti para garantir sua fixação horizontal?",
        answer: "Intercalando camadas de pedras pequenas e terra, sempre compactando o máximo possível."
    },
    {
        question: "Se um piloti não tiver uma superfície superior nivelada, como ele deve ser posicionado?",
        answer: "A parte mais alta deve ser posicionada para fora, por onde passará a viga de piso."
    },
    {
        question: "Antes de usar a mangueira de nível, o que é crucial verificar para garantir uma medição correta?",
        answer: "Verificar se há bolhas de ar na mangueira; se houver, esvaziar e encher com água novamente."
    },
    {
        question: "Ao tirar o nível com a mangueira, qual ponto da 'curvinha' da água deve ser levado em consideração?",
        answer: "O ponto mais baixo da curva."
    },
    {
        question: "Qual deve ser a medida do perímetro formado pelos pilotis dos cantos?",
        answer: "5,30m x 3,00m."
    },
    {
        question: "Para garantir que todos os cantos da base formem ângulos retos, qual deve ser a medida da diagonal entre os pilotis?",
        answer: "6,09m."
    },
    {
        question: "Após fixar os pilotis dos cantos, qual o próximo passo para alinhar os pilotis intermediários?",
        answer: "Passar uma linha bem esticada contornando os pilotis dos cantos pelo lado externo para servir de guia."
    },
    {
        question: "Ao posicionar uma viga de piso sobre um piloti, qual porcentagem da viga deve ficar apoiada?",
        answer: "80% da viga deve ficar apoiada sobre o piloti."
    },
    {
        question: "Como as vigas de piso são fixadas nos pilotis?",
        answer: "Utilizando 2 pregos 20x48 inclinados, um de cada lado da viga no encontro com o piloti."
    },
    {
        question: "Para fazer o prumo horizontal de uma viga de piso, estica-se uma linha entre dois pregos. Qual distância de referência é sugerida entre a linha e a viga?",
        answer: "Uma distância de 4cm, que deve se repetir em todos os pontos."
    },
    {
        question: "Qual é a diagonal de um painel de piso grande (3,00x2,44m) para conferir seu esquadro?",
        answer: "3,87m."
    },
    {
        question: "Ao posicionar o primeiro painel de piso, qual deve ser o balanço (distância) em relação à primeira linha de pilotis?",
        answer: "Um balanço de 40cm."
    },
    {
        question: "Ao juntar dois painéis de piso, que ferramenta é utilizada para empurrá-los e evitar vãos?",
        answer: "Alavancas."
    },
    {
        question: "Quantos pregos 20x48 são usados para fixar o primeiro painel de piso grande nas vigas?",
        answer: "Uma linha de 3 pregos em cada viga."
    },
    {
        question: "Na montagem da parede, qual painel é posicionado por dentro dos painéis diagonais, sendo 'abraçado' por eles?",
        answer: "O painel quadrado."
    },
    {
        question: "Nas junções entre painéis de parede, quantos pregos 20x42 são utilizados para 'costurá-los'?",
        answer: "Três pregos intercalados e inclinados."
    },
    {
        question: "Se houver um grande vão na parte inferior entre dois painéis de parede, como se corrige o problema?",
        answer: "Utiliza-se duas alavancas para suspender a parte inferior dos painéis até que seus caibros fiquem alinhados e costura-se com mais pregos."
    },
    {
        question: "Se houver um grande vão na parte superior entre dois painéis de parede, como se corrige o problema?",
        answer: "Utiliza-se duas alavancas para suspender a parte inferior oposta à junção, alinhando os caibros na parte superior e costurando com mais pregos."
    },
    {
        question: "No alinhamento final, os cantos dos painéis de parede costurados devem coincidir com qual parte da estrutura?",
        answer: "Com os cantos do piso."
    },
    {
        question: "Quantos pregos 20x48 são usados para fixar um painel de parede padrão ao piso?",
        answer: "São utilizados 4 pregos por painel."
    },
    {
        question: "Quantos pregos 20x48 são usados para fixar um painel capela ao piso?",
        answer: "São utilizados 2 pregos por painel capela."
    },
    {
        question: "Na montagem da viga mestra, qual é a distância entre os tocos, medida pelo centro?",
        answer: "A distância é de 75cm um do outro."
    },
    {
        question: "Onde a viga mestra deve ser posicionada na estrutura da casa?",
        answer: "No centro da casa, próxima ao caibro superior do painel capela."
    },
    {
        question: "Para apoiar temporariamente a viga mestra antes de fixá-la, usa-se um prego 20x42 a quantos centímetros do caibro do painel capela?",
        answer: "A 20cm do caibro."
    },
    {
        question: "Para aprumar a casa, escoras são pregadas das capelas até qual ponto da estrutura?",
        answer: "Até o caibro do painel do piso."
    },
    {
        question: "Que ferramenta é usada para verificar se a parede está perfeitamente na vertical (aprumada)?",
        answer: "Um prumo."
    },
    {
        question: "As vigas secundárias do telhado devem ser apoiadas sobre a _____ em uma extremidade e sobre o painel quadrado na outra.",
        answer: "viga mestra"
    },
    {
        question: "Como as vigas secundárias são fixadas na viga mestra e no painel?",
        answer: "Com quatro pregos 18x36 por secundária em cada junção."
    },
    {
        question: "Na grelha do telhado, os caibros são pregados com pregos 20x48 e depois fixados às vigas secundárias com pregos _____ em cada intersecção.",
        answer: "18x36"
    },
    {
        question: "Na instalação da manta térmica de 1,10m de largura, qual deve ser a sobreposição aproximada entre as folhas?",
        answer: "Aproximadamente 20cm."
    },
    {
        question: "Como a manta térmica é fixada na estrutura do telhado?",
        answer: "Utilizando grampeadores específicos nos painéis de parede e nos caibros."
    },
    {
        question: "Para facilitar a dobra da telha, qual é a distância marcada de ponta a ponta para martelar levemente?",
        answer: "A distância de 30 cm."
    },
    {
        question: "Na montagem do telhado, as telhas devem ter uma sobreposição de quantas ondas?",
        answer: "Uma onda e meia."
    },
    {
        question: "Os telheiros devem ser pregados sempre na parte _____ das ondas da telha.",
        answer: "mais alta"
    },
    {
        question: "Onde as telhas devem ser pregadas?",
        answer: "Sobre os caibros dos painéis de parede e da grelha do telhado."
    },
    {
        question: "Ao instalar dobradiças em portas e janelas, para que lado o pino da dobradiça deve ficar?",
        answer: "O pino da dobradiça deve ficar para cima."
    },
    {
        question: "Qual é a sequência correta para instalar as dobradiças?",
        answer: "Primeiro, colocar as dobradiças nas portas e janelas e somente depois fixá-las nos painéis."
    },
    {
        question: "O porta-cadeado deve ser instalado do lado de fora da casa a que altura do chão?",
        answer: "A 105cm do chão."
    },
    {
        question: "Onde o trinco deve ser posicionado em uma janela?",
        answer: "Na metade da sua altura."
    },
    {
        question: "Ao instalar o porta-cadeado, como os parafusos devem ficar quando ele estiver travado?",
        answer: "Os parafusos devem ficar escondidos."
    },
    {
        question: "Qual é a solução recomendada para remover sinais de mofo das paredes antes da pintura?",
        answer: "Esfregar a superfície com uma esponja embebida em solução de água sanitária diluída 1:2 em água potável."
    },
    {
        question: "Em até quanto por cento a tinta pode ser diluída com água limpa para a pintura?",
        answer: "Em até 40%."
    },
    {
        question: "Quantas demãos de tinta devem ser aplicadas em toda a área externa dos painéis da casa?",
        answer: "Pelo menos duas demãos de tinta."
    }
];

export default function CardsPage() {
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    const handleCardClick = (index: number) => {
        setFlippedCards((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-6 flex flex-col items-center justify-center overflow-hidden">
            {/* Decorative Background Shapes */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

            <div className="max-w-6xl w-full relative z-10">
                <header className="mb-12 text-center">
                    <h1 className="text-5xl font-extrabold text-[#0054a6] mb-4 tracking-tight drop-shadow-sm">
                        Cards Didáticos TETO
                    </h1>
                    <p className="text-gray-600 text-lg font-medium">
                        Clique nos cards para ver as respostas
                    </p>
                </header>

                <div className="flex justify-center">
                    <Carousel
                        setApi={setApi}
                        className="w-full max-w-sm md:max-w-md lg:max-w-lg"
                        opts={{
                            align: "center",
                            loop: true,
                        }}
                    >
                        <CarouselContent className="-ml-4">
                            {flashcards.map((card, index) => (
                                <CarouselItem key={index} className="pl-4 basis-full">
                                    <div className="p-4">
                                        <div
                                            className={cn(
                                                "h-96 perspective-1000 cursor-pointer group transition-all duration-500 ease-out",
                                                index === current
                                                    ? "scale-110 opacity-100 z-20"
                                                    : "scale-90 opacity-60 z-10 blur-[1px]"
                                            )}
                                            onClick={() => handleCardClick(index)}
                                        >
                                            <div
                                                className={cn(
                                                    "relative w-full h-full transition-all duration-700 transform-style-3d shadow-2xl rounded-2xl",
                                                    flippedCards.includes(index) ? "rotate-y-180" : ""
                                                )}
                                            >
                                                {/* Front */}
                                                <Card className="absolute w-full h-full backface-hidden bg-gradient-to-br from-white to-gray-50 border-none flex items-center justify-center p-8 text-center">
                                                    {/* Decorative shapes on card */}
                                                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full opacity-50"></div>
                                                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-50 rounded-tr-full opacity-50"></div>

                                                    <CardContent className="p-0 relative z-10">
                                                        <p className="font-bold text-2xl text-[#0054a6] leading-relaxed">
                                                            {card.question}
                                                        </p>
                                                        <p className="mt-4 text-sm text-gray-400 font-medium uppercase tracking-widest">
                                                            Pergunta
                                                        </p>
                                                    </CardContent>
                                                </Card>

                                                {/* Back */}
                                                <Card className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-[#0054a6] to-[#003d7a] text-white border-none flex items-center justify-center p-8 text-center">
                                                    {/* Decorative shapes on card */}
                                                    <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-br-full"></div>
                                                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-tl-full"></div>

                                                    <CardContent className="p-0 relative z-10">
                                                        <p className="font-medium text-xl leading-relaxed drop-shadow-md">
                                                            {card.answer}
                                                        </p>
                                                        <p className="mt-6 text-sm text-blue-200 font-medium uppercase tracking-widest">
                                                            Resposta
                                                        </p>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-16 bg-white/80 hover:bg-white text-[#0054a6] border-none shadow-lg h-12 w-12" />
                        <CarouselNext className="hidden md:flex -right-16 bg-white/80 hover:bg-white text-[#0054a6] border-none shadow-lg h-12 w-12" />
                    </Carousel>
                </div>

                <div className="mt-8 text-center text-sm text-gray-500 font-medium">
                    Card {current + 1} de {flashcards.length}
                </div>
            </div>
        </div>
    );
}
