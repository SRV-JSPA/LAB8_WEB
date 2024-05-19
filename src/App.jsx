import Boton from './Components/Boton.jsx';
import ContenedorBotones from './Components/ContenedorBotones.jsx';
import Context from './Components/Context.jsx';
import Pantalla from './Components/Pantalla.jsx';
import CalcuProvider from './Context/CalcuContext.jsx';

const App = () => {
    const valboton = [
        ['C', '-+', '%', '/'],
        [7, 8, 9, 'x'],
        [4, 5, 6, '-'],
        [1, 2, 3, '+'],
        [0, '.', '='],
    ];

    return (
        <CalcuProvider>
            <Context>
                <Pantalla/>
                <ContenedorBotones>
                    {valboton.map((row, rowIndex) => 
                        row.map((btn, btnIndex) => (
                            <Boton
                                valor={btn}
                                key={`${rowIndex}-${btnIndex}`}
                            />
                        ))
                    )}
                </ContenedorBotones>
            </Context>
        </CalcuProvider>
    );
};

export default App;
