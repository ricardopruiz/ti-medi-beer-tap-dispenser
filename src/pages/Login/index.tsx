import { useTranslation } from "react-i18next";
import Input from "../../components/Input";
import { useEffect, useState } from "react";
import {
  StyledForm,
  StyledFormButtonContainer,
  StyledFormInputContainer,
  StyledLogin,
  StyledLoginWrapper,
  StyledVerticalBlock,
} from "./Login.styled";
import FormButton from "../../components/FormButton";
import { loginUser } from "../../services/login";
import ErrorMessage from "../../components/ErrorMessage";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutePath } from "../../Routing/routes";
import Avatar from "../../components/Avatar";
import Beer from "../../components/Icons/BeerIcon";
import useBreakpoints from "../../hooks/useBreakpoints";

const Login = () => {
  const { t } = useTranslation();
  const { isDesktop } = useBreakpoints();
  const navigate = useNavigate();

  const { state: locationState } = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [processingLogin, setProcessingLogin] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleLogin = () => {
    setProcessingLogin(true);
    loginUser({ username, password })
      .then(() => {
        if (locationState) {
          const { redirectTo } = locationState;
          navigate(`${redirectTo.pathname}${redirectTo.search}`);
        } else {
          navigate(RoutePath.ADMIN);
        }
      })
      .catch(() => setIsError(true))
      .finally(() => setProcessingLogin(false));
  };

  const isLoginEmpty = username.length === 0 && password.length === 0;

  useEffect(() => {
    setIsError(false);
  }, [username, password]);

  return (
    <StyledLoginWrapper>
      {isDesktop && <StyledVerticalBlock />}
      <StyledLogin>
        <Avatar>
          <Beer />
        </Avatar>
        <StyledForm>
          <StyledFormInputContainer>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={t("login.username")}
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t("login.password")}
            />
          </StyledFormInputContainer>
          <StyledFormButtonContainer>
            {isError && <ErrorMessage>{t("login.access-denied")}</ErrorMessage>}
            <FormButton
              loading={processingLogin}
              disabled={processingLogin || isError || isLoginEmpty}
              onClick={handleLogin}
            >
              {t("login.login")}
            </FormButton>
          </StyledFormButtonContainer>
        </StyledForm>
      </StyledLogin>
    </StyledLoginWrapper>
  );
};

export default Login;
