import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import useUpdateDisenser from "../../hooks/useUpdateDispenser";

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
    <div>
      <span>Soy un dispensador con funcionalidad, a que flipas?</span>
      <Button
        onMouseDown={() => updateDispenser("open")}
        onMouseUp={() => updateDispenser("close")}
      >
        Actualizar estado
      </Button>
    </div>
  );
};

export default Dispenser;
