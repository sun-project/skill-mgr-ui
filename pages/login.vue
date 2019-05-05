<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered">
        ログイン
      </h1>
      <div class="box">
        <form @submit.prevent="login">
          <b-field label="ユーザーID">
            <b-input v-model="userId" />
          </b-field>
          <b-field label="パスワード">
            <b-input
              v-model="password"
              type="password"
            />
          </b-field>
          <b-field>
            <p class="control">
              <b-button
                type="is-primary"
                native-type="submit"
              >
                ログイン
              </b-button>
            </p>
          </b-field>
        </form>
        <hr>
        <b-button
          type="is-primary"
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

  data() {
    return {
      userId: '',
      password: ''
    }
  },

  methods: {
    login() {
      this.$router.push(`/users/${this.userId}/skill-sheets/latest`)
    },
    loginWithKeycloak() {
      this.$auth.loginWith('keycloak')
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 30rem;
}
</style>
