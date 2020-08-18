<template>
  <div class="background">
    <div class="content">
      <div class="desc">
        {{ ASSESSMENT_TIME }} {{ $t('assessment.seconds') }}.<br />
        <span class="t--capitalize">{{ $t('assessment.instructions') }}.</span>
      </div>
      <router-link to="/assessment/interactive" tag="div" class="button">
        <div class="button--go">{{ $t('assessment.go') }}</div>
        <div class="button--arrow">
          <svg width="60%" height="60%" viewBox="0 0 47 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.77903 72.3043C7.85185 72.3043 5.99879 71.5631 4.51634 70.1548C1.62557 67.264 1.62557 62.5202 4.51634 59.6294L26.9754 37.0962L4.44223 14.563C1.55145 11.6722 1.55146 6.9284 4.44223 4.03763C7.333 1.14685 12.0768 1.14685 14.9676 4.03763L42.7635 31.8335C44.1718 33.2418 44.913 35.0949 44.913 37.0962C44.913 39.0975 44.0977 40.9506 42.7635 42.3589L15.0417 70.1548C13.5593 71.5631 11.6321 72.3043 9.77903 72.3043Z" fill="#DD2111" stroke="#DD2211" stroke-width="3"/>
          </svg>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ASSESSMENT_TIME } from "@/constants"
export default {
  name: 'Assessment',
  data() {
    return {
      ASSESSMENT_TIME: ASSESSMENT_TIME
    }
  }
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
  margin-right: 2rem;
  max-width: 40vw;
  line-height: 100%;
}

.button {
  cursor: pointer;
  min-width: 30rem;
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
    max-width: 40%;
    text-align: right;
    line-height: 100%;
    color: $white;
    overflow-wrap: break-word;
  }

  .button--arrow {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: $white;
    border-radius: 50%;
    color: $red;
    width: 6rem;
    height: 6rem;
    position: relative;
    margin-left: 2rem;
  }
}

</style>
