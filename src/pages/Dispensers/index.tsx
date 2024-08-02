import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../Routing/routes";
import { DispensersAdminSection } from "./Dispensers.styled";
import useAllDispensers from "../../hooks/useAllDispensers";
import { Dispenser } from "../../types/dispenser.types";
import Topbar from "../../components/Topbar";
import DispenserList from "../../components/DispenserList";
import DispenserCreator from "../../components/DispenserCreator";
import { useTranslation } from "react-i18next";
import { PageContentWrapper, PageLayout, PageTitle } from "../Pages.styled";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorComponent from "../../components/ErrorComponent";

const Dispensers = () => {
  const { isLoading, isError, data: dispensers } = useAllDispensers();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const openDispenserDetail = (id: Dispenser["id"]) => {
    navigate(`${RoutePath.ADMIN_DISPENSERS}/${id}`);
  };

  const openDispenser = (id: Dispenser["id"]) => {
    window.open(`${window.location.origin}/dispenser/${id}`, "_blank");
  };

  return (
    <PageLayout>
      <Topbar />
      <PageContentWrapper>
        <DispensersAdminSection>
          <PageTitle>{t("dispensers.admin-title")}</PageTitle>
          <DispenserCreator />
        </DispensersAdminSection>
        {isLoading && <LoadingSpinner color="accent" type="pageSpinner" />}
        {isError && <ErrorComponent />}
        {!isLoading && !isError && (
          <DispenserList
            dispensers={dispensers || []}
            handleDispenserDetail={(id: string) => openDispenserDetail(id)}
            handleOpenDispenser={(id: string) => openDispenser(id)}
          />
        )}
      </PageContentWrapper>
    </PageLayout>
  );
};
export default Dispensers;
