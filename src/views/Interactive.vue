<template>
  <div class="background">

    <!-- TEMP -- TO DELETE -->
    <div class="back">
      <router-link to="/assessment" tag="span">BACK</router-link> -- 
      <router-link to="/assessment/results" tag="span">ONWARD</router-link>
    </div>
    <!-- TEMP -- TO DELETE -->

    <div class="content--cover" v-if="!started" @click="beginCountdown">
      <div class="desc">
        <span class="large t--capitalize">
          {{ $t('assessment.start1') }}<br/>
          {{ $t('assessment.start2') }}
        </span>
        <span class="tiny">{{ $t('assessment.toStart') }}</span>
      </div>
    </div>

    <div class="content">
      <div :class="timerClass">
        <span class="timer__num">{{ timer }}</span>
        {{ $t('assessment.secondsShort') }}
      </div>
      <div class="progress">
        <span class="progress__bar" :style="progressWidth"></span>
      </div>
    </div>

    <div
      :class="paused ? 'button play' : 'button stop'"
      @click="playpause"
    ><span></span></div>
  </div>
</template>

<script>
import { ASSESSMENT_TIME, ASSESSMENT_TIME_ALERT } from "@/constants"
export default {
  name: 'Interactive',
  data() {
    return {
      started: false,
      paused: true,
      timer: ASSESSMENT_TIME,
      countdown: null,

      // data
      compressionStartTime: null,
      compressionData: [],
    }
  },
  methods: {
    playpause: function() {
      clearInterval(this.countdown);
      if(this.paused) { // currently paused
        this.countdown = setInterval(this.decrement, 1000);
        this.paused = false;
      }
      else {
        this.paused = !this.paused;
      }
    },
    decrement: function() {
      this.timer = this.timer - 1;
    },
    beginCountdown: function() {
      this.started = true;  // mark as started
      this.timer = ASSESSMENT_TIME; // reset the timer
      this.compressionStartTime = new Date();  // record the start timestamp

      // start by setting pause to true, then "playing"
      this.paused = true;
      this.playpause();
    },
    storeCompressionTime: function(time) {
      console.log("Recorded compression time:", time);
      this.compressionData.push({
        start: this.compressionStartTime,
        end: time
      });
    }
  },
  computed: {
    timerClass: function() {
      if(this.timer > ASSESSMENT_TIME_ALERT) return "timer"
      else return "timer timer--red"
    },
    progressWidth: function() {
      return {width: `${parseInt(this.timer/3*10)}%`}
    }
  },
  watch: {
    timer: function(value) {
      this.timer = ("0" + value).slice(-2)
      if(value == "00") {
        clearInterval(this.countdown);
        setTimeout(() => {
          this.$actions.setRawAssessmentData(this.compressionData)
          this.$router.push('/assessment/results');
        }, 5000);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

// TEMP -- TO DELETE
.back {
  position: absolute;
  top: 10rem;
  cursor: pointer;
  color: $red;
}
// TEMP -- TO DELETE

.content--cover {
  background-color: rgba(255,255,255,0.9);
  width: 100%;
  top: 20vh;
  height: 80vh;
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  cursor: pointer;

  .large {
    font-size: 4rem;
    line-height: 100%;
    text-align: right;
    padding-right: 1rem;
  }
  .tiny {
    font-size: 3rem;
  }
  .desc {
    padding-bottom: 10rem;
    display: flex;
    font-family: 'Avenir Next Bold';
    color: $darkgrey;
  }
  &:hover { opacity: 0.8; }
}

.background {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content {
  max-width: 70vw;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.timer {
  font-family: "Avenir Next";
  font-size: 7rem;
  color: $darkgrey;

  .timer__num {
    font-family: "Avenir Next Bold";
    font-size: 24rem;
    line-height: 80%;
  }
}
.timer--red, .timer--complete { color: $red; }
.timer--complete { font-family: "Avenir Next Bold"}

.progress {
  width: 100%;
  height: 1.2rem;
  background-color: $grey;
  border-radius: 1rem;
  overflow: hidden;

  .progress__bar {
    height: 100%;
    background-color: $red;
    display: flex;
    transition: all 1s linear;
  }
}

.button {
  transition: all 0.2s;
  position: absolute;
  right: 3rem;
  bottom: 3rem;
  cursor: pointer;
  z-index: 10;
}
.button:hover {
  transform: scale(1.1);
  transition: all 0.2s;
}
.stop {
  background-color: $grey;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  span {
    width: 1.5rem;
    height: 1.5rem;
    background-color: $white;
  }
}
.play {
  background-color: $red;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  span {
    margin-left: 0.5rem;
    width: 0;
    height: 0;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    border-left: 1.5rem solid white;
  }
}

</style>
