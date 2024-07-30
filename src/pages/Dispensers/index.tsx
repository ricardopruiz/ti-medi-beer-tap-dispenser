import { useNavigate } from "react-router-dom";
import { getLoggedUser, logout } from "../../services/login";
import { RoutePath } from "../../Routing/routes";
import { DispenserDetail, DispenserList } from "./Dispensers.styled";
import useAllDispensers from "../../hooks/useAllDispensers";
import { Dispenser } from "../../types/dispenser.types";
import Button from "../../components/Button";
import useCreateDispenser from "../../hooks/useCreateDispenser";
import StyledInput from "../../components/Input";
import { useState } from "react";

const Dispensers = () => {
  const [newVolume, setNewVolume] = useState<string>();
  const navigate = useNavigate();
  const { isLoading, isError, data: dispensers } = useAllDispensers();

  const dispenserCreator = useCreateDispenser();
  const loggedUser = getLoggedUser();

  const handleLogout = () => {
    logout();
    navigate(RoutePath.LOGIN);
  };

  const openDispenserDetail = (id: Dispenser["id"]) => {
    navigate(`${RoutePath.ADMIN_DISPENSERS}/${id}`);
  };

  const createDispenser = () => {
    dispenserCreator.mutate({ flowVolume: Number(newVolume) });
  };

  return (
    <div>
      {`Hola ${loggedUser} Soy la página de dispensers`}
      <div>
        <StyledInput
          value={newVolume}
          onChange={(e) => setNewVolume(e.target.value)}
        />
        <Button onClick={createDispenser}>Crear dispenser</Button>
      </div>
      <Button onClick={handleLogout}>Desloguearse</Button>
      {isLoading && <div>cargando</div>}
      {isError && <div>Error</div>}

      <DispenserList>
        {dispensers?.map((dispenser: Dispenser) => (
          <DispenserDetail
            onClick={() => openDispenserDetail(dispenser.id)}
            key={dispenser.id}
          >
            {`${dispenser.id} ${dispenser.status} ${dispenser.updated_at}`}{" "}
          </DispenserDetail>
        ))}
      </DispenserList>
    </div>
  );
};
export default Dispensers;
