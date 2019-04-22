<template>
  <base-container size="sm">
    <base-element>
      <base-heading align="center">
        auth-moduleおためし
      </base-heading>
    </base-element>
    <base-element>
      <a-card>
        <p>User status: {{ $auth.loggedIn ? 'Logged In' : 'Guest' }}</p>
        <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
        <template v-if="$auth.loggedIn">
          <nuxt-link :to="`/users/${$auth.user.preferred_username}/skill-sheets/latest`">
            スキルシート
          </nuxt-link>
          <a @click="$auth.logout()">
            ログアウト
          </a>
        </template>
        <template v-else>
          <nuxt-link to="/login">
            ログイン
          </nuxt-link>
        </template>
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
  }
}
</script>
