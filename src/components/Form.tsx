import React, { useState } from 'react';

type CreateFormProps = {
  handleCancel: () => void;

};

// function cadastrarForm() {
//   return true;
// }

function CreateForm(props:CreateFormProps) {
  const { handleCancel } = props;
  const [name, setName] = useState<string>('');
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [btnCadastrar, setBtnCadastrar] = useState(true);

  // const [btnEnable setBtnEnable] = useState(true);

  const passwordValid = 'valid-password-check';
  const passwordInvalid = 'invalid-password-check';

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
  function validateStringsAndNumbers() {
    const r = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
    return !r.test(password);
  }
  function validateForm() {
    const nameIsInvalid = validateName();
    const passwordLessThanEight = validatePasswordLessThanEight();
    const specialCharacters = validateSpecialCharacters();
    const passwordMoreThanSixteen = validatePasswordMoreThanSixteen();
    const loginLength = validateLoginLength();
    const PasswordStringsAndNumbers = validateStringsAndNumbers();

    return nameIsInvalid || passwordLessThanEight
    || passwordMoreThanSixteen || specialCharacters
    || loginLength || PasswordStringsAndNumbers;
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const inputInfo = { name, login, password, url };
  };
  return (
    <>

      <form onSubmit={ onSubmit }>
        <p
          className={ validatePasswordLessThanEight() ? (passwordInvalid
          )

            : passwordValid }
        >
          Possuir 8 ou mais caracteres
        </p>
        <p
          className={ !validatePasswordMoreThanSixteen() ? (passwordValid
          )

            : passwordInvalid }
        >
          Possuir até 16 caracteres
        </p>
        <p
          className={ !validateStringsAndNumbers() ? (passwordValid
          )

            : passwordInvalid }
        >
          Possuir letras e números
        </p>
        <p
          className={ !validateSpecialCharacters() ? (passwordValid
          )

            : passwordInvalid }
        >
          Possuir algum caractere especial
        </p>
        <label htmlFor="Nome do serviço">
          Nome do serviço
          <input
            type="text"
            id="Nome do serviço"
            onChange={ (e) => {
              setName(e.target.value);
              // onSubmit(e);
              setBtnCadastrar(validateForm());
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
              // onSubmit(e);
              setBtnCadastrar(validateForm());
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
              // onSubmit(e);
              setBtnCadastrar(validateForm());
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
