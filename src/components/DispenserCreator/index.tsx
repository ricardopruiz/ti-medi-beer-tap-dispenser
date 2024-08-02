import { useTranslation } from "react-i18next";
import StyledInput from "../Input";
import { useState } from "react";
import useCreateDispenser from "../../hooks/useCreateDispenser";
import Button from "../Button";
import { DispenserCreatorWrapper } from "./DispenserCreator.styled";

const DispenserCreator = () => {
  const { t } = useTranslation();
  const [newVolume, setNewVolume] = useState<string>("");
  const dispenserCreator = useCreateDispenser();

  const createDispenser = () => {
    dispenserCreator.mutate({ flowVolume: Number(newVolume) });
  };

  return (
    <DispenserCreatorWrapper>
      <StyledInput
        type="number"
        placeholder={t("dispensers.new-flow")}
        value={newVolume}
        onChange={(e) => setNewVolume(e.target.value)}
      />
      <Button onClick={createDispenser} disabled={!newVolume}>
        {t("dispensers.create-dispenser")}
      </Button>
    </DispenserCreatorWrapper>
  );
};

export default DispenserCreator;
