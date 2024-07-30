import { useNavigate, useParams } from "react-router-dom";
import { getLoggedUser, logout } from "../../services/login";
import FormButton from "../../components/Button";
import { RoutePath } from "../../Routing/routes";
import useDispenser from "../../hooks/useDispenser";
import LoadingSpinner from "../../components/LoadingSpinner";

const DispenserDetail = () => {
  const { id: dispenserId } = useParams();
  const { isError, isLoading, data } = useDispenser(dispenserId || "");
  const user = getLoggedUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(RoutePath.LOGIN);
  };

  return (
    <div>
      {isLoading ? (
        <div>
          <LoadingSpinner type="pageSpinner" />
        </div>
      ) : isError ? (
        <div>La que se ha liao pollito</div>
      ) : (
        <div>
          Hola {user} Soy un dispensador
          <FormButton onClick={handleLogout}>Desloguearse</FormButton>
          <div>Info del dispensador: {JSON.stringify(data)}</div>
        </div>
      )}
    </div>
  );
};

export default DispenserDetail;
