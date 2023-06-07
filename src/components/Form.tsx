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

  function validateName() {
    return name.length === 0;
  }
  function validateLoginLength() {
    return login.length === 0;
  }
  function validatePasswordLessThanEight() {
    return password.length < 8;
  }
  function validatePasswordMoreThanSixteen() {
    return password.length > 16;
  }
  function validateSpecialCharacters() {
    const r = /[!@#$%^&*(),.?":{}|<>]/;
    return !r.test(password);
  }
  function validateForm() {
    const nameIsInvalid = validateName();
    const passwordLessThanEight = validatePasswordLessThanEight();
    const specialCharacters = validateSpecialCharacters();
    const passwordMoreThanSixteen = validatePasswordMoreThanSixteen();
    const loginLength = validateLoginLength();

    return nameIsInvalid || passwordLessThanEight
    || passwordMoreThanSixteen || specialCharacters || loginLength;
    // && login.length === 0
    // && password !== r;
    // && typeof password !== r;
  }

  //   function validateForm() = {
  //     if (name.length === 0 ) {
  //     return setBtnCadastrar(false);
  //   }
  // }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBtnCadastrar(validateForm());
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
            onChange={ (e) => {
              setLogin(e.target.value);
              onSubmit(e);
            } }
            value={ login }
            required
          />
        </label>
        <label htmlFor="Senha">
          Senha
          <input
            type="password"
            id="Senha"
            onChange={ (e) => {
              setPassword(e.target.value);
              onSubmit(e);
            } }
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
