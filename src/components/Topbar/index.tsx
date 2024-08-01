import LanguageSelector from "../LanguageSelector";
import LogoutButton from "../LogoutButton";
import { Logo, StyledTopbar } from "./Topbar.styled";

const Topbar = () => {
  return (
    <StyledTopbar>
      <Logo />
      <LanguageSelector />
      <LogoutButton />
    </StyledTopbar>
  );
};

export default Topbar;
