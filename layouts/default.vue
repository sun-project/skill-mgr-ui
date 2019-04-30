<template>
  <div>
    <header>
      <the-navbar />
    </header>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'

export default {
  components: {
    TheNavbar
  }
}
</script>
