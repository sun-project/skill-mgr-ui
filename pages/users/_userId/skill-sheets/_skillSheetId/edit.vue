<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered">
        スキルシートの編集
      </h1>
      <h2 class="subtitle has-text-centered">
        最新
      </h2>
      <div class="box">
        <form @submit.prevent="save">
          <b-button
            type="is-primary"
            native-type="submit"
          >
            保存
          </b-button>
          <pre>{{ JSON.stringify(skillSheet, null, 2) }}</pre>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('skillSheetEdit', ['skillSheet'])
  },

  async fetch({ store, params }) {
    await store.dispatch('skillSheetEdit/load', params)
  },

  methods: {
    ...mapActions('skillSheetEdit', ['save'])
  }
}
</script>
