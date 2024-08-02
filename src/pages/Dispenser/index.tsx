import { useParams } from "react-router-dom";
import useUpdateDisenser from "../../hooks/useUpdateDispenser";
import DispenserButton from "../../components/DispenserButton";
import {
  DispenserContainer,
  DispenserText,
  LanguageSelectorContainer,
} from "./Dispenser.styled";
import useDispenser from "../../hooks/useDispenser";
import ErrorComponent from "../../components/ErrorComponent";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../components/LanguageSelector";

const Dispenser = () => {
  const dispenserUpdater = useUpdateDisenser();
  const { t } = useTranslation();

  const { id: dispenserId } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const updateDispenser = (status: "open" | "close") => {
    status === "open" ? setIsOpen(true) : setIsOpen(false);

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
          <LanguageSelectorContainer>
            <LanguageSelector colorVariant="contrast" />
          </LanguageSelectorContainer>
          <DispenserText>
            {isOpen ? t("dispenser.isOpen") : t("dispenser.isClose")}
          </DispenserText>
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
