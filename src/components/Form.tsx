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
  function validateStringsAndNumbers() {
    const r = /^[0-9a-zA-Z]*[0-9][0-9a-zA-Z]*$/;
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
    setBtnCadastrar(validateForm());
  };
  return (
    <>

      <form onChange={ validateForm }>
        <p
          className={ validatePasswordLessThanEight() ? ('invalid-password-check'
          )

            : 'valid-password-check' }
        >
          Possuir 8 ou mais caracteres
        </p>
        <p
          className={ !validatePasswordMoreThanSixteen() ? ('valid-password-check'
          )

            : 'invalid-password-check' }
        >
          Possuir até 16 caracteres
        </p>
        <p
          className={ !validateStringsAndNumbers() ? ('valid-password-check'
          )

            : 'invalid-password-check' }
        >
          Possuir letras e números
        </p>
        <p
          className={ !validateSpecialCharacters() ? ('valid-password-check'
          )

            : 'invalid-password-check' }
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
