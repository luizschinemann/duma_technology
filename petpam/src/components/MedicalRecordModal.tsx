import React, { useState } from 'react';
import { usePetPam } from '../hooks/usePetPam';
import type { MedicalRecordEntry } from '../types';

interface MedicalRecordModalProps {
    internmentId: string;
    onClose: () => void;
}

export const MedicalRecordModal: React.FC<MedicalRecordModalProps> = ({ internmentId, onClose }) => {
    // CORRECTED: uses 'records' and 'addRecord' as per ProjectContext
    const { records, addRecord, internments, animals } = usePetPam();
    const [description, setDescription] = useState('');
    const [type, setType] = useState<MedicalRecordEntry['type']>('Evolution');
    const [responsible, setResponsible] = useState('');

    const internment = internments.find(i => i.id === internmentId);
    const animal = animals.find(a => a.id === internment?.animalId);
    // CORRECTED: uses 'records'
    const patientRecords = records.filter(r => r.internmentId === internmentId).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        // CORRECTED: uses 'addRecord'
        addRecord({
            id: crypto.randomUUID(),
            internmentId,
            date: new Date().toISOString(),
            type,
            description,
            responsible
        });
        setDescription('');
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
        width: '800px',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    };

    const inputStyle = {
        padding: '12px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '1rem',
        backgroundColor: '#fff',
        color: '#333',
        width: '100%',
        boxSizing: 'border-box' as const,
        outline: 'none',
        marginBottom: '12px'
    };

    return (
        <div style={modalStyle}>
            <div style={contentStyle}>
                <div style={{ marginBottom: '24px', borderBottom: '1px solid #eee', paddingBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ margin: 0, color: '#333', fontWeight: 600 }}>📋 Prontuário Clínico</h2>
                        <p style={{ margin: '4px 0 0', color: '#666' }}>Paciente: {animal?.name}</p>
                    </div>
                    <button onClick={onClose} style={{ border: 'none', background: 'transparent', fontSize: '1.5rem', cursor: 'pointer', color: '#999' }}>&times;</button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', flex: 1, overflow: 'hidden' }}>

                    {/* Left: New Entry */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{ fontSize: '1rem', color: 'var(--color-primary)', borderBottom: '2px solid #f0f0f0', paddingBottom: '8px', marginBottom: '16px' }}>Nova Evolução</h3>
                        <form onSubmit={handleAdd} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>

                            <label style={{ fontSize: '0.85rem', fontWeight: 500, color: '#666' }}>Tipo de Registro</label>
                            <select value={type} onChange={e => setType(e.target.value as any)} style={inputStyle}>
                                <option value="Evolution">Evolução Clínica</option>
                                <option value="Procedure">Procedimento</option>
                                <option value="Observation">Observação</option>
                                <option value="Intercurrence">Intercorrência</option>
                            </select>

                            <label style={{ fontSize: '0.85rem', fontWeight: 500, color: '#666' }}>Responsável</label>
                            <input
                                value={responsible}
                                onChange={e => setResponsible(e.target.value)}
                                required
                                placeholder="Nome do Vet/Enfermeiro"
                                style={inputStyle}
                            />

                            <label style={{ fontSize: '0.85rem', fontWeight: 500, color: '#666' }}>Descrição</label>
                            <textarea
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                required
                                rows={6}
                                placeholder="Descreva a evolução do paciente..."
                                style={{ ...inputStyle, resize: 'vertical' }}
                            />

                            <button type="submit" className="btn btn-primary" style={{ marginTop: '8px', padding: '12px', fontWeight: 600 }}>
                                + Adicionar Registro
                            </button>
                        </form>
                    </div>

                    {/* Right: History */}
                    <div style={{ display: 'flex', flexDirection: 'column', overflowY: 'auto', paddingRight: '8px' }}>
                        <h3 style={{ fontSize: '1rem', color: '#666', borderBottom: '2px solid #f0f0f0', paddingBottom: '8px', marginBottom: '16px' }}>Histórico</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {patientRecords.length === 0 && <p style={{ color: '#999', fontStyle: 'italic' }}>Nenhum registro encontrado.</p>}

                            {patientRecords.map(record => (
                                <div key={record.id} style={{
                                    backgroundColor: '#f8f9fa',
                                    borderRadius: '8px',
                                    padding: '16px',
                                    borderLeft: `4px solid ${record.type === 'Intercurrence' ? 'var(--color-danger)' :
                                            record.type === 'Procedure' ? 'var(--color-info)' : 'var(--color-success)'
                                        }`
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                        <span style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#333' }}>
                                            {record.type === 'Evolution' ? 'Evolução' :
                                                record.type === 'Observation' ? 'Observação' :
                                                    record.type === 'Procedure' ? 'Procedimento' : 'Intercorrência'}
                                        </span>
                                        <span style={{ fontSize: '0.8rem', color: '#888' }}>
                                            {new Date(record.date).toLocaleString()}
                                        </span>
                                    </div>
                                    <p style={{ margin: '0 0 8px 0', fontSize: '0.95rem', color: '#555', whiteSpace: 'pre-wrap' }}>
                                        {record.description}
                                    </p>
                                    <div style={{ fontSize: '0.8rem', color: '#999', fontStyle: 'italic' }}>
                                        Resp: {record.responsible}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
