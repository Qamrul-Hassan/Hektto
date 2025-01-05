import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome",
        email: "Email",
        phone: "Phone",
        cart: "Cart",
        wishlist: "Wishlist",
        dashboard: "Dashboard",
      },
    },
    fr: {
      translation: {
        welcome: "Bienvenue",
        email: "Courriel",
        phone: "Téléphone",
        cart: "Panier",
        wishlist: "Liste de souhaits",
        dashboard: "Tableau de bord",
      },
    },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
