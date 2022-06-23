import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import { useAuthContext } from "../providers/AuthProvider";
import api from "../services/api";

function Register() {
  const [nome, setNome] = useState();
  const [idade, setIdade] = useState();

  const [user] = useAuthContext();

  const navigate = useNavigate();

  function onFormSubmit(e) {
    e.preventDefault();

    const user = { nome, idade };

    api.post("/register", user).then((res) => {
      navigate("/");
    });
  }

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="containerInput">
      <form onSubmit={onFormSubmit}>
        <input
          type="input"
          name="nome"
          placeholder="Seu Nome"
          required
          onChange={(e) => setNome(e.target.value)}
        />
        <br />
        <input
          type="input"
          name="idade"
          required
          placeholder="Sua Idade"
          onChange={(e) => setIdade(e.target.value)}
        />
        <br />
        <Button type="submit">Cadastrar</Button>
      </form>
    </div>
  );
}

export default Register;
