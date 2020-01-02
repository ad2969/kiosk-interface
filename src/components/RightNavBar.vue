<template>
  <div class="container">
    <h1 class="language">EN</h1>
    <div class="arrows">
      <Arrow v-if="!busy"
             :active="validateUp"
             :down="false"
             @callback="prev" />
      <Arrow v-if="!busy"
             :active="validateDown"
             :down="true"
             @callback="next" />
    </div>
  </div>
</template>

<script>
import Arrow from './Arrow.vue'

export default {
  name: 'RightNavBar',
  components: {
    Arrow
  },
  props: {
    numPages: Number,
    page: Number,
    navigate: Function,
    busy: Boolean
  },
  data() {
    return {
      validateUp: true,
      validateDown: true
    }
  },
  watch: {
    page: function(val) {
      if(val === (this.numPages - 1)) {
        this.validateUp = true;
        this.validateDown = false;
      }
      else if(val === 0) {
        this.validateUp = false;
        this.validateDown = true;
      }
      else {
        this.validateUp = true;
        this.validateDown = true;
      }
    }
  },
  methods: {
    next: function() {
      if(this.validateDown) this.navigate(this.page + 1)
    },
    prev: function() {
      if(this.validateUp) this.navigate(this.page - 1)
    }
  },
  mounted() {
    if(this.page === (this.numPages - 1)) {
      this.validateUp = true;
      this.validateDown = false;
    }
    else if(this.page === 0) {
      this.validateUp = false;
      this.validateDown = true;
    }
    else {
      this.validateUp = true;
      this.validateDown = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  height: 95vh;
  width: 9rem;
  position: absolute;
  right: 0;
  top: 0;
}

.language {
  color: $grey;
  font-size: 3rem;
  transition: all 0.2s;
  cursor: pointer;
  margin-top: 4rem;
}
.language:hover {
  color: $black;
  transition: all 0.2s;
  cursor: pointer;
}

.arrows {
  bottom: 0;
  position: absolute;
}

</style>
