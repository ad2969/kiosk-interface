<template>
  <div class="container">
    <h1 class="language">EN</h1>
    <div class="arrows">
      <Arrow :color="validateUp ? 'red' : 'lightgrey' "
             :down="false"
             @callback="prev" />
      <Arrow :color="validateDown ? 'red' : 'lightgrey' "
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
    navigate: Function
  },
  data() {
    return {
      validateUp: false,
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
