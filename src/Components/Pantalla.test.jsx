import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CalcuContext } from '../Context/CalcuContext';
import Pantalla from './Pantalla';
import '@testing-library/jest-dom/vitest';

describe('Componente Pantalla', () => {
    test('debería mostrar el número válido si calcu.numero está presente', () => {
        const value = {
          calcu: { numero: 123456789, signo: '', resultado: 0 }
        };
    
        render(
          <CalcuContext.Provider value={value}>
            <Pantalla />
          </CalcuContext.Provider>
        );
    
        const pantallaElement = screen.getByText('123456789');
        expect(pantallaElement).toBeInTheDocument();
      });

      test('debería mostrar el resultado si calcu.numero no está presente', () => {
        const value = {
          calcu: { numero: 0, signo: '', resultado: 42 }
        };
    
        render(
          <CalcuContext.Provider value={value}>
            <Pantalla />
          </CalcuContext.Provider>
        );
    
        const pantallaElement = screen.getByText('42');
        expect(pantallaElement).toBeInTheDocument();
      });
})