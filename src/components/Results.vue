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
      fireDb.createDocument({
        object: "string"
      });
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
