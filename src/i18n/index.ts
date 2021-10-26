import en from './en.json';
import de from './de.json';
import fr from './fr.json';

export const translate = (key: string, language: string = ''): string => {
    language = language || localStorage.getItem("LanguagesID") || 'EN';
    let langData: { [key: string]: string } = {};
    if (language === 'EN') {
        langData = en;
    } else if (language === 'DE') {
        langData = de;
    } else if (language === 'FR') {
        langData = fr;
    }
    if (langData[key] === undefined) {
        return key;
    }
    return langData[key];
}



