<template>
  <component
    :is="component"
    class="base-heading"
    :class="computedClass"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    component: {
      type: String,
      default: 'h1'
    },
    align: {
      type: String,
      default: 'center',
      validator(value) {
        return value === 'center' || value === 'left' || value === 'right'
      }
    }
  },

  computed: {
    computedClass() {
      return {
        'is-align-center': this.align === 'center',
        'is-align-right': this.align === 'right'
      }
    }
  }
}
</script>

<style scoped>
.base-heading {
  margin: 0;
}
.is-align-center {
  text-align: center;
}
.is-align-right {
  text-align: right;
}
</style>
