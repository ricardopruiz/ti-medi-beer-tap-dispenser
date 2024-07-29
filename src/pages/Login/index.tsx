import { useTranslation } from "react-i18next";
import Input from "../../components/Input";
import { useState } from "react";
import {
  StyledForm,
  StyledFormButtonContainer,
  StyledFormInputContainer,
  StyledLogin,
  StyledLoginWrapper,
  StyledVerticalBlock,
} from "./Login.styled";
import Button from "../../components/Button";
import { loginUser } from "../../services/login";
import ErrorMessage from "../../components/ErrorMessage";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutePath } from "../../Routing/routes";
import Avatar from "../../components/Avatar";
import Beer from "../../components/Icons/BeerIcon";
import useBreakpoints from "../../hooks/useBreakpoints";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>();
  const { t } = useTranslation();
  const { isDesktop } = useBreakpoints();
  const navigate = useNavigate();

  const { state: locationState } = useLocation();

  const [processingLogin, setProcessingLogin] = useState(false);

  const handleLogin: SubmitHandler<FormData> = ({ username, password }) => {
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
      .catch(() =>
        setError("root", { type: "custom", message: t("login.access-denied") })
      )
      .finally(() => setProcessingLogin(false));
  };

  const errorMessages = Object.values(errors).map(({ message }) => message);

  return (
    <StyledLoginWrapper>
      {isDesktop && <StyledVerticalBlock />}
      <StyledLogin>
        <Avatar>
          <Beer />
        </Avatar>
        <StyledForm onSubmit={handleSubmit(handleLogin)}>
          <StyledFormInputContainer>
            <Input
              placeholder={t("login.username")}
              {...register("username", {
                required: {
                  value: true,
                  message: t("login.username-required"),
                },
              })}
            />
            <Input
              type="password"
              placeholder={t("login.password")}
              {...register("password", {
                required: {
                  value: true,
                  message: t("login.password-required"),
                },
              })}
            />
          </StyledFormInputContainer>
          <StyledFormButtonContainer>
            <Button
              type="submit"
              loading={processingLogin}
              disabled={processingLogin}
            >
              {t("login.login")}
            </Button>
            {errorMessages.map((message) => (
              <ErrorMessage key={message}>{message}</ErrorMessage>
            ))}
          </StyledFormButtonContainer>
        </StyledForm>
      </StyledLogin>
    </StyledLoginWrapper>
  );
};

export default Login;
