import type { Animal, Internment, Tutor, Baia, MedicalRecordEntry, MedicationLog } from '../types';

const KEYS = {
    ANIMALS: 'petpam_animals',
    TUTORS: 'petpam_tutors',
    INTERNMENTS: 'petpam_internments',
    BAIAS: 'petpam_baias',
    RECORDS: 'petpam_records',
    MED_LOGS: 'petpam_med_logs'
};

// Initial Data
const INITIAL_BAIAS: Baia[] = Array.from({ length: 10 }, (_, i) => ({
    id: `baia-${i + 1}`,
    label: `Baia ${i + 1}`,
    status: 'Available'
}));

export const storage = {
    getAnimals: (): Animal[] => JSON.parse(localStorage.getItem(KEYS.ANIMALS) || '[]'),
    saveAnimals: (data: Animal[]) => localStorage.setItem(KEYS.ANIMALS, JSON.stringify(data)),

    getTutors: (): Tutor[] => JSON.parse(localStorage.getItem(KEYS.TUTORS) || '[]'),
    saveTutors: (data: Tutor[]) => localStorage.setItem(KEYS.TUTORS, JSON.stringify(data)),

    getInternments: (): Internment[] => JSON.parse(localStorage.getItem(KEYS.INTERNMENTS) || '[]'),
    saveInternments: (data: Internment[]) => localStorage.setItem(KEYS.INTERNMENTS, JSON.stringify(data)),

    getBaias: (): Baia[] => {
        const stored = localStorage.getItem(KEYS.BAIAS);
        return stored ? JSON.parse(stored) : INITIAL_BAIAS;
    },
    saveBaias: (data: Baia[]) => localStorage.setItem(KEYS.BAIAS, JSON.stringify(data)),

    getRecords: (): MedicalRecordEntry[] => JSON.parse(localStorage.getItem(KEYS.RECORDS) || '[]'),
    saveRecords: (data: MedicalRecordEntry[]) => localStorage.setItem(KEYS.RECORDS, JSON.stringify(data)),

    getMedLogs: (): MedicationLog[] => JSON.parse(localStorage.getItem(KEYS.MED_LOGS) || '[]'),
    saveMedLogs: (data: MedicationLog[]) => localStorage.setItem(KEYS.MED_LOGS, JSON.stringify(data)),

    clear: () => localStorage.clear()
};
