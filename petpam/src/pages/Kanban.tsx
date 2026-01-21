import React, { useState } from 'react';
import { usePetPam } from '../hooks/usePetPam';
import { KanbanColumn } from '../components/KanbanColumn';
import { Header } from '../components/Header';
import { AdmissionModal } from '../components/AdmissionModal';
import { MedicalRecordModal } from '../components/MedicalRecordModal';
import { MedicationModal } from '../components/MedicationModal';
import { DischargeModal } from '../components/DischargeModal';

export const Kanban: React.FC = () => {
    const { baias, internments, animals, tutors } = usePetPam();

    const [admissionBaiaId, setAdmissionBaiaId] = useState<string | null>(null);
    const [recordInternmentId, setRecordInternmentId] = useState<string | null>(null);
    const [medicationInternmentId, setMedicationInternmentId] = useState<string | null>(null);
    const [dischargeInternmentId, setDischargeInternmentId] = useState<string | null>(null);

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <div className="container" style={{ flex: 1, overflow: 'hidden' }}>
                <h2 style={{ margin: '0 0 var(--spacing-md) 0' }}>Mapa de Baias</h2>
                <div className="kanban-board">
                    {baias.map(baia => {
                        const internment = internments.find(i => i.id === baia.internmentId && i.status === 'Active');
                        const animal = internment ? animals.find(a => a.id === internment.animalId) : undefined;
                        const tutor = animal ? tutors.find(t => t.id === animal.tutorId) : undefined;

                        return (
                            <KanbanColumn
                                key={baia.id}
                                baia={baia}
                                internment={internment}
                                animal={animal}
                                tutor={tutor}
                                onAdmit={(id) => setAdmissionBaiaId(id)}
                                onOpenRecord={(id) => setRecordInternmentId(id)}
                                onAddMedication={(id) => setMedicationInternmentId(id)}
                                onDischarge={(id) => setDischargeInternmentId(id)}
                            />
                        );
                    })}
                </div>
            </div>

            {admissionBaiaId && (
                <AdmissionModal
                    baiaId={admissionBaiaId}
                    onClose={() => setAdmissionBaiaId(null)}
                />
            )}

            {recordInternmentId && (
                <MedicalRecordModal
                    internmentId={recordInternmentId}
                    onClose={() => setRecordInternmentId(null)}
                />
            )}

            {medicationInternmentId && (
                <MedicationModal
                    internmentId={medicationInternmentId}
                    onClose={() => setMedicationInternmentId(null)}
                />
            )}

            {dischargeInternmentId && (
                <DischargeModal
                    internmentId={dischargeInternmentId}
                    onClose={() => setDischargeInternmentId(null)}
                />
            )}
        </div>
    );
};
