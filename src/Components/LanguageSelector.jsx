import { useTranslation } from 'react-i18next'; // Import the translation hook

const LanguageSelector = () => {
  const { i18n } = useTranslation(); // Get i18n instance for language switching

  // Function to handle language change
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage); // Change the language globally
  };

  return (
    <div className="language-selector">
      <select
        className="bg-purple-600 text-white"
        onChange={handleLanguageChange}
        defaultValue={i18n.language} // Set the current language
      >
        <option value="en">English</option>
        <option value="bn">Bangla</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
