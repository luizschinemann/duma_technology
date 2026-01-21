export type Species =
    | 'Cão' | 'Gato'
    | 'Ave'
    | 'Coelho' | 'Hamster' | 'Porquinho-da-Índia'
    | 'Jabuti' | 'Tartaruga' | 'Iguana' | 'Cobra'
    | 'Equino (Cavalo)' | 'Bovino' | 'Suíno' | 'Ovino' | 'Caprino'
    | 'Ave Silvestre' | 'Mamífero Silvestre' | 'Réptil Silvestre'
    | 'Peixe'
    | 'Outros';

export type TriageLevel = 'Emergência' | 'Muito Urgente' | 'Urgente' | 'Pouco Urgente' | 'Não Urgente';

export type Sex = 'Male' | 'Female';
export type BaiaStatus = 'Available' | 'Occupied' | 'Cleaning';
export type MedicationType = 'Antibiotic' | 'Analgesic' | 'Anti-inflammatory' | 'Other';
export type AdministrationRoute = 'Oral' | 'Intravenosa' | 'Intramuscular' | 'Subcutânea' | 'Tópica';

export interface Tutor {
    id: string;
    name: string;
    phone: string;
    whatsapp?: string;
    email?: string;
    notes?: string;
}

export interface Animal {
    id: string;
    name: string;
    species: Species;
    subCategory?: string;
    breed: string;
    sex: Sex;
    age: string;
    weight: number;
    tutorId: string;
    allergies?: string[];
    conditions?: string[];
    triage: TriageLevel;
}

export interface Medication {
    id: string;
    name: string;
    type: MedicationType;
    route: AdministrationRoute;
    dosage: string;
    frequency: string;
    duration: string;
    notes?: string;
    startDate: string;
}

export interface MedicationLog {
    id: string;
    medicationId: string;
    internmentId: string;
    date: string;
    administeredBy: string;
    doseApplied: string;
    notes?: string;
}

export interface MedicalRecordEntry {
    id: string;
    internmentId: string;
    date: string;
    type: 'Evolution' | 'Procedure' | 'Observation' | 'Intercurrence';
    description: string;
    responsible: string;
}

export interface Internment {
    id: string;
    animalId: string;
    baiaId: string;
    admissionDate: string;
    reason: string;
    veterinarian: string;
    estimatedDischargeDate?: string;
    status: 'Active' | 'Discharged';
    medications: Medication[];
}

export interface Baia {
    id: string;
    label: string;
    status: BaiaStatus;
    internmentId?: string;
}
