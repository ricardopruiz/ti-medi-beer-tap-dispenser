import {
  LanguageSelectorContainer,
  LanguageSelectorItem,
} from "./LanguageSelector.styled";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import "dayjs/locale/es";
import "dayjs/locale/en";

export type LanguageSelectorProps = {
  colorVariant?: "primary" | "contrast";
};

/**
 * The language selector of the app. It can be inserted on
 * any part without props, making possible to change the
 * selected language easily
 */
const LanguageSelector = ({
  colorVariant = "primary",
}: LanguageSelectorProps) => {
  const { i18n } = useTranslation();
  const availableLanguages = Object.keys(i18n.store.data);
  const handleChangeLanguage = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
    dayjs.locale(newLanguage);
  };

  const isLanguageSelected = (language: string) => language === i18n.language;

  return (
    <LanguageSelectorContainer>
      {availableLanguages.map((lang) => (
        <LanguageSelectorItem
          variant={colorVariant}
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
