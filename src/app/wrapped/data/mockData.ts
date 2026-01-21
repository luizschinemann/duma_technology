export interface WrappedData {
    year: number;
    companyName: string;
    stats: {
        emissions: number;
        parcels: number;
        timeSaved: number;
        monitoring: number;
    };
    features: {
        automation: {
            notifications: number;
            renewals: number;
            rpaDetails?: Array<{ type: string; total: number }>;
        };
        customerFocus: { satisfaction: number; };
    };
    results: {
        comparison: {
            premium: { current: number; previous: number; growth: number; };
            policies: { current: number; previous: number; growth: number; };
            consortium?: { current: number; previous: number; growth: number | string; };
        };
        ranking: {
            lojacorr: { position: number; total: number; };
            regional: { position: number; total: number; name: string; };
            unit: { position: number; total: number; name: string; };
        };
    };
    highlights: {
        branches: Array<{ name: string; percentage: number }>;
        insurers: Array<{ name: string; percentage: number }>;
        consortiumProducts?: Array<{ name: string; percentage: number }>;
    };
    nps: { score: number; };
    monthlyProduction: {
        premium: { current: number[]; previous: number[]; };
        policies: { current: number[]; previous: number[]; };
        consortium: { current: number[]; previous: number[] | null; }; // null if no data
        months: string[];
    };
    history: {
        text: string;
        details: string[];
        footer?: string;
    };
    brokerName: string;
}

const dataImage0: WrappedData = {
    year: 2025,
    companyName: "AL Corretora de Seguros e Serviços Ltda ME",
    stats: { emissions: 2467, parcels: 1074, timeSaved: 164, monitoring: 95 },
    features: {
        automation: {
            notifications: 1184, // 1074 + 110
            renewals: 104,
            rpaDetails: [
                { type: "Acompanhamento de Emissão", total: 2467 },
                { type: "Notificação de Parcela Pendente", total: 1074 },
                { type: "Tratativa de Parcela Pendente", total: 288 },
                { type: "Notificação de débito não autorizado", total: 110 },
                { type: "Pendência de emissão", total: 104 }
            ]
        },
        customerFocus: { satisfaction: 85 }
    },
    results: {
        comparison: {
            premium: { current: 5040087.15, previous: 4114756.61, growth: 22.5 },
            policies: { current: 1344, previous: 1137, growth: 18.2 },
            consortium: { current: 0, previous: 200, growth: "—" }
        },
        ranking: {
            lojacorr: { position: 15, total: 2203 },
            regional: { position: 5, total: 596, name: "REGIONAL SUL" },
            unit: { position: 2, total: 97, name: "FILIAL CURITIBA" }
        }
    },
    highlights: {
        branches: [
            { name: "AUTOMÓVEL", percentage: 60.1 },
            { name: "SAÚDE EM GRUPO", percentage: 33.1 },
            { name: "outros", percentage: 5.6 }, // Lowercase in image? kept as example
            { name: "ODONTOLÓGICO EM GRUPO", percentage: 0.4 },
            { name: "RESIDENCIAL", percentage: 0.2 },
            { name: "EMPRESARIAL", percentage: 0.2 },
            { name: "RC - PROFISSIONAL", percentage: 0.2 },
            { name: "VIDA INDIVIDUAL", percentage: 0.1 },
            { name: "RD - EQUIPAMENTOS", percentage: 0.1 }
        ],
        insurers: [
            { name: "BRADESCO SEGUROS S.A.", percentage: 26.7 },
            { name: "SUL AMERICA S.A", percentage: 22.7 },
            { name: "ALLIANZ SEGUROS", percentage: 11.4 },
            { name: "YELUM SEGUROS", percentage: 11.3 },
            { name: "TOKIO MARINE SEGURADORA", percentage: 7.2 },
            { name: "ZURICH SEGUROS", percentage: 7.1 },
            { name: "HDI SEGUROS", percentage: 6.1 },
            { name: "AMIL PLANOS DE SAÚDE", percentage: 4.0 },
            { name: "OUTROS", percentage: 3.5 }
        ],
        consortiumProducts: [] // "Sem vendas de consórcio em 2025"
    },
    nps: { score: 85 },
    monthlyProduction: {
        premium: {
            current: [350000, 380000, 400000, 420000, 502477.82, 450000, 430000, 410000, 440000, 460000, 400000, 397609.33],
            previous: [300000, 320000, 340000, 350000, 380000, 360000, 350000, 340000, 360000, 370000, 320000, 324756.61]
        },
        policies: {
            current: [100, 110, 105, 120, 130, 125, 115, 110, 120, 115, 100, 94],
            previous: [90, 95, 100, 90, 85, 95, 100, 95, 90, 95, 100, 102]
        },
        consortium: {
            current: [],
            previous: []
        },
        months: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
    },
    history: {
        text: "Prêmio Líquido: 22,5% · Volume: 18,2% · Consórcio (crédito): —",
        details: [
            "Resultado do ano: R$ 5.040.087,15 em Prêmio Líquido e 1.344 apólices.",
            "O mês de maior destaque foi Maio, com R$ 502.477,62. Em sazonalidade, 51,3% no 2º semestre, 24,2% no 4º trimestre.",
            "Em perfil de produção, o ramo com maior participação foi AUTOMÓVEL (60,1%), e a seguradora mais representativa foi BRADESCO SEGUROS S.A. (26,4%)."
        ]
    },
    brokerName: "AL Corretora de Seguros"
};

const dataImage1: WrappedData = {
    year: 2025,
    companyName: "Jhon Jhon Ômega Admin. Asses. e Corretora de Segur",
    stats: { emissions: 444, parcels: 236, timeSaved: 30, monitoring: 88 },
    features: {
        automation: {
            notifications: 253, // 236 + 17
            renewals: 16,
            rpaDetails: [
                { type: "Acompanhamento de Emissão", total: 444 },
                { type: "Notificação de Parcela Pendente", total: 236 },
                { type: "Tratativa de Parcela Pendente", total: 147 },
                { type: "Notificação de débito não autorizado", total: 17 },
                { type: "Cancelada a Apólice", total: 16 }
            ]
        },
        customerFocus: { satisfaction: 85 }
    },
    results: {
        comparison: {
            premium: { current: 785135.45, previous: 713896.14, growth: 10.0 },
            policies: { current: 291, previous: 311, growth: -6.4 },
            consortium: { current: 500000.00, previous: 0, growth: "NOVO" }
        },
        ranking: {
            lojacorr: { position: 156, total: 2203 },
            regional: { position: 45, total: 596, name: "REGIONAL NORDESTE" },
            unit: { position: 12, total: 97, name: "FILIAL RECIFE" }
        }
    },
    highlights: {
        branches: [
            { name: "AUTOMÓVEL", percentage: 60.0 },
            { name: "SAÚDE EM GRUPO", percentage: 16.5 },
            { name: "TRANSPORTE RCTR-C", percentage: 9.3 },
            { name: "TRANSPORTE RCF-DC", percentage: 7.9 },
            { name: "OUTROS", percentage: 2.0 },
            { name: "RESIDENCIAL", percentage: 1.3 },
            { name: "VIDA INDIVIDUAL", percentage: 1.2 },
            { name: "FIANÇA LOCATÍCIA", percentage: 0.9 },
            { name: "RC - GERAL", percentage: 0.9 }
        ],
        insurers: [
            { name: "TOKIO MARINE SEGURADORA", percentage: 26.0 },
            { name: "SUL AMERICA S.A", percentage: 17.3 },
            { name: "SUHAI SEGURADORA", percentage: 15.6 },
            { name: "BRADESCO SEGUROS S.A.", percentage: 11.6 },
            { name: "ALLIANZ SEGUROS", percentage: 9.3 },
            { name: "YELUM SEGUROS", percentage: 7.1 },
            { name: "OUTROS", percentage: 3.8 },
            { name: "HDI SEGUROS", percentage: 3.4 },
            { name: "AKAD SEGUROS", percentage: 3.3 }
        ],
        consortiumProducts: [
            { name: "CONSÓRCIO - AUTOMÓVEIS", percentage: 100.0 }
        ]
    },
    nps: { score: 92 },
    monthlyProduction: {
        premium: {
            current: [60000, 87522.82, 70000, 65000, 68000, 72000, 69000, 64000, 66000, 63000, 50000, 50612.63],
            previous: [55000, 58000, 60000, 62000, 65000, 60000, 59000, 58000, 61000, 62000, 54000, 59896.14]
        },
        policies: {
            current: [25, 35, 20, 25, 22, 28, 26, 24, 25, 20, 18, 23],
            previous: [22, 25, 28, 30, 25, 24, 26, 28, 25, 26, 24, 28]
        },
        consortium: {
            current: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500000, 0], // Example spike
            previous: []
        },
        months: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
    },
    history: {
        text: "Prêmio Líquido: 10,0% · Volume: -6,4% · Consórcio (crédito): NOVO",
        details: [
            "Resultado do ano: R$ 785.135,45 em Prêmio Líquido e 291 apólices.",
            "O mês de maior destaque foi Fevereiro, com R$ 87.522,82. Em sazonalidade, 49,2% no 2º semestre, 24,7% no 4º trimestre.",
            "Em perfil de produção, o ramo com maior participação foi AUTOMÓVEL (60,0%), e a seguradora mais representativa foi TOKIO MARINE SEGURADORA (26,0%).",
            "Novidades do ano: Em seguros, AEB CORRETORA DE SEGUROS LTDA passou a atuar também em CONDOMÍNIO, GARANTIA, PREVIDÊNCIA INDIVIDUAL, RC - EVENTOS ARTISTICOS E ESP., ampliando o portfolio e abrindo espaço para novas oportunidades. No Consórcio, houve estreia em CONSÓRCIO - AUTOMOVEIS, reforçando a diversificação de soluções ao cliente."
        ]
    },
    brokerName: "Jhon Jhon Ômega"
};

export const wrappedDataByUrl: Record<string, WrappedData> = {
    "uploaded_image_0_1766771998250": dataImage0,
    "uploaded_image_1_1766771998250": dataImage1,
    // Add aliases for easier access via URL
    "0": dataImage0,
    "1": dataImage1,
    "image0": dataImage0,
    "image1": dataImage1,
    "duma": { ...dataImage1, brokerName: "DUMA SEGUROS" },
};

export const getWrappedData = (id: string): WrappedData | null => {
    return wrappedDataByUrl[id] || null;
};

export const mockWrappedData: WrappedData = dataImage0;
