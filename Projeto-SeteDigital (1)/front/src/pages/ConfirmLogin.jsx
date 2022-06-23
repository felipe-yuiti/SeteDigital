import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import { useAuthContext } from "../providers/AuthProvider";
import "../styles.css";

const ConfirmLogin = () => {
  const [user, setUser] = useAuthContext();
  const navigate = useNavigate();

  function confirmedAge() {
    navigate("/home");
  }

  function cancel() {
    setUser(null);
    navigate("/");
  }

  return (
    <div>
      <h1>{user.idade}</h1>
      <Button onClick={confirmedAge}>Confirmar</Button>
      <Button onClick={cancel}>Cancelar</Button>
    </div>
  );
};

export default ConfirmLogin;
