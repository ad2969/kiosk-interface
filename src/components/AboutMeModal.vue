<template>
    <div :class="active ? 'AboutMe' : 'AboutMe AboutMe--hidden'">
        <div class="col-2">
            <h1>{{ $t('landing.aboutUs1') }} {{ $t('landing.aboutUs2') }}</h1>
            <h1 class="back" @click="close">{{ $t('landing.back') }}</h1>
        </div>
        <div class="col-8">
            <h1>{{ $t('landing.who.title') }}</h1>
            <p>{{ $t('landing.who.content') }}</p>
            <h1>{{ $t('landing.why.title') }}</h1>
            <p>{{ $t('landing.why.content') }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AboutMeModal',
  props: {
    active: Boolean
  },
  methods: {
      close() {
          this.$emit('closeModal')
      }
  }
}
</script>

<style lang="scss" scoped>
.AboutMe {
    background: white;
    display: flex;
    flex-direction:row;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    font-size: 1em;
    overflow: hidden;
    transform-origin: bottom;
    transition: all 0.3s;

    h1 {
        font-family: 'Avenir Next Bold';
    }

    .col-2 {
        flex: 20%;
        text-align: right;
        margin: 10%;
        position: relative;

        .back {
            position: absolute;
            bottom: 0;
            right: 0;
            transition: all 0.2s;
            cursor: pointer;
        }
        .back:hover {
            transform: scale(1.1);
            transition: all 0.2s;
        }
    }
    .col-8 {
        flex: 80%;
        text-align: left;
        margin: 10%;
        margin-right: 20%;
        margin-left: 0;

        h1 {
            color: $red;
            margin-bottom: 0;
        }

        p {
            font-family: 'Avenir Next Ultra Light';
            color: $black;
            margin-left: 3em;
            font-size: 1.2em;
            margin-top: 0.5em;
        }
    }
}

.AboutMe--hidden {
    transform: scale(0);
    transform-origin: bottom;
    transition: all 0.3s;
}
</style>