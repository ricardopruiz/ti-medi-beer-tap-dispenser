import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../Routing/routes";
import {
  DispenserAdminSectionTitle,
  DispensersAdminSection,
  DispensersWrapper,
  PageLayout,
} from "./Dispensers.styled";
import useAllDispensers from "../../hooks/useAllDispensers";
import { Dispenser } from "../../types/dispenser.types";
import Topbar from "../../components/Topbar";
import DispenserList from "../../components/DispenserList";
import DispenserCreator from "../../components/DispenserCreator";
import { useTranslation } from "react-i18next";

const Dispensers = () => {
  const { isLoading, isError, data: dispensers } = useAllDispensers();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const openDispenserDetail = (id: Dispenser["id"]) => {
    navigate(`${RoutePath.ADMIN_DISPENSERS}/${id}`);
  };

  if (isLoading) return <div>cargando</div>;
  if (isError) return <div>error</div>;

  return (
    <PageLayout>
      <Topbar />
      <DispensersWrapper>
        <DispensersAdminSection>
          <DispenserAdminSectionTitle>
            {t("dispensers.admin-title")}
          </DispenserAdminSectionTitle>
          <DispenserCreator />
        </DispensersAdminSection>
        <DispenserList
          dispensers={dispensers}
          adminMode
          handleDispenserDetail={(id: string) => openDispenserDetail(id)}
        />
      </DispensersWrapper>
    </PageLayout>
  );
};
export default Dispensers;
