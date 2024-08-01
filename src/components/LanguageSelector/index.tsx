import {
  LanguageSelectorContainer,
  LanguageSelectorItem,
} from "./LanguageSelector.styled";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const availableLanguages = Object.keys(i18n.store.data);
  const handleChangeLanguage = (newLanguage: string) =>
    i18n.changeLanguage(newLanguage);

  const isLanguageSelected = (language: string) => language === i18n.language;

  return (
    <LanguageSelectorContainer>
      {availableLanguages.map((lang) => (
        <LanguageSelectorItem
          key={lang}
          $isSelected={isLanguageSelected(lang)}
          onClick={() => handleChangeLanguage(lang)}
        >
          {lang}
        </LanguageSelectorItem>
      ))}
    </LanguageSelectorContainer>
  );
};

export default LanguageSelector;
