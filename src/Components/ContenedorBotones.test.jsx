import { vitest, describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContenedorBotones from './ContenedorBotones';
import '@testing-library/jest-dom/vitest';

describe('Componente ContenedorBotones', () => {
  test('deberia de renderizar componentes hijos de forma correcta', () => {
    render(
      <ContenedorBotones>
        <button>Boton 1</button>
        <button>Boton 2</button>
      </ContenedorBotones>
    );

    const boton1 = screen.getByText('Boton 1');
    const boton2 = screen.getByText('Boton 2');

    expect(boton1).toBeInTheDocument();
    expect(boton2).toBeInTheDocument();
  });
});
