import React from "react";

import { Container } from "./styles";
import account from "../../assets/account.svg";

export default function Recuperar() {
    return (
        <Container>
            <div>
                <form>
                    <label>Email: </label>
                    <input type="text" />
                    <button type="submit">Enviar</button>
                </form>
            </div>
            <Link className="link" to="/login">
                <img src={signin} alt="Login" />
                <p>login</p>
            </Link>
        </Container>
    );
}
