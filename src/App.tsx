import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  const [showForm, setShowForm] = useState();
  return (
    <div>
      <Header />
      {showForm ? <button>Cadastrar</button> : <Form /> }
    </div>
  );
}

export default App;
