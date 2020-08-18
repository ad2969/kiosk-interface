<template>
  <div>
    <transition name="modal" v-if="showNotice">
        <div class="modal-mask">
          <div class="modal-wrapper">

            <div class="modal-body">
              <slot name="body">
                {{ $t('practice.timeout') }}
              </slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                <button class="modal-button t--capitalize" @click="redirectToAssessment">{{ $t('practice.timeoutOk') }}</button>
                <button class="modal-button red t--capitalize" @click="restartCountdown">{{ $t('practice.timeoutStay') }}</button>
              </slot>
            </div>

          </div>
        </div>
      </transition>
  </div>
</template>

<script>
import { PRACTICE_TIME_TIMEOUT } from "@/constants"
export default {
  name: 'Practice',
  data() {
    return {
      timer: PRACTICE_TIME_TIMEOUT,
      countdown: null,
      showNotice: false
    }
  },
  methods: {
    restartCountdown: function() {
      this.showNotice = false;
      this.timer = PRACTICE_TIME_TIMEOUT;
      this.countdown = setInterval(this.decrement, 1000);
    },
    decrement: function() {
      this.timer = this.timer - 1;
    },
    redirectToAssessment: function() {
      this.$router.push('/assessment/results');
    },
  },
  mounted() {
    this.restartCountdown()
  },
  watch: {
    timer: function(value) {
      if(value == 0) {
        clearInterval(this.countdown); // stop the timer
        this.timer = PRACTICE_TIME_TIMEOUT; // reset the timer
        this.showNotice = true; // show popup
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Avenir Next';

  .modal-wrapper {
    width: 20%;
    min-width: 300px;
    margin: 0px auto;
    padding: 50px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }

  .modal-body {
    font-size: 1rem;
    margin: 1rem 0;
    line-height: 1.5rem;
  }

  .modal-footer {
    .modal-button {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      padding: 0.5rem;
      font-size: 1rem;
      width: 100%;
      font-family: 'Avenir Next';
    }
    .red {
      background-color: $red;
      color: $white;
    }
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}

</style>
