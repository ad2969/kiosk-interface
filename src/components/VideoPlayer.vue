<template>
  <div>
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>

<script>
import videojs from 'video.js';

export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      player: null
    }
  },

  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options,
                  function onPlayerReady() {
                    console.log('onPlayerReady', this);
                  })
  },
  beforeDestroy() {
    if(this.player) {
      this.player.dispose();
    }
  }
}
</script>

<style lang="scss">
.video-js {
  margin: 0 auto;
  width:calc(100% - 18rem);
  min-width: 70vw;
  max-height: 70vh;
  height: 70vh;
  overflow: hidden;
}

.vjs-control-bar {
  height: unset !important;

  .vjs-volume-panel,
  .vjs-picture-in-picture-control,
  .vjs-remaining-time,
  .vjs-fullscreen-control,
  .vjs-play-control {
    display: none !important;
  }
  .vjs-progress-control {
    padding: 1rem !important;
    background-color: rgba(242, 242, 242, 0.9);
    color: $red;

    .vjs-time-tooltip {
      font-size: 1rem !important;
    }
  }
  .vjs-play-progress {
    background-color: $red !important;
  }
  .vjs-slider {
    background-color: rgba(102, 102, 102, 0.5);
  }
}

</style>
