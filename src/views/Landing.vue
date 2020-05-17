<template>
  <div class="background">
    <AboutMeModal
      :active="modalOpen"
      @closeModal="modalOpen = false"
    />
    <div class="content">
      <h1 class="title t--capitalize">{{ $t("landing.title") }}</h1>
      <router-link to="/tutorial"
                   tag="span"
                   class="start-button t--uppercase"
      >{{ $t("landing.start") }}</router-link>
      <span class="about-button t--lowercase"
            @click="modalOpen = true"
      >{{ $t('landing.aboutUs1') }}<br/>{{ $t('landing.aboutUs2') }}</span>
    </div>
  </div>
</template>

<script>
import AboutMeModal from "@/components/AboutMeModal.vue"
export default {
  name: 'Landing',
  components: {
    AboutMeModal
  },
  data() {
    return {
      modalOpen: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.background {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.title {
  font-size: 9rem;
  font-family: 'Avenir Next Bold';
  text-align: left;
  line-height: 100%;
  margin-bottom: 1rem;
  max-width: 60vw;
}

.start-button {
  font-size: 3rem;
  font-family: 'Avenir Next Bold';
  color: $white;
  padding: 1.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: $red;
  border-radius: 15%/50%;
  float: left;
  cursor: pointer;
  transition: all 0.2s;
}
.about-button {
  font-size: 2rem;
  font-family: 'Avenir Next Bold';
  color: $grey;
  text-align: right;
  float: right;
  cursor: pointer;
  transition: all 0.2s;
  line-height: 100%;
  padding-top: 3rem;
}

.start-button:hover {
  transform: scale(1.05);
  transition: all 0.2s;
}
.about-button:hover {
  transform: scale(1.05);
  transition: all 0.2s;
}

</style>
