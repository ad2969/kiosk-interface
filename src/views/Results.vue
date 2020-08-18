<template>
  <div class="background">

    <div class="content-loading" v-if="loading">
      <div class="loader"></div>
      <span class="loading t--capitalize">{{ $t('assessment.loadResults') }} . . .</span>
    </div>

    <!-- TRANSLATE!! -->
    <div v-else-if="!!data">
      <div>Sorry! No Assessment Data Found</div>
      <button @click="redirectToAssessment">Take the Assessment!</button>
    </div>

    <div v-else>
      <div>{{ JSON.stringify(data) }}</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Results',
  data() {
    return {
      loading: true,
      data: null,
    }
  },
  mounted() {
    // to turn into async call/calculations
    setTimeout(() => {
      this.loading = false;
      if(this.$store.rawAssessmentData) {
        console.log('Assessment Data Exists: ', this.$store.rawAssessmentData)
        this.$actions.setAssessmentData({});
        this.data = {};
      }
    }, 2000);
  },
  methods: {
    redirectToAssessment: function() {
      this.$router.push('/assessment');
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content-loading {
  height: 100vh;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .loading {
    padding-top: 2rem;
    font-size: 1.5rem;
  }
  .loader {
    border: 1rem solid $grey;
    border-top: 1rem solid $red;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    animation: spin 1s linear infinite;
  }
}
@keyframes spin {
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}
</style>
