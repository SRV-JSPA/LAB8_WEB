import React from 'react';
import Pantalla from '../Components/Pantalla';
import { CalcuContext } from '../Context/CalcuContext';

export default {
  title: 'Pantalla',
  component: Pantalla,
  tags: ['autodocs']
};

const Template = (args) => {
  const [calcu, setCalcu] = React.useState(args.calcu);

  return (
    <CalcuContext.Provider value={{ calcu, setCalcu }}>
      <Pantalla />
    </CalcuContext.Provider>
  );
};

export const Default = Template.bind({});
Default.args = {
  calcu: {
    numero: 0,
    signo: '',
    resultado: 0,
  },
};

export const ConNumero = Template.bind({});
ConNumero.args = {
  calcu: {
    numero: 123456789,
    signo: '',
    resultado: 0,
  },
};

export const ConNumeroGrande = Template.bind({});
ConNumeroGrande.args = {
  calcu: {
    numero: 1234567890,
    signo: '',
    resultado: 0,
  },
};

export const ConResultado = Template.bind({});
ConResultado.args = {
  calcu: {
    numero: 0,
    signo: '',
    resultado: 987654321,
  },
};

export const ConResultadoGrande = Template.bind({});
ConResultadoGrande.args = {
  calcu: {
    numero: 0,
    signo: '',
    resultado: 987654321,
  },
};
