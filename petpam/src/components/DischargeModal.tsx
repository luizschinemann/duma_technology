import React, { useState } from 'react';
import { usePetPam } from '../hooks/usePetPam';

interface DischargeModalProps {
    internmentId: string;
    onClose: () => void;
}

export const DischargeModal: React.FC<DischargeModalProps> = ({ internmentId, onClose }) => {
    const { dischargeAnimal, addRecord, internments, animals } = usePetPam();
    const internment = internments.find(i => i.id === internmentId);
    const animal = animals.find(a => a.id === internment?.animalId);

    const [notes, setNotes] = useState('');

    const handleDischarge = () => {
        if (confirm('Tem certeza que deseja dar alta a este paciente?')) {
            // Auto-log discharge
            if (notes.trim()) {
                addRecord({
                    id: crypto.randomUUID(),
                    internmentId,
                    date: new Date().toISOString(),
                    type: 'Evolution',
                    description: `ALTA MÉDICA. Observações: ${notes}`,
                    responsible: 'Veterinário Responsável'
                });
            }

            dischargeAnimal(internmentId);
            onClose();
        }
    };

    const modalStyle: React.CSSProperties = {
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        zIndex: 1000,
        backdropFilter: 'blur(4px)'
    };

    const contentStyle: React.CSSProperties = {
        backgroundColor: '#fff',
        padding: '32px',
        borderRadius: '12px',
        width: '500px',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        textAlign: 'center'
    };

    return (
        <div style={modalStyle}>
            <div style={contentStyle}>
                <div style={{ marginBottom: '24px' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎉</div>
                    <h2 style={{ margin: '0 0 8px 0', color: '#333', fontWeight: 600 }}>Alta Médica</h2>
                    <p style={{ margin: 0, color: '#666' }}>
                        Paciente <strong>{animal?.name}</strong> está pronto para ir para casa?
                    </p>
                </div>

                <textarea
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    placeholder="Recomendações de alta / Observações finais..."
                    rows={4}
                    style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        marginBottom: '24px',
                        fontFamily: 'inherit',
                        resize: 'none',
                        boxSizing: 'border-box'
                    }}
                />

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                    <button
                        onClick={onClose}
                        className="btn"
                        style={{
                            backgroundColor: '#fff',
                            border: '1px solid #ddd',
                            color: '#666',
                            flex: 1
                        }}
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleDischarge}
                        className="btn btn-success"
                        style={{
                            flex: 1,
                            fontWeight: 600,
                            boxShadow: '0 4px 6px rgba(40, 167, 69, 0.2)'
                        }}
                    >
                        Confirmar Alta
                    </button>
                </div>
            </div>
        </div>
    );
};
