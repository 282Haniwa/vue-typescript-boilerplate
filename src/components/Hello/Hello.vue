<template>
  <h1 class="hello--red">Hello {{ name }}!</h1>
</template>

<script lang="ts">
import Vue from 'vue';

const options = {
  props: {
    name: {
      type: String,
      default: '',
      required: false,
    },
  },
};

export default Vue.extend(options);
</script>

<style lang="scss" scoped>
/* @import "src/assets/sass/global"; */
.hello {
  &--red {
    color: $color-red;
  }
}
</style>
