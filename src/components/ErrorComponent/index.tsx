import SadFaceIcon from "../Icons/SadFaceIcon";
import { ErrorComponentContainer } from "./ErrorComponent.styled";

/**
 * This component is displayed when some endpoint
 * does not work properly (or if we did not send
 * the correct information)
 */
const ErrorComponent = () => {
  return (
    <ErrorComponentContainer>
      <SadFaceIcon />
    </ErrorComponentContainer>
  );
};

export default ErrorComponent;
