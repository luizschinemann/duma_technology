import React from 'react';
import type { Baia, Internment, Animal, Tutor } from '../types';
import { AnimalCard } from './AnimalCard';
import { TRIAGE_COLORS } from '../constants/triage';

interface KanbanColumnProps {
    baia: Baia;
    internment?: Internment;
    animal?: Animal;
    tutor?: Tutor;
    onAdmit: (baiaId: string) => void;
    onOpenRecord: (internmentId: string) => void;
    onAddMedication: (internmentId: string) => void;
    onDischarge: (internmentId: string) => void;
}

export const KanbanColumn: React.FC<KanbanColumnProps> = ({
    baia, internment, animal, tutor,
    onAdmit, onOpenRecord, onAddMedication, onDischarge
}) => {
    const isOccupied = baia.status === 'Occupied' && internment && animal;
    // Fallback for animals created before triage implementation
    const triageColor = animal?.triage ? TRIAGE_COLORS[animal.triage] : 'var(--color-success)';

    return (
        <div className="kanban-column" style={{
            borderTop: isOccupied ? `4px solid ${triageColor}` : '4px solid #ccc'
        }}>
            <div className="kanban-column-header">
                <span style={{ fontSize: '1.2rem', color: '#555' }}>{baia.label}</span>
                <span className={`badge ${baia.status === 'Occupied' ? 'badge-warning' : 'badge-success'}`}
                    style={{ backgroundColor: baia.status === 'Occupied' ? '#fff3cd' : '#d4edda', color: baia.status === 'Occupied' ? '#856404' : '#155724' }}>
                    {baia.status === 'Occupied' ? 'OCUPADA' : 'LIVRE'}
                </span>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {isOccupied && tutor ? (
                    <AnimalCard
                        internment={internment}
                        animal={animal}
                        tutor={tutor}
                        onOpenRecord={() => onOpenRecord(internment.id)}
                        onAddMedication={() => onAddMedication(internment.id)}
                        onDischarge={() => onDischarge(internment.id)}
                    />
                ) : (
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 'var(--border-radius)',
                        margin: 'var(--spacing-md) 0',
                        color: '#adb5bd',
                        flexDirection: 'column',
                        gap: '10px'
                    }}>
                        <div style={{ fontSize: '3rem', opacity: 0.2 }}>🐾</div>
                        <button
                            className="btn btn-primary"
                            onClick={() => onAdmit(baia.id)}
                            style={{
                                padding: '8px 20px',
                                fontSize: '1rem',
                                boxShadow: '0 4px 6px rgba(0,var(--color-primary-rgb),0.2)'
                            }}
                        >
                            + Novo Internamento
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
