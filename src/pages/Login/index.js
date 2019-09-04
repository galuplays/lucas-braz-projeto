import React from "react";

import { Container } from "./styles";
import signin from "../../assets/signin.svg";
import register from "../../assets/register.svg";
import account from "../../assets/account.svg";

export default function Login() {
  return (
    <Container>
      <div>
        <form>
          <label>Email: </label>
          <input type="text" />
          <label>Senha: </label>
          <input type="password" />
          <button type="submit">Entrar</button>
        </form>
      </div>
      <Link className="lean" to="/cadastrar">
        <img src={register} alt="Cadastrar" />
        <p>Cadastrar</p>
      </Link>
      <Link className="lean" to="/recuperar">
        <img src={signin} alt="Recuperar" />
        <p>Esqueceu a senha?</p>
      </Link>
    </Container>

  );
}
