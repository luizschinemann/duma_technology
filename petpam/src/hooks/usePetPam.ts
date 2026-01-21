import { useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext';

export const usePetPam = () => {
    const context = useContext(ProjectContext);
    if (!context) {
        throw new Error('usePetPam must be used within a ProjectProvider');
    }
    return context;
};
