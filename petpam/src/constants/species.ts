// Species types are used implicitly in the keys below

export const SPECIES_GROUPS = {
    'Domésticos': ['Cão', 'Gato'],
    'Aves': ['Ave'],
    'Pequenos Mamíferos': ['Coelho', 'Hamster', 'Porquinho-da-Índia'],
    'Répteis': ['Jabuti', 'Tartaruga', 'Iguana', 'Cobra'],
    'Produção / Rurais': ['Equino (Cavalo)', 'Bovino', 'Suíno', 'Ovino', 'Caprino'],
    'Silvestres / Exóticos': ['Ave Silvestre', 'Mamífero Silvestre', 'Réptil Silvestre'],
    'Aquáticos': ['Peixe'],
    'Outros': ['Outros']
} as const;

// Defines which species usually trigger a "Subcategory" or "Type" field for more detail
export const SPECIES_WITH_SUBCATEGORIES: Record<string, string[]> = {
    'Ave': ['Periquito', 'Papagaio', 'Canário', 'Calopsita', 'Outro'],
    'Ave Silvestre': ['Arara', 'Tucano', 'Coruja', 'Gavião', 'Outro'],
    'Mamífero Silvestre': ['Sagui', 'Ferret', 'Ouriço', 'Outro'],
    'Réptil Silvestre': ['Teiú', 'Jiboia', 'Outro'],
    'Cobra': ['Jiboia', 'Coral', 'Milho', 'Outro']
};
