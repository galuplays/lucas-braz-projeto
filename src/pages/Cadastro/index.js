import React from "react";

import { Container } from "./styles";
import account from "../../assets/account.svg";

export default function Cadastro() {
  return (
    <Container>
      <div>
        <form>
          <p>
            dw<sub>2</sub>t
          </p>
          <label>Nome: </label>
          <input type="text" />
          <label>Email: </label>
          <input type="text" />
          <label>Senha: </label>
          <input type="password" />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
      <Link className="link" to="/login">
        <img src={signin} alt="Login" />
        <p>login</p>
      </Link>
    </Container>
  );
}
