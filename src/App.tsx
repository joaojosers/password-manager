import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  const [showForm, setShowForm] = useState(false);
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
