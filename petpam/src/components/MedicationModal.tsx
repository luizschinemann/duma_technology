import React, { useState } from 'react';
import { usePetPam } from '../hooks/usePetPam';
import type { MedicationType, AdministrationRoute } from '../types';

interface MedicationModalProps {
    internmentId: string;
    onClose: () => void;
}

export const MedicationModal: React.FC<MedicationModalProps> = ({ internmentId, onClose }) => {
    // CORRECTED: uses 'logMedication'
    const { internments, addMedication, logMedication, animals } = usePetPam();
    const internment = internments.find(i => i.id === internmentId);
    const animal = animals.find(a => a.id === internment?.animalId);

    // New Prescr state
    const [name, setName] = useState('');
    const [type, setType] = useState<MedicationType>('Antibiotic');
    const [route, setRoute] = useState<AdministrationRoute>('Oral');
    const [dosage, setDosage] = useState('');
    const [frequency, setFrequency] = useState('');
    const [duration, setDuration] = useState('');

    const handlePrescribe = (e: React.FormEvent) => {
        e.preventDefault();
        addMedication(internmentId, {
            id: crypto.randomUUID(),
            name,
            type,
            route,
            dosage,
            frequency,
            duration,
            startDate: new Date().toISOString()
        });
        setName('');
        setDosage('');
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
        width: '900px',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    };

    const inputStyle = {
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '0.95rem',
        width: '100%',
        boxSizing: 'border-box' as const,
        marginBottom: '12px'
    };

    return (
        <div style={modalStyle}>
            <div style={contentStyle}>
                <div style={{ marginBottom: '24px', borderBottom: '1px solid #eee', paddingBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ margin: 0, color: '#333', fontWeight: 600 }}>💊 Gestão de Medicamentos</h2>
                        <p style={{ margin: '4px 0 0', color: '#666' }}>Paciente: {animal?.name}</p>
                    </div>
                    <button onClick={onClose} style={{ border: 'none', background: 'transparent', fontSize: '1.5rem', cursor: 'pointer', color: '#999' }}>&times;</button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '32px', flex: 1, overflow: 'hidden' }}>

                    {/* Left: Prescribe */}
                    <div>
                        <h3 style={{ fontSize: '1rem', color: 'var(--color-primary)', borderBottom: '2px solid #f0f0f0', paddingBottom: '8px', marginBottom: '16px' }}>Nova Prescrição</h3>
                        <form onSubmit={handlePrescribe}>
                            <label style={{ display: 'block', fontSize: '0.85rem', color: '#666', marginBottom: '4px' }}>Nome do Fármaco</label>
                            <input value={name} onChange={e => setName(e.target.value)} required style={inputStyle} placeholder="Ex: Dipirona" />

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#666', marginBottom: '4px' }}>Tipo</label>
                                    <select value={type} onChange={e => setType(e.target.value as any)} style={inputStyle}>
                                        <option value="Antibiotic">Antibiótico</option>
                                        <option value="Analgesic">Analgésico</option>
                                        <option value="Anti-inflammatory">Anti-inflamatório</option>
                                        <option value="Other">Outro</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#666', marginBottom: '4px' }}>Via</label>
                                    <select value={route} onChange={e => setRoute(e.target.value as any)} style={inputStyle}>
                                        <option value="Oral">Oral</option>
                                        <option value="Intravenosa">IV</option>
                                        <option value="Intramuscular">IM</option>
                                        <option value="Subcutânea">SC</option>
                                    </select>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#666', marginBottom: '4px' }}>Dose</label>
                                    <input value={dosage} onChange={e => setDosage(e.target.value)} required style={inputStyle} placeholder="Ex: 5ml" />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#666', marginBottom: '4px' }}>Frequência</label>
                                    <input value={frequency} onChange={e => setFrequency(e.target.value)} required style={inputStyle} placeholder="Ex: 12/12h" />
                                </div>
                            </div>

                            <label style={{ display: 'block', fontSize: '0.85rem', color: '#666', marginBottom: '4px' }}>Duração</label>
                            <input value={duration} onChange={e => setDuration(e.target.value)} required style={inputStyle} placeholder="Ex: 5 dias" />

                            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px', padding: '12px', fontWeight: 600 }}>Prescrever</button>
                        </form>
                    </div>

                    {/* Right: Active Meds & Administration */}
                    <div style={{ display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
                        <h3 style={{ fontSize: '1rem', color: '#666', borderBottom: '2px solid #f0f0f0', paddingBottom: '8px', marginBottom: '16px' }}>Prescrições Ativas</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {(!internment?.medications || internment.medications.length === 0) && (
                                <p style={{ color: '#999', fontStyle: 'italic' }}>Nenhuma medicação prescrita.</p>
                            )}

                            {internment?.medications?.map(med => (
                                <div key={med.id} style={{
                                    border: '1px solid #eee',
                                    borderRadius: '8px',
                                    padding: '16px',
                                    backgroundColor: '#fcfcfc',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                        <h4 style={{ margin: 0, color: 'var(--color-primary)' }}>{med.name}</h4>
                                        <span className="badge" style={{ backgroundColor: '#e9ecef', color: '#555' }}>
                                            {med.frequency} • {med.route}
                                        </span>
                                    </div>
                                    <p style={{ margin: '0 0 12px 0', fontSize: '0.9rem', color: '#666' }}>
                                        <strong>Dose:</strong> {med.dosage} <br />
                                        <strong>Duração:</strong> {med.duration}
                                    </p>

                                    <button
                                        onClick={() => {
                                            // CORRECTED: uses 'logMedication'
                                            logMedication({
                                                id: crypto.randomUUID(),
                                                medicationId: med.id,
                                                internmentId,
                                                date: new Date().toISOString(),
                                                administeredBy: 'Veterinário',
                                                doseApplied: med.dosage
                                            });
                                            alert('Aplicação registrada com sucesso!');
                                        }}
                                        className="btn btn-sm btn-success"
                                        style={{ width: '100%' }}
                                    >
                                        ✅ Registrar Aplicação Agora
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
