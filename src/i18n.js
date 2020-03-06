import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        landing: {
            title: 'your hands, their life.',
            start: 'tap to start',
            aboutUs1: 'about',
            aboutUs2: 'us',
        },
        titles: {
            one: 'interactive tutorial',
            two: 'practice',
            three: 'assessment',
            four: '',
            five: 'assessment results',
        }

    },
    'fr': {
        landing: {
            title: 'vos mains, leur vie.',
            start: 'commencer',
            aboutUs1: 'à propos',
            aboutUs2: 'de nous',
        },
        titles: {
            one: 'tutoriel interactif',
            two: 'entraine toi',
            three: 'évaluation',
            four: '',
            five: "résultats de l'évaluation",
        }
    },
    'zh': {
        landing: {
            title: 'your hands, their life.',
            start: 'tap to start',
            aboutUs1: 'about',
            aboutUs2: 'us',
        },
        titles: {
            one: 'interactive tutorial',
            two: 'practice',
            three: 'assessment',
            four: '',
            five: 'assessment results',
        }
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n;