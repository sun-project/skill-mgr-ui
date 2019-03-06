<template>
  <div>
    <h1>Login</h1>
    <h1>Login form</h1>
    <button @click="login">
      Login
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push('/users/test/skill-sheets/latest')
    }
  }
}
</script>
