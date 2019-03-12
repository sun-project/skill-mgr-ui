<template>
  <div class="container">
    <h1 class="page-title">
      ログイン
    </h1>
    <a-card>
      <a-form
        layout="vertical"
        @submit.prevent="login"
      >
        <a-form-item label="ユーザーID">
          <a-input v-model="userId" />
        </a-form-item>
        <a-form-item label="パスワード">
          <a-input
            v-model="password"
            type="password"
          />
        </a-form-item>
        <a-button
          type="primary"
          html-type="submit"
        >
          ログイン
        </a-button>
      </a-form>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      password: ''
    }
  },

  methods: {
    login() {
      this.$router.push(`/users/${this.userId}/skill-sheets/latest`)
    }
  }
}
</script>

<style scoped>
.container {
  width: 30rem;
  margin: 3rem auto;
}
.page-title {
  text-align: center;
}
</style>
