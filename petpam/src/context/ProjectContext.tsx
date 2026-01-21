import React, { createContext, useState, useEffect, type ReactNode } from 'react';
import type { Animal, Internment, Baia, Tutor, MedicalRecordEntry, Medication, MedicationLog } from '../types';
import { storage } from '../services/storage';

interface ProjectContextType {
    animals: Animal[];
    internments: Internment[];
    baias: Baia[];
    tutors: Tutor[];
    records: MedicalRecordEntry[];
    medicationLogs: MedicationLog[];

    // Actions
    admitAnimal: (animal: Animal, tutor: Tutor, internment: Omit<Internment, 'id' | 'animalId' | 'status' | 'medications'>) => void;
    updateBaia: (baia: Baia) => void;
    addRecord: (entry: MedicalRecordEntry) => void;
    addMedication: (internmentId: string, medication: Medication) => void;
    logMedication: (log: MedicationLog) => void;
    dischargeAnimal: (internmentId: string) => void;
}

export const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [animals, setAnimals] = useState<Animal[]>([]);
    const [internments, setInternments] = useState<Internment[]>([]);
    const [baias, setBaias] = useState<Baia[]>([]);
    const [tutors, setTutors] = useState<Tutor[]>([]);
    const [records, setRecords] = useState<MedicalRecordEntry[]>([]);
    const [medicationLogs, setMedicationLogs] = useState<MedicationLog[]>([]);

    // Load initial data
    useEffect(() => {
        setAnimals(storage.getAnimals());
        setInternments(storage.getInternments());
        setBaias(storage.getBaias());
        setTutors(storage.getTutors());
        setRecords(storage.getRecords());
        setMedicationLogs(storage.getMedLogs());
    }, []);

    const admitAnimal = (
        animalData: Animal,
        tutorData: Tutor,
        internmentData: Omit<Internment, 'id' | 'animalId' | 'status' | 'medications'>
    ) => {
        // 1. Save Tutor
        const newTutor = startTutor(tutorData);

        // 2. Save Animal
        const newAnimal = { ...animalData, tutorId: newTutor.id };
        const updatedAnimals = [...animals, newAnimal];
        setAnimals(updatedAnimals);
        storage.saveAnimals(updatedAnimals);

        // 3. Create Internment
        const newInternment: Internment = {
            ...internmentData,
            id: crypto.randomUUID(),
            animalId: newAnimal.id,
            status: 'Active',
            medications: []
        };
        const updatedInternments = [...internments, newInternment];
        setInternments(updatedInternments);
        storage.saveInternments(updatedInternments);

        // 4. Occupy Baia
        const updatedBaias = baias.map(b =>
            b.id === internmentData.baiaId
                ? { ...b, status: 'Occupied' as const, internmentId: newInternment.id }
                : b
        );
        setBaias(updatedBaias);
        storage.saveBaias(updatedBaias);
    };

    const startTutor = (tutor: Tutor): Tutor => {
        const existing = tutors.find(t => t.id === tutor.id);
        if (existing) return existing;
        const newTutor = { ...tutor };
        const updated = [...tutors, newTutor];
        setTutors(updated);
        storage.saveTutors(updated);
        return newTutor;
    };

    const updateBaia = (updatedBaia: Baia) => {
        const newBaias = baias.map(b => b.id === updatedBaia.id ? updatedBaia : b);
        setBaias(newBaias);
        storage.saveBaias(newBaias);
    }

    const addRecord = (entry: MedicalRecordEntry) => {
        const updatedRecords = [...records, entry];
        setRecords(updatedRecords);
        storage.saveRecords(updatedRecords);
    };

    const addMedication = (internmentId: string, medication: Medication) => {
        const updatedInternments = internments.map(i => {
            if (i.id === internmentId) {
                return { ...i, medications: [...i.medications, medication] };
            }
            return i;
        });
        setInternments(updatedInternments);
        storage.saveInternments(updatedInternments);
    };

    const logMedication = (log: MedicationLog) => {
        const updatedLogs = [...medicationLogs, log];
        setMedicationLogs(updatedLogs);
        storage.saveMedLogs(updatedLogs);
    };

    const dischargeAnimal = (internmentId: string) => {
        // 1. Update Internment Status
        const updatedInternments = internments.map(i =>
            i.id === internmentId ? { ...i, status: 'Discharged' as const } : i
        );
        setInternments(updatedInternments);
        storage.saveInternments(updatedInternments);

        // 2. Free Baia
        const baia = baias.find(b => b.internmentId === internmentId);
        if (baia) {
            const updatedBaias = baias.map(b =>
                b.id === baia.id ? { ...b, status: 'Available' as const, internmentId: undefined } : b
            );
            setBaias(updatedBaias);
            storage.saveBaias(updatedBaias);
        }
    };

    return (
        <ProjectContext.Provider value={{
            animals,
            internments,
            baias,
            tutors,
            records,
            medicationLogs,
            admitAnimal,
            updateBaia,
            addRecord,
            addMedication,
            logMedication,
            dischargeAnimal
        }}>
            {children}
        </ProjectContext.Provider>
    );
};
