import React, { useState } from 'react';
import { usePetPam } from '../hooks/usePetPam';
import type { Species, Sex, TriageLevel } from '../types';
import { SPECIES_GROUPS, SPECIES_WITH_SUBCATEGORIES } from '../constants/species';
import { TRIAGE_OPTIONS, TRIAGE_COLORS } from '../constants/triage';

interface AdmissionModalProps {
    baiaId: string;
    onClose: () => void;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({ baiaId, onClose }) => {
    const { admitAnimal, baias } = usePetPam();
    const baiaLabel = baias.find(b => b.id === baiaId)?.label;

    // Form State
    const [animalName, setAnimalName] = useState('');
    const [species, setSpecies] = useState<Species>('Cão');
    const [subCategory, setSubCategory] = useState('');
    const [breed, setBreed] = useState('');
    const [sex, setSex] = useState<Sex>('Male');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [triage, setTriage] = useState<TriageLevel>('Pouco Urgente'); // Default to Green/Low Urgency
    const [allergies, setAllergies] = useState('');

    const [tutorName, setTutorName] = useState('');
    const [tutorPhone, setTutorPhone] = useState('');

    const [reason, setReason] = useState('');
    const [veterinarian, setVeterinarian] = useState('');

    const subOptions = SPECIES_WITH_SUBCATEGORIES[species] || [];
    const hasSubCategories = subOptions.length > 0;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        admitAnimal(
            {
                id: crypto.randomUUID(),
                name: animalName,
                species,
                subCategory: hasSubCategories ? subCategory : undefined,
                breed,
                sex,
                age,
                weight: parseFloat(weight) || 0,
                tutorId: '',
                allergies: allergies ? allergies.split(',').map(s => s.trim()) : [],
                conditions: [],
                triage // Passing the triage level
            },
            {
                id: crypto.randomUUID(),
                name: tutorName,
                phone: tutorPhone
            },
            {
                baiaId,
                admissionDate: new Date().toISOString(),
                reason,
                veterinarian,
                status: 'Active',
                medications: []
            } as any
        );

        onClose();
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
        transition: 'border-color 0.2s'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '4px',
        fontSize: '0.85rem',
        color: '#666',
        fontWeight: 500
    };

    const groupStyle = {
        marginBottom: '16px'
    };

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            zIndex: 1000,
            backdropFilter: 'blur(4px)'
        }}>
            <div style={{
                backgroundColor: '#fff',
                padding: '32px',
                borderRadius: '12px',
                width: '700px',
                maxHeight: '90vh',
                overflowY: 'auto',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
                <div style={{ marginBottom: '24px', borderBottom: '1px solid #eee', paddingBottom: '16px' }}>
                    <h2 style={{ margin: 0, color: '#333', fontWeight: 600 }}>Internamento • {baiaLabel}</h2>
                    <p style={{ margin: '4px 0 0', color: '#666' }}>Preencha os dados clínicos para internar o paciente.</p>
                </div>

                <form onSubmit={handleSubmit}>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>

                        {/* Left Column: Animal */}
                        <div>
                            <h3 style={{ fontSize: '1rem', color: 'var(--color-primary)', borderBottom: '2px solid #f0f0f0', paddingBottom: '8px', marginBottom: '16px' }}>🐾 Dados do Paciente</h3>

                            <div style={groupStyle}>
                                <label style={labelStyle}>Nome do Animal</label>
                                <input
                                    placeholder="Ex: Rex"
                                    value={animalName}
                                    onChange={e => setAnimalName(e.target.value)}
                                    required
                                    style={inputStyle}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                    onBlur={(e) => e.target.style.borderColor = '#ccc'}
                                />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                <div style={groupStyle}>
                                    <label style={labelStyle}>Espécie</label>
                                    <select
                                        value={species}
                                        onChange={e => { setSpecies(e.target.value as Species); setSubCategory(''); }}
                                        style={inputStyle}
                                    >
                                        {Object.entries(SPECIES_GROUPS).map(([group, opts]) => (
                                            <optgroup key={group} label={group}>
                                                {opts.map(opt => (
                                                    <option key={opt} value={opt}>{opt}</option>
                                                ))}
                                            </optgroup>
                                        ))}
                                    </select>
                                </div>

                                {hasSubCategories ? (
                                    <div style={groupStyle}>
                                        <label style={labelStyle}>Tipo</label>
                                        <select
                                            value={subCategory}
                                            onChange={e => setSubCategory(e.target.value)}
                                            style={inputStyle}
                                            required
                                        >
                                            <option value="">Selecione...</option>
                                            {subOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                        </select>
                                    </div>
                                ) : (
                                    <div style={groupStyle}>
                                        <label style={labelStyle}>Raça</label>
                                        <input value={breed} onChange={e => setBreed(e.target.value)} style={inputStyle} placeholder="Ex: Vira-lata" />
                                    </div>
                                )}
                            </div>

                            {hasSubCategories && (
                                <div style={groupStyle}>
                                    <label style={labelStyle}>Raça / Detalhe</label>
                                    <input value={breed} onChange={e => setBreed(e.target.value)} style={inputStyle} placeholder="Detalhes..." />
                                </div>
                            )}

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                                <div style={groupStyle}>
                                    <label style={labelStyle}>Sexo</label>
                                    <select value={sex} onChange={e => setSex(e.target.value as Sex)} style={inputStyle}>
                                        <option value="Male">Macho</option>
                                        <option value="Female">Fêmea</option>
                                    </select>
                                </div>
                                <div style={groupStyle}>
                                    <label style={labelStyle}>Idade</label>
                                    <select value={age} onChange={e => setAge(e.target.value)} style={inputStyle}>
                                        <option value="">Selecione...</option>
                                        <option value="< 1 ano">&lt; 1 ano</option>
                                        {Array.from({ length: 50 }, (_, i) => i + 1).map(year => (
                                            <option key={year} value={`${year} anos`}>{year} anos</option>
                                        ))}
                                    </select>
                                </div>
                                <div style={groupStyle}>
                                    <label style={labelStyle}>Peso (kg)</label>
                                    <input value={weight} onChange={e => setWeight(e.target.value)} type="number" step="0.1" style={inputStyle} placeholder="0.0" />
                                </div>
                            </div>

                            <div style={groupStyle}>
                                <label style={labelStyle}>Classificação de Risco (Manchester)</label>
                                <select
                                    value={triage}
                                    onChange={e => setTriage(e.target.value as TriageLevel)}
                                    style={{
                                        ...inputStyle,
                                        borderLeft: `6px solid ${TRIAGE_COLORS[triage] || '#ccc'}`, /* Color indicator */
                                        fontWeight: 600
                                    }}
                                >
                                    {TRIAGE_OPTIONS.map(opt => (
                                        <option key={opt} value={opt} style={{ color: TRIAGE_COLORS[opt], fontWeight: 'bold' }}>
                                            {opt}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Right Column: Tutor & Clinical */}
                        <div>
                            <h3 style={{ fontSize: '1rem', color: 'var(--color-primary)', borderBottom: '2px solid #f0f0f0', paddingBottom: '8px', marginBottom: '16px' }}>👤 Tutor & Clínica</h3>

                            <div style={groupStyle}>
                                <label style={labelStyle}>Nome do Tutor</label>
                                <input value={tutorName} onChange={e => setTutorName(e.target.value)} required style={inputStyle} />
                            </div>

                            <div style={groupStyle}>
                                <label style={labelStyle}>Telefone / WhatsApp</label>
                                <input value={tutorPhone} onChange={e => setTutorPhone(e.target.value)} required style={inputStyle} />
                            </div>

                            <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '24px 0' }} />

                            <div style={groupStyle}>
                                <label style={labelStyle}>Motivo do Internamento</label>
                                <input value={reason} onChange={e => setReason(e.target.value)} required style={inputStyle} placeholder="Ex: Gastroenterite" />
                            </div>

                            <div style={groupStyle}>
                                <label style={labelStyle}>Veterinário Responsável</label>
                                <input value={veterinarian} onChange={e => setVeterinarian(e.target.value)} required style={inputStyle} />
                            </div>

                            <div style={groupStyle}>
                                <label style={labelStyle}>Alergias / Observações</label>
                                <input value={allergies} onChange={e => setAllergies(e.target.value)} style={inputStyle} placeholder="Separar por vírgula" />
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', paddingTop: '24px', borderTop: '1px solid #eee' }}>
                        <button type="button" onClick={onClose} className="btn" style={{ backgroundColor: 'transparent', color: '#666', border: '1px solid #ddd' }}>Cancelar</button>
                        <button type="submit" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '1rem', boxShadow: '0 4px 6px rgba(0,var(--color-primary-rgb),0.2)' }}>Confirmar Internamento</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
