import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        landing: {
            title: 'your hands, their life.'
        }

    },
    'fr': {
        landing: {
            title: 'vos mains, leur vie.'
        }
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n;