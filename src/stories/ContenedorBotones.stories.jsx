import React from 'react';
import ContenedorBotones from '../Components/ContenedorBotones';
import Boton from '../Components/Boton';
import { CalcuContext } from '../Context/CalcuContext';

export default {
  title: 'ContenedorBotones',
  component: ContenedorBotones,
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
      <ContenedorBotones {...args} />
    </CalcuContext.Provider>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: <Boton valor="1" />,
};

export const MultiplesBotones = Template.bind({});
MultiplesBotones.args = {
  children: (
    <>
      <Boton valor="1" />
      <Boton valor="2" />
      <Boton valor="3" />
    </>
  ),
};

export const Operaciones = Template.bind({});
Operaciones.args = {
  children: (
    <>
      <Boton valor="+" />
      <Boton valor="-" />
      <Boton valor="x" />
      <Boton valor="/" />
    </>
  ),
};

export const BotonesMixtos = Template.bind({});
BotonesMixtos.args = {
  children: (
    <>
      <Boton valor="C" />
      <Boton valor="1" />
      <Boton valor="+" />
      <Boton valor="=" />
    </>
  ),
};
