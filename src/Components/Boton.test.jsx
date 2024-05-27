import { describe, it, beforeEach, vi, expect, test } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import Boton from './Boton';
import { CalcuContext } from '../Context/CalcuContext';
import '@testing-library/jest-dom/vitest';

describe('Componente boton', () => {
  let mockSetCalcu;

  beforeEach(() => {
    mockSetCalcu = vi.fn(); 
  });

  test('deberia de manejar el evento click correctamente', () => {
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

  test('debería manejar el evento click y resetear el estado con "C"', () => {
    const value = {
      calcu: { numero: 5, signo: '+', resultado: 10 },
      setCalcu: mockSetCalcu,
    };

    render(
      <CalcuContext.Provider value={value}>
        <Boton valor="C" />
      </CalcuContext.Provider>
    );

    const button = screen.getByText('C');
    fireEvent.click(button);

    expect(mockSetCalcu).toHaveBeenCalledWith({
      numero: 0,
      signo: '',
      resultado: 0
    });
  });

  test('debería manejar el evento click y calcular el resultado con "="', () => {
    const value = {
      calcu: { numero: 5, signo: '+', resultado: 10 },
      setCalcu: mockSetCalcu,
    };

    render(
      <CalcuContext.Provider value={value}>
        <Boton valor="=" />
      </CalcuContext.Provider>
    );

    const button = screen.getByText('=');
    fireEvent.click(button);

    expect(mockSetCalcu).toHaveBeenCalledWith({
      numero: 0,
      signo: '',
      resultado: '15'
    });
  });

  test('debería manejar el evento click y actualizar el estado con una operación', () => {
    const value = {
      calcu: { numero: 5, signo: '', resultado: 0 },
      setCalcu: mockSetCalcu,
    };

    render(
      <CalcuContext.Provider value={value}>
        <Boton valor="+" />
      </CalcuContext.Provider>
    );

    const button = screen.getByText('+');
    fireEvent.click(button);

    expect(mockSetCalcu).toHaveBeenCalledWith({
      numero: 0,
      signo: '+',
      resultado: 5
    });
  });

});




