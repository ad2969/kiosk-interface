<template>
  <div class="container">
    <div class="language-wrapper">
      <h1 :class="languageDropdown ? 'language--active' : 'language'"
          @click="openLanguageDropdown">{{ currentLocale }}</h1>
      <div :class="languageDropdown ? 'dropdown--active' : 'dropdown'"
          v-if="languageDropdown"
          v-on-clickaway="closeLanguageDropdown">
        <div v-for="locale in filteredAvailableLocales"
             :key="`localeOption-${locale}`"
             @click="changeLanguage(locale)"
             class="language t--uppercase"
        >{{ locale }}</div>
      </div>
    </div>
    <div v-if="!busy" class="arrows">
      <Arrow :active="validateUp"
             :down="false"
             @callback="prev" />
      <Arrow :active="validateDown"
             :down="true"
             @callback="next" />
    </div>
  </div>
</template>

<script>
import Arrow from './Arrow.vue'
import { mixin as clickaway } from 'vue-clickaway'
import i18n from '@/i18n.js'

export default {
  name: 'RightNavBar',
  components: {
    Arrow
  },
  props: {
    numPages: Number,
    page: Number,
    navigate: Function,
    busy: Boolean
  },
  mixins: [ clickaway ],
  data() {
    return {
      validateUp: true,
      validateDown: true,
      languageDropdown: false,
      filteredAvailableLocales: i18n.availableLocales,
      currentLocale: i18n.locale
    }
  },
  watch: {
    page: function(val) {
      // "down" disabled on 3 (assessment start)
      if(val === (this.numPages - 1) || val === 3) {
        this.validateUp = true;
        this.validateDown = false;
      }
      else if(val === 0) {
        this.validateUp = false;
        this.validateDown = true;
      }
      else {
        this.validateUp = true;
        this.validateDown = true;
      }
    },
    languageDropdown: function() {
      this.currentLocale = i18n.locale;
      this.filteredAvailableLocales = i18n.availableLocales.filter((locale) => locale !== i18n.locale);
    }
  },
  methods: {
    next: function() {
      if(this.validateDown) this.navigate(this.page + 1)
    },
    prev: function() {
      if(this.validateUp) this.navigate(this.page - 1)
    },
    closeLanguageDropdown: function() {
      this.languageDropdown = false;
    },
    openLanguageDropdown: function() {
      this.languageDropdown = true;
    },
    changeLanguage: function(lang) {
      i18n.locale = lang;
      this.languageDropdown = false;
    }
  },
  mounted() {
    if(this.page === (this.numPages - 1)) {
      this.validateUp = true;
      this.validateDown = false;
    }
    else if(this.page === 0) {
      this.validateUp = false;
      this.validateDown = true;
    }
    else {
      this.validateUp = true;
      this.validateDown = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  height: 95vh;
  width: 9rem;
  position: absolute;
  right: 0;
  top: 0;
}

.language-wrapper {
  margin-top: 4rem;
}

.language, .language--active {
  @extend .t--uppercase;
  color: $grey;
  font-size: 3rem;
  transition: all 0.2s;
  cursor: pointer;
  margin: 1rem auto;
}
.language:hover {
  color: $black;
  transition: all 0.2s;
  cursor: pointer;
}
.language--active {
  color: $black;
}

.dropdown, .dropdown--active {
  transition: all 0.2s;
}
.dropdown {
  opacity: 0;
}
.dropdown--active {
  opacity: 1;
}

.arrows {
  bottom: 0;
  position: absolute;
}

</style>
