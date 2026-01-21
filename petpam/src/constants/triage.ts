import type { TriageLevel } from '../types';

export const TRIAGE_COLORS: Record<TriageLevel, string> = {
    'Emergência': '#dc3545', // Red
    'Muito Urgente': '#fd7e14', // Orange
    'Urgente': '#ffc107', // Yellow
    'Pouco Urgente': '#28a745', // Green
    'Não Urgente': '#007bff' // Blue
};

export const TRIAGE_OPTIONS: TriageLevel[] = [
    'Emergência',
    'Muito Urgente',
    'Urgente',
    'Pouco Urgente',
    'Não Urgente'
];
