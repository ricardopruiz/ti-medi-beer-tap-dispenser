import { useNavigate } from "react-router-dom";
import { getLoggedUser, logout } from "../../services/login";
import FormButton from "../../components/Button";
import { RoutePath } from "../../Routing/routes";

const DispenserDetail = () => {
  const user = getLoggedUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(RoutePath.LOGIN);
  };

  return (
    <div>
      Hola {user} Soy un dispensador{" "}
      <FormButton onClick={handleLogout}>Desloguearse</FormButton>
    </div>
  );
};

export default DispenserDetail;
