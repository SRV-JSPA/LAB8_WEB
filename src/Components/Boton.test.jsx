import { describe, it, beforeEach, vi, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Boton from './Boton';
import { CalcuContext } from '../Context/CalcuContext';

describe('Boton Component', () => {
  let mockSetCalcu;

  beforeEach(() => {
    mockSetCalcu = vi.fn(); 
  });

  it('should handle click event correctly', () => {
    const value = {
      calcu: { numero: 5, signo: '', resultado: 0 },
      setCalcu: mockSetCalcu,
      valor: '5'
    };

    const { getByText } = render(
      <CalcuContext.Provider value={value}>
        <Boton valor={value.valor} />
      </CalcuContext.Provider>
    );

    const button = getByText('5');
    fireEvent.click(button);

    expect(mockSetCalcu).toHaveBeenCalledWith({
      numero: 55, 
      signo: '',
      resultado: 0
    });
  });
});
