<template>
  <div
    class="base-container"
    :class="computedClass"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'md',
      validator(value) {
        return value === 'sm' || 'md' || 'lg'
      }
    }
  },

  computed: {
    computedClass() {
      return {
        'is-small': this.size === 'sm',
        'is-medium': this.size === 'md',
        'is-large': this.size === 'lg'
      }
    }
  }
}
</script>

<style scoped>
.base-container {
  width: 60rem;
  max-width: 100%;
  margin: 0 auto;
}
.is-small {
  width: 30rem;
}
.is-medium {
  width: 60rem;
}
.is-large {
  width: 100%;
}
</style>
