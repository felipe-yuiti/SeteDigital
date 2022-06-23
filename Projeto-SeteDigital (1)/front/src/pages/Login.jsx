import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuthContext } from "../providers/AuthProvider";
import Button from "../components/Button/Button";

import api from "../services/api";

import "../styles.css";
import { useEffect } from "react";

function Login() {
  const [nome, setNome] = useState("");

  const [user, setUser] = useAuthContext();
  const navigate = useNavigate();

  function onSubmitForm(e) {
    e.preventDefault();

    api.post("/login", { nome }).then((res) => {
      setUser(res.data);
      navigate("/confirm-login");
    });
  }

  return (
    <div>
      <div className="containerInput">
        <form onSubmit={onSubmitForm}>
          <input
            type="input"
            name="nome"
            placeholder="Entre com seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <br />
          <Button type="submit">Entrar</Button>
        </form>
        <br />
        <div className="ancoraCadastro">
          <Link to="/register">Cadastre-se Aqui</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
