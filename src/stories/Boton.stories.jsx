import React from 'react';
import Boton from '../Components/Boton';
import { CalcuContext } from '../Context/CalcuContext';

export default {
  title: 'Boton',
  component: Boton,
  argTypes: {
    valor: { control: 'text' },
  },
  tags: ['autodocs']
};

const Template = (args) => {
  const [calcu, setCalcu] = React.useState({
    numero: 0,
    signo: '',
    resultado: 0,
  });

  return (
    <CalcuContext.Provider value={{ calcu, setCalcu }}>
      <Boton {...args} />
    </CalcuContext.Provider>
  );
};

export const Default = Template.bind({});
Default.args = {
  valor: '1',
};

export const Suma = Template.bind({});
Suma.args = {
  valor: '+',
};

export const Resta = Template.bind({});
Resta.args = {
  valor: '-',
};

export const Multiplicacion = Template.bind({});
Multiplicacion.args = {
  valor: 'x',
};

export const Division = Template.bind({});
Division.args = {
  valor: '/',
};

export const Igual = Template.bind({});
Igual.args = {
  valor: '=',
};

export const Porcentaje = Template.bind({});
Porcentaje.args = {
  valor: '%',
};

export const Coma = Template.bind({});
Coma.args = {
  valor: '.',
};

export const Reset = Template.bind({});
Reset.args = {
  valor: 'C',
};

export const Signo = Template.bind({});
Signo.args = {
  valor: '-+',
};
