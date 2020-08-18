<template>
    <div class="depth-container">
        <span class="depth-indicator" :style="pushDepthStyle"/>
    </div>
</template>

<script>
import { PRACTICE_TRIGGER_COMPRESSION_LEVEL as TRIGGER_LEVEL } from "@/constants"

export default {
  name: 'DepthTracker',
  data() {
    return {
      pushDepth: TRIGGER_LEVEL,
      counting: false,
      startTime: 0,
      endTime: 0,
    }
  },
  props: {
    input: Number
  },
  methods: {
    begin: function() {
        this.counting = true;
        this.startTime = new Date();
    },
    stop: function() {
        this.counting = false;
        this.endTime = new Date();
        const timeElapsed = this.endTime - this.startTime;
        this.$emit('submit', timeElapsed);
    }
  },
  computed: {
    pushDepthStyle: function() {
      return {top: `${parseInt(this.pushDepth/100*100)}%`}
    }
  },
  watch: {
    input: function(depth, oldDepth) {
        this.pushDepth = depth;
        if(!this.counting && oldDepth <= TRIGGER_LEVEL && depth > TRIGGER_LEVEL) this.begin();
        if(this.counting && depth <= TRIGGER_LEVEL && oldDepth > TRIGGER_LEVEL) this.stop();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.depth-container {
    background: lightgrey;
    width: 100px;
    height: 200px;
    position: relative;

    .depth-indicator {
        background: black;
        width: 100px;
        height: 10px;
        position: absolute;
        left: 0;
        // transition: all 0.2s linear;
    }
}
</style>
