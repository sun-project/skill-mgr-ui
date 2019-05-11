<template>
  <div>
    <header>
      <the-navbar :user="$auth.user" @logout="$auth.logout()" />
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
