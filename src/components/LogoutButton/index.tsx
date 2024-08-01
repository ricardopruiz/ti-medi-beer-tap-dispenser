import { useNavigate } from "react-router-dom";
import { logout } from "../../services/login";
import { RoutePath } from "../../Routing/routes";
import Button from "../Button";
import { useTranslation } from "react-i18next";

const LogoutButton = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = () => {
    logout();
    navigate(RoutePath.LOGIN);
  };

  return <Button onClick={handleLogout}>{t("login.logout")}</Button>;
};

export default LogoutButton;
