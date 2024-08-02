import { LangSelectorContainer, PageTitle } from "../Pages.styled";
import { PublicDispensersContainer } from "./PublicDispensers.styled";
import LanguageSelector from "../../components/LanguageSelector";
import { useTranslation } from "react-i18next";
import PublicDispenserList from "../../components/PublicDispenserList";
import useAllDispensers from "../../hooks/useAllDispensers";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorComponent from "../../components/ErrorComponent";

const PublicDispensers = () => {
  const { isLoading, isError, data: dispensers } = useAllDispensers();
  const { t } = useTranslation();

  return (
    <PublicDispensersContainer>
      <LangSelectorContainer>
        <LanguageSelector />
      </LangSelectorContainer>
      <PageTitle>{t("public-dispensers.title")}</PageTitle>
      {isLoading && <LoadingSpinner color="accent" type="pageSpinner" />}
      {isError && <ErrorComponent />}
      {!isLoading && !isError && (
        <PublicDispenserList dispensers={dispensers!} />
      )}
    </PublicDispensersContainer>
  );
};

export default PublicDispensers;
