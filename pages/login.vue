<template>
  <base-container size="sm">
    <base-element>
      <base-heading align="center">
        ログイン
      </base-heading>
    </base-element>
    <base-element>
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
        <hr>
        <a-button
          type="primary"
          @click="loginWithKeycloak"
        >
          Keycloakでログイン
        </a-button>
      </a-card>
    </base-element>
  </base-container>
</template>

<script>
import BaseContainer from '@/components/BaseContainer.vue'
import BaseElement from '@/components/BaseElement.vue'
import BaseHeading from '@/components/BaseHeading.vue'

export default {
  auth: false,

  components: {
    BaseContainer,
    BaseElement,
    BaseHeading
  },

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
