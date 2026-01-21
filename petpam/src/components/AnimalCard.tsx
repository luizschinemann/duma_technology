import React from 'react';
import type { Internment, Animal, Tutor } from '../types';
import { calculateDuration } from '../utils/date';
import { TRIAGE_COLORS } from '../constants/triage';

interface AnimalCardProps {
    internment: Internment;
    animal: Animal;
    tutor: Tutor;
    onOpenRecord: () => void;
    onAddMedication: () => void;
    onDischarge: () => void;
}

export const AnimalCard: React.FC<AnimalCardProps> = ({
    internment, animal, tutor, onOpenRecord, onAddMedication, onDischarge
}) => {
    const triageColor = TRIAGE_COLORS[animal.triage] || '#ccc';

    return (
        <div className="animal-card" style={{
            width: '100%',
            borderLeft: `5px solid ${triageColor}`,
            position: 'relative'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <h4 style={{ margin: '0 0 4px 0' }}>{animal.name}</h4>
                <span style={{
                    fontSize: '0.7em',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    color: '#fff',
                    backgroundColor: triageColor,
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                }}>
                    {animal.triage}
                </span>
            </div>

            <div style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', marginBottom: '4px' }}>
                {animal.species} • {animal.breed}
            </div>

            <div style={{ fontSize: '0.85rem', marginBottom: '8px' }}>
                <strong>Tutor:</strong> {tutor.name}
            </div>

            <div style={{
                display: 'flex',
                gap: '4px',
                fontSize: '0.75rem',
                marginBottom: '8px',
                flexWrap: 'wrap'
            }}>
                {animal.allergies && animal.allergies.length > 0 && (
                    <span className="badge badge-warning">ALERGIA</span>
                )}
                <span style={{ backgroundColor: '#e9ecef', padding: '2px 6px', borderRadius: '4px' }}>
                    ⏱ {calculateDuration(internment.admissionDate)}
                </span>
            </div>

            <div style={{ display: 'flex', gap: '4px', marginTop: '8px' }}>
                <button className="btn btn-sm btn-primary" onClick={onOpenRecord} title="Prontuário">📋</button>
                <button className="btn btn-sm btn-info" onClick={onAddMedication} title="Medicamento">💊</button>
                <button className="btn btn-sm btn-success" onClick={onDischarge} title="Alta">🚪</button>
            </div>
        </div>
    );
};
