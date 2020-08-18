import Vue from 'vue'

/* Create a reactive store */
const store = Vue.observable({
    assessmentData: null
})

/* Create centralized actions for updating the store */
const actions = {
    setAssessmentData(data) {
      store.assessmentData = data;
    },
    resetAssessmentData() {
      store.assessmentData = null;
    }
}

/* Attach store and actions to global Vue */
Vue.prototype.$store = store
Vue.prototype.$actions = actions