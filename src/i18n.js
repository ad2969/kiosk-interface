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
            who: {
                title: 'who we are',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            },
            why: {
                title: 'why CPR Kiosks',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            back: 'back'
        },
        titles: {
            one: 'interactive tutorial',
            two: 'practice',
            three: 'assessment',
            four: 'assessment results',
            five: 'completion',
            empty: '',
        },
        practice: {
            timeout: 'Would you like to be redirected to the assessment page?',
            timeoutOk: 'take assessment',
            timeoutStay: 'i need more time!',
        },
        assessment: {
            seconds: 'seconds',
            secondsShort: 'sec',
            instructions: 'hands-only CPR',
            go: "let's go",
            start1: 'start CPR',
            toStart: 'to',
            start2: 'start timer',
            loadResults: 'loading your results',
        }

    },
    'fr': {
        landing: {
            title: 'vos mains, leur vie.',
            start: 'commencer',
            aboutUs1: 'à propos',
            aboutUs2: 'de nous',
            who: {
                title: 'qui nous sommes',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            },
            why: {
                title: 'pourquoi CPR Kiosks',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            back: 'retour'
        },
        titles: {
            one: 'tutoriel interactif',
            two: 'entraine toi',
            three: 'évaluation',
            four: "résultats de l'évaluation",
            five: 'achèvement',
            empty: '',
        },
        practice: {
            timeout: "Souhaitez-vous être redirigé vers la page d'évaluation?",
            timeoutOk: 'faire une évaluation',
            timeoutStay: "j'ai besoin de plus de temps!",
        },
        assessment: {
            seconds: 'secondes',
            secondsShort: 'sec',
            instructions: 'CPR mains-libres',
            go: "commençons",
            start1: 'démarrer la CPR',
            toStart: 'pour',
            start2: 'démarrer la minuterie',
            loadResults: 'chargement de vos résultats',
        }
    },
    'zh': {
        landing: {
            title: 'your hands, their life.',
            start: 'tap to start',
            aboutUs1: 'about',
            aboutUs2: 'us',
            who: {
                title: 'who we are',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            },
            why: {
                title: 'why CPR Kiosks',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            back: 'back'
        },
        titles: {
            one: 'interactive tutorial',
            two: 'practice',
            three: 'assessment',
            four: 'assessment results',
            five: 'completion',
            empty: '',
        },
        practice: {
            timeout: 'Would you like to be redirected to the assessment page?',
            timeoutOk: 'take assessment',
            timeoutStay: 'i need more time!',
        },
        assessment: {
            seconds: 'seconds',
            secondsShort: 'sec',
            instructions: 'hands-only CPR',
            go: "let's go",
            start1: 'start CPR',
            toStart: 'to',
            start2: 'start timer',
            loadResults: 'loading your results',
        }
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n;