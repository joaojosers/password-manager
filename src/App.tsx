import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
// import { onSubmit } from './components/Form'

function App() {
  const [showForm, setShowForm] = useState(false);
  const [registersList, setRegistersList] = useState([]);

  function handleBtnClick() {
    setShowForm(true);
  }
  const handleCancel = () => {
    setShowForm(false);
  };

  const addRegister = (inputValues) => {
    setRegistersList([...registersList, inputValues]);
  };
  console.log(registersList);
  return (
    <div>
      <Header />
      {showForm ? (
        <Form handleCancel={ handleCancel } addRegister={ addRegister } />

      ) : (
        <>
          <button
            type="button"
            onClick={ handleBtnClick }
          >
            Cadastrar nova senha
          </button>
          <span>     Nenhuma senha cadastrada</span>
        </>
      ) }
    </div>

  );
}
export default App;
