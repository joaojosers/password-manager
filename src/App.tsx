import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
// import { onSubmit } from './components/Form'

function App() {
  const [showForm, setShowForm] = useState(false);
  // const [addRegister, setAddRegister] = useState([]);

  // function infoRegister() {
  //   return inputInfo();
  // }

  function handleBtnClick() {
    setShowForm(true);
  }
  const handleCancel = () => {
    setShowForm(false);
  };
  return (
    <div>
      <Header />
      {showForm ? (
        <Form handleCancel={ handleCancel } />

      ) : (
        <button
          type="button"
          onClick={ handleBtnClick }
        >
          Cadastrar nova senha
        </button>
      ) }
    </div>

  );
}
export default App;
