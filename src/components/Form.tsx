import React, { useState } from 'react';

function CreateForm() {
  const [name, setName] = useState<string>('');
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [url, setUrl] = useState<string>('');

  // const [formData, setFormData] = useState(INITIAL_STATE);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const { name, login, password, url } = e.target;
  //   };

  return (
    <>
      {/* <span>Cadastrar nova senha</span> */}
      {/* <div className="register-container"> */}
      {/* <div> */}
      <form onSubmit={ onSubmit }>
        <label htmlFor="Nome do Serviço">
          Nome do Serviço
          <input
            type="text"
            onChange={ (e) => setName(e.target.value) }
            value={ name }
            required
          />
        </label>
        <label htmlFor="Login">
          Login
          <input
            type="text"
            onChange={ (e) => setLogin(e.target.value) }
            value={ login }
            required
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="text"
            onChange={ (e) => setPassword(e.target.value) }
            value={ password }
            required
          />
        </label>
        <label htmlFor="url">
          URL
          <input
            type="text"
            onChange={ (e) => setUrl(e.target.value) }
            value={ url }
            required
          />
        </label>
        <button type="submit">Salvar</button>
      </form>
      {/* </div> */}
    </>
  );
}
export default CreateForm;
