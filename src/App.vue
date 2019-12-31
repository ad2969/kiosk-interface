<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Landing msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Landing from './components/Landing.vue'

export default {
  name: 'app',
  components: {
    Landing
  }
}
</script>

<style>
@font-face {
  font-family: "Avenir Next Bold";
  src: url("./assets/font/AvenirNext-Bold-01.ttf") format('truetype');
  font-weight: normal;
}
@font-face {
  font-family: "Avenir Next Bold Italic";
  src: url("./assets/font/AvenirNext-BoldItalic-02.ttf") format('truetype');
  font-weight: normal;
}
@font-face {
  font-family: "Avenir Next DemiBold";
  src: url("./assets/font/AvenirNext-DemiBold-03.ttf") format('truetype');
  font-weight: normal;
}
@font-face {
  font-family: "Avenir Next DemiBold Italic";
  src: url("./assets/font/AvenirNext-DemiBoldItalic-04.ttf") format('truetype');
  font-weight: normal;
}
@font-face {
  font-family: "Avenir Next Italic";
  src: url("./assets/font/AvenirNext-Italic-05.ttf") format('truetype');
  font-weight: normal;
}
@font-face {
  font-family: "Avenir Next Medium";
  src: url("./assets/font/AvenirNext-Medium-06.ttf") format('truetype');
  font-weight: normal;
}
@font-face {
  font-family: "Avenir Next Medium Italic";
  src: url("./assets/font/AvenirNext-MediumItalic-07.ttf") format('truetype');
  font-weight: normal;
}
@font-face {
  font-family: "Avenir Next";
  src: url("./assets/font/AvenirNext-Regular-08.ttf") format('truetype');
  font-weight: normal;
}
@font-face {
  font-family: "Avenir Next Heavy";
  src: url("./assets/font/AvenirNext-Heavy-09.ttf") format('truetype');
  font-weight: normal;
}
@font-face {
  font-family: "Avenir Next Heavy Italic";
  src: url("./assets/font/AvenirNext-HeavyItalic-10.ttf") format('truetype');
  font-weight: normal;
}
@font-face {
  font-family: "Avenir Next Ultralight";
  src: url("./assets/font/AvenirNext-UltraLight-11.ttf") format('truetype');
  font-weight: normal;
}
@font-face {
  font-family: "Avenir Next Ultralight Italic";
  src: url("./assets/font/AvenirNext-UltraLightItalic-12.ttf") format('truetype');
  font-weight: normal;
}

#app {
  font-family: 'Avenir Next', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
