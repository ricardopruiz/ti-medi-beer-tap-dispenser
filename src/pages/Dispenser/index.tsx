import { useParams } from "react-router-dom";
import useUpdateDisenser from "../../hooks/useUpdateDispenser";
import DispenserButton from "../../components/DispenserButton";
import { DispenserContainer } from "./Dispenser.styled";

const Dispenser = () => {
  const dispenserUpdater = useUpdateDisenser();
  const { id: dispenserId } = useParams();

  const updateDispenser = (status: "open" | "close") => {
    dispenserUpdater.mutate({
      id: dispenserId || "",
      status: status,
      updated_at: new Date(),
    });
  };
  return (
    <DispenserContainer>
      <DispenserButton
        openDispenser={() => updateDispenser("open")}
        closeDispenser={() => updateDispenser("close")}
      ></DispenserButton>
    </DispenserContainer>
  );
};

export default Dispenser;
