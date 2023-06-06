import React, { useState } from 'react';

function CreateForm() {
  const [name, setName] = useState<string>('');
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [url, setUrl] = useState<string>('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      {/* <span>Cadastrar nova senha</span> */}
      {/* <div className="register-container"> */}
      {/* <div> */}
      <form onSubmit={ onSubmit }>
        <label htmlFor="Nome do serviço">
          Nome do serviço
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
        <label htmlFor="Senha">
          Senha
          <input
            type="password"
            onChange={ (e) => setPassword(e.target.value) }
            value={ password }
            required
          />
        </label>
        <label htmlFor="URL">
          URL
          <input
            type="text"
            onChange={ (e) => setUrl(e.target.value) }
            value={ url }
            required
          />
        </label>
        <button type="submit">Cadastrar</button>
        <button type="submit">Cancelar</button>
      </form>
      {/* </div> */}
    </>
  );
}
export default CreateForm;
