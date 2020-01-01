<template>
  <div class="container">
    <h1 class="language">EN</h1>
    <div class="arrows">
      <Arrow color="lightgrey" :down="false" />
      <Arrow color="lightgrey" :down="true" />
    </div>
  </div>
</template>

<script>
import Arrow from './Arrow.vue'

export default {
  name: 'RightNavBar',
  components: {
    Arrow
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 95vh;
  width: 11rem;
  position: absolute;
  right: 0;
  top: 0;
}

.language {
  color: lightgrey;
  font-size: 3rem;
  transition: all 0.2s;
  cursor: pointer;
}
.language:hover {
  color: black;
  transition: all 0.2s;
  cursor: pointer;
}

.arrows {
  bottom: 0;
  position: absolute;
}

</style>
