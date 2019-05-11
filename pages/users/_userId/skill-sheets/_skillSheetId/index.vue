<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered">
        スキルシート
      </h1>
      <template v-if="!skillSheet">
        <template v-if="skillSheetId === 'latest'">
          <b-notification :closable="false">
            <section class="section has-text-centered">
              まだスキルシートがありません
            </section>
            <section class="section has-text-centered">
              <nuxt-link to="new" class="button">
                スキルシートを作成する
              </nuxt-link>
            </section>
          </b-notification>
        </template>
      </template>
      <template v-else>
        <h2 class="subtitle has-text-centered">
          最新
        </h2>
        <div style="margin-bottom: 1.5rem;">
          <div class="field is-grouped is-grouped-centered">
            <div class="field has-addons">
              <div class="control">
                <nuxt-link :to="editLink" class="button is-primary is-outlined">
                  <b-icon icon="pencil" size="is-small" />
                  <span>編集</span>
                </nuxt-link>
              </div>
              <div class="control">
                <button class="button is-primary is-outlined">
                  <b-icon icon="eye" size="is-small" />
                  <span>プレビュー</span>
                </button>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <b-dropdown>
                  <button slot="trigger" class="button is-primary is-outlined">
                    <b-icon icon="clock-outline" size="is-small" />
                    <span>版の管理</span>
                    <b-icon icon="menu-down" />
                  </button>
                  <b-dropdown-item has-link>
                    <nuxt-link to="new">
                      <b-icon icon="plus" size="is-small" />
                      <span>新板を作成</span>
                    </nuxt-link>
                  </b-dropdown-item>
                  <b-dropdown-item>
                    <b-icon icon="history" size="is-small" />
                    <span>履歴を表示</span>
                  </b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </div>
        </div>
        <table-profile class="profile" v-bind="profile" />
        <template v-if="skills.length === 0">
          <b-notification :closable="false">
            <section class="section has-text-centered">
              まだ経歴がありません
            </section>
          </b-notification>
        </template>
        <template v-else>
          <table-skills :skills="skills" />
        </template>
      </template>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import TableProfile from '@/components/TableProfile.vue'
import TableSkills from '@/components/TableSkills.vue'

export default {
  components: {
    TableProfile,
    TableSkills
  },

  computed: {
    ...mapGetters('skillSheetDetail', ['skillSheet']),

    skillSheetId() {
      return this.$route.params.skillSheetId
    },

    profile() {
      return this.skillSheet && this.skillSheet.profile
    },

    skills() {
      return this.skillSheet ? this.skillSheet.skills : []
    },

    editLink() {
      return this.skillSheet && `${this.skillSheet.id}/edit`
    }
  },

  async fetch({ store, params }) {
    await store.dispatch('skillSheetDetail/load', params)
  }
}
</script>

<style scoped>
.page-title {
  text-align: center;
}
.profile {
  margin-bottom: 24px;
}
</style>
