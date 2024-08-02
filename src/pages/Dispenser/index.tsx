import { useParams } from "react-router-dom";
import useUpdateDisenser from "../../hooks/useUpdateDispenser";
import DispenserButton from "../../components/DispenserButton";
import { DispenserContainer } from "./Dispenser.styled";
import useDispenser from "../../hooks/useDispenser";
import ErrorComponent from "../../components/ErrorComponent";

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

  const { isError, isLoading } = useDispenser(dispenserId!);

  return (
    <>
      {isError ? (
        <ErrorComponent />
      ) : (
        <DispenserContainer>
          <DispenserButton
            openDispenser={() => updateDispenser("open")}
            closeDispenser={() => updateDispenser("close")}
            isLoading={isLoading}
          ></DispenserButton>
        </DispenserContainer>
      )}
    </>
  );
};

export default Dispenser;
