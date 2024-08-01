import { useParams } from "react-router-dom";
import useDispenser from "../../hooks/useDispenser";
import { PageContentWrapper, PageLayout, PageTitle } from "../Pages.styled";
import Topbar from "../../components/Topbar";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorComponent from "../../components/ErrorComponent";
import DispenserDataVisualizer from "../../components/DispenserDataVisualizer";

const DispenserDetail = () => {
  const { id: dispenserId } = useParams();
  const { isError, isLoading, data } = useDispenser(dispenserId!);

  return (
    <PageLayout>
      <Topbar />
      <PageContentWrapper>
        <PageTitle>{dispenserId}</PageTitle>
        {isLoading && <LoadingSpinner type="pageSpinner" color="accent" />}
        {isError && <ErrorComponent />}
        {!isLoading && !isError && <DispenserDataVisualizer data={data!} />}
      </PageContentWrapper>
    </PageLayout>
  );
};

export default DispenserDetail;
