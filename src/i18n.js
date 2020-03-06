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
            four: 'assessment results',
            empty: '',
        },
        assessment: {
            seconds: 'seconds',
            secondsShort: 'sec',
            instructions: 'hands-only CPR',
            go: "let's go",
            start1: 'start CPR',
            toStart: 'to',
            start2: 'start timer',
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
            four: "résultats de l'évaluation",
            empty: '',
        },
        assessment: {
            seconds: 'secondes',
            secondsShort: 'sec',
            instructions: 'CPR mains-libres',
            go: "commençons",
            start1: 'démarrer la CPR',
            toStart: 'pour',
            start2: 'démarrer la minuterie',
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
            four: 'assessment results',
            empty: '',
        },
        assessment: {
            seconds: 'seconds',
            secondsShort: 'sec',
            instructions: '',
            go: "let's go",
            start1: 'start CPR',
            toStart: 'to',
            start2: 'start timer',
        }
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n;