import React from 'react';

export const Header: React.FC = () => {
    return (
        <header style={{
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            padding: 'var(--spacing-md)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: 'var(--shadow-md)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <h1 style={{ margin: 0, fontSize: '1.5rem' }}>🐾 PetPam</h1>
                <span style={{ opacity: 0.8, fontSize: '0.9rem' }}>Sistema de Internamento</span>
            </div>
            <div>
                <span style={{ marginRight: '10px' }}>Dr. Veterinário</span>
                <button className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                    Sair
                </button>
            </div>
        </header>
    );
};
