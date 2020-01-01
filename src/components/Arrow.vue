<template>
  <div class="arrow">
    <svg :style="direction" width="4rem" height="4rem" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M57.5 -6.94371e-06C25.7492 -7.32234e-06 1.06435e-06 25.7456 6.85681e-07 57.5C3.07013e-07 89.2544 25.7456 115 57.5 115C89.2544 115 115 89.2544 115 57.5C115 25.7456 89.2508 -6.56509e-06 57.5 -6.94371e-06ZM84.295 62.7648C81.6141 65.4458 77.2764 65.4458 74.5955 62.7648L64.6839 52.7275L64.6839 79.2853C64.6839 83.1342 61.5681 86.25 57.7228 86.25L57.2736 86.25C53.4283 86.25 50.3125 83.1342 50.3125 79.2853L50.3125 52.8245L40.4872 62.7648C37.8062 65.4458 33.4686 65.4458 30.7877 62.7648C28.1211 60.0552 28.1067 55.6744 30.7877 52.9647L52.7023 30.8416C55.3689 28.1606 59.7209 28.1606 62.3983 30.8416L84.2986 52.9647C86.9759 55.6744 86.9759 60.0552 84.295 62.7648Z"
      :fill="color" />
    </svg>
  </div>
</template>
<script>
export default {
  name: 'Arrow',
  props: {
    color: String,
    down: Boolean
  },
  computed: {
    direction: function() {
      var styleObj;
      if(this.down) styleObj = { transform: "scaleY(-1)" };
      else styleObj = { transform: "scaleY(1)" }
      return styleObj;
    }
  }
}
</script>
<style>
.arrow {
  margin-left: 3rem;
  margin-top: 1rem;
  transition: all 0.2s;
  cursor: pointer;
}
.arrow:hover {
  transform: scale(1.1);
  transition: all 0.2s;
}
</style>
