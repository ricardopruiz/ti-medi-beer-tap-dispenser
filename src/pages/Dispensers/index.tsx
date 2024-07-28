import { useNavigate } from "react-router-dom";
import FormButton from "../../components/FormButton";
import { getLoggedUser, logout } from "../../services/login";
import { RoutePath } from "../../Routing/routes";

const Dispensers = () => {
  const navigate = useNavigate();
  const loggedUser = getLoggedUser();

  const handleLogout = () => {
    logout();
    navigate(RoutePath.LOGIN);
  };

  return (
    <div>
      {`Hola ${loggedUser} Soy la página de dispensers`}
      <FormButton onClick={() => handleLogout()}>Desloguearse</FormButton>
    </div>
  );
};
export default Dispensers;
