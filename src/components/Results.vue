<template>
  <div class="background">
    <div class="content">
      <button class="button" v-on:click="send">Send</button>
    </div>
  </div>
</template>

<script>
import fireDb from "../plugins/firebase.js";

export default {
  name: "Results",
  methods: {
    async send() {
      try {
        fireDb.createDocument({
          session: "LOL",
          secondsSpentVideo: 120,
          practiceSecondsSpent: 10,
          practiceAverageCpm: 80.28,
          practiceDistanceData: [
            10,
            123,
            1,
            112,
            1,
            124,
            1,
            21,
            2,
            1,
            41,
            2,
            12,
            1
          ],
          practiceScore: 10,
          practiceStartTime: Date()
        });
      } catch (error) {
        console.log("Firebase create document failed");
        console.log(error);
      }

      console.log("Firebase creates an object called string");
    }
  }
};
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

.button {
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  background-color: $red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s;
  }
}
</style>
