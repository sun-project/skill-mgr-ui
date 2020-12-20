<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered">ログイン</h1>
      <div class="box">
        <b-button
          type="is-primary"
          class="is-fullwidth"
          @click="loginWithKeycloak"
        >
          Keycloakでログイン
        </b-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  auth: false,

  methods: {
    loginWithKeycloak() {
      this.$auth.loginWith('keycloak')
    },
  },
}
</script>

<style scoped>
.container {
  max-width: 30rem;
}
</style>
