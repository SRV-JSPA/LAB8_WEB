import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Context from './Context';
import '@testing-library/jest-dom/vitest';

describe('Componente Context', () => {
    test('debería renderizar componentes hijos de forma correcta', () => {
        render(
          <Context>
            <p>Texto hijo 1</p>
            <p>Texto hijo 2</p>
          </Context>
        );
    
        const textoHijo1 = screen.getByText('Texto hijo 1');
        const textoHijo2 = screen.getByText('Texto hijo 2');
    
        expect(textoHijo1).toBeInTheDocument();
        expect(textoHijo2).toBeInTheDocument();
      });
})