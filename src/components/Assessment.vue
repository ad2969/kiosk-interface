<template>
  <div class="background">
    <div class="content">
      <div class="desc">60 seconds.<br />Hands-only CPR.</div>
      <router-link to="/assessment/interactive" tag="div" class="button">
        <div class="button--go">Let's Go</div>
        <div class="button--arrow"><span>➤</span></div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Assessment',
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
.content {
  font-family: "Avenir Next Bold";
  display: flex;
  width:calc(100% - 18rem);
  min-width: 70vw;
  max-height: 70vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
}
.desc {
  font-size: 5rem;
  text-align: left;
  margin-left: 2rem;
  max-width: 40vw;
  line-height: 100%;
}

.button {
  cursor: pointer;
  width: 30rem;
  height: 30rem;
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

  .button--go {
    font-size: 5rem;
    max-width: 50%;
    text-align: right;
    line-height: 100%;
    color: $white;
  }

  .button--arrow {
    background-color: $white;
    border-radius: 50%;
    color: $red;
    width: 6rem;
    height: 6rem;
    position: relative;
    margin-left: 2rem;
    span {
      font-size: 4rem;
      font-family: "Arial";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
  }
}

</style>
