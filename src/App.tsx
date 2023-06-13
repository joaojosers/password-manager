import './App.css';
import { useState } from 'react';
import Form, { InputValuesProps } from './components/Form';
import Header from './components/Header';

type InputValues = {
  serviceName: string,
  login: string,
  senha: string,
  url: string,
};

function App() {
  const [showForm, setShowForm] = useState(false);
  const [registersList, setRegistersList] = useState<InputValuesProps>([]);
  const [checkbox, setCheckbox] = useState(false);

  function handleBtnClick() {
    setShowForm(true);
  }
  const handleCancel = () => {
    setShowForm(false);
  };

  const addRegister = (inputValues: InputValues) => {
    setRegistersList([...registersList, inputValues]);
  };

  const removeRegister = (index: number) => () => {
    const registersListCopy = [...registersList];
    registersListCopy.splice(index, 1);
    setRegistersList(registersListCopy);
    console.log(index);
    console.log(registersList);
    console.log(registersListCopy);
  };

  if (showForm) {
    return (<Form
      handleCancel={ handleCancel }
      addRegister={ addRegister }
    />);
  }
  return (
    <div>
      <Header />

      <button
        type="button"
        onClick={ handleBtnClick }
      >
        Cadastrar nova senha
      </button>
      <label htmlFor="check">
        Esconder senhas
        <input
          id="check"
          type="checkbox"
          onChange={ (e) => setCheckbox(e.target.checked) }
        />
      </label>
      {registersList.length === 0 ? (
        <span>     Nenhuma senha cadastrada</span>

      ) : (
        <div>
          {registersList
                && registersList.map((register, index) => (
                  <>
                    <div key={ index }>
                      <a href={ register.url }>{register.serviceName}</a>
                      <p>{register.login}</p>
                      { checkbox ? '******' : <p>{register.senha}</p> }

                    </div>
                    <button
                      type="button"
                      data-testid="remove-btn"
                      onClick={ removeRegister(index) }
                    >
                      Remover registro
                    </button>
                  </>
                ))}
        </div>

      )}

    </div>
  );
}

export default App;
