import React, { useState } from 'react';

type CreateFormProps = {
  handleCancel: () => void;

};
function CreateForm(props:CreateFormProps) {
  const { handleCancel } = props;
  const [name, setName] = useState<string>('');
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [btnCadastrar, setBtnCadastrar] = useState(true);

  function validateForm() {
    const r = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,18}$/;
    return name.length === 0 && login.length === 0;
    // && password !== r;
    // && typeof password !== r;
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // function validateForm() {
    //   return name.length === 0;
    // }

    setBtnCadastrar(validateForm());
    // const retornoValidateForm = validateForm();
  };
  return (
    <>
      {/* <span>Cadastrar nova senha</span> */}
      {/* <div className="register-container"> */}
      {/* <div> */}
      <form onChange={ validateForm }>
        <label htmlFor="Nome do serviço">
          Nome do serviço
          <input
            type="text"
            id="Nome do serviço"
            onChange={ (e) => {
              setName(e.target.value);
              onSubmit(e);
            } }
            value={ name }
            required
          />
        </label>
        <label htmlFor="Login">
          Login
          <input
            type="text"
            id="Login"
            onChange={ (e) => setLogin(e.target.value) }
            value={ login }
            required
          />
        </label>
        <label htmlFor="Senha">
          Senha
          <input
            type="password"
            id="Senha"
            onChange={ (e) => setPassword(e.target.value) }
            value={ password }
            required
          />
        </label>
        <label htmlFor="URL">
          URL
          <input
            type="text"
            id="URL"
            onChange={ (e) => setUrl(e.target.value) }
            value={ url }
            required
          />
        </label>
        <button disabled={ btnCadastrar } type="submit">Cadastrar </button>
        <button type="button" onClick={ handleCancel }>Cancelar</button>
      </form>
      {/* </div> */}
    </>
  );
}

export default CreateForm;
