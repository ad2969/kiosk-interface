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
        }

    },
    'fr': {
        landing: {
            title: 'vos mains, leur vie.',
            start: 'commencer',
            aboutUs1: 'à propos',
            aboutUs2: 'de nous',
        }
    },
    'zh': {
        landing: {
            title: '你的手，他们的生活.',
            start: 'tap to start',
            aboutUs1: 'about',
            aboutUs2: 'us',
        }
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n;