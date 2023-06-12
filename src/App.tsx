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

  function handleBtnClick() {
    setShowForm(true);
  }
  const handleCancel = () => {
    setShowForm(false);
  };

  const addRegister = (inputValues: InputValues) => {
    setRegistersList([...registersList, inputValues]);
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

      {registersList.length === 0 ? (
        <span>     Nenhuma senha cadastrada</span>

      ) : (
        <div>
          {
              registersList
              && registersList.map((register, index) => (
                <div key={ index }>
                  <a href={ register.url }>{register.serviceName}</a>
                  <p>{register.login}</p>
                  <p>{register.senha}</p>
                </div>
              ))
        }
        </div>
      )}
    </div>
  );
}

export default App;
