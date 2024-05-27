import React from 'react';
import Context from '../Components/Context';
import Boton from '../Components/Boton';
import Pantalla from '../Components/Pantalla';
import { CalcuContext } from '../Context/CalcuContext';

export default {
  title: 'Context',
  component: Context,
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
      <Context {...args} />
    </CalcuContext.Provider>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: <Boton valor="1" />,
};

export const ConMultiplesHijos = Template.bind({});
ConMultiplesHijos.args = {
  children: (
    <>
      <Pantalla />
      <Boton valor="1" />
      <Boton valor="2" />
      <Boton valor="3" />
    </>
  ),
};


export const ConOperaciones = Template.bind({});
ConOperaciones.args = {
  children: (
    <>
      <Boton valor="+" />
      <Boton valor="-" />
      <Boton valor="x" />
      <Boton valor="/" />
    </>
  ),
};

export const ContenidoMixto = Template.bind({});
ContenidoMixto.args = {
  children: (
    <>
      <Pantalla />
      <Boton valor="C" />
      <Boton valor="1" />
      <Boton valor="+" />
      <Boton valor="=" />
    </>
  ),
};
