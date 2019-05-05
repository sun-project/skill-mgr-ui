<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered">
        auth-moduleおためし
      </h1>
      <div class="box">
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  auth: false
}
</script>
