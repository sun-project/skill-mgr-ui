<template>
  <base-container>
    <base-element>
      <base-heading align="center">
        スキルシート <small>最新</small>
      </base-heading>
    </base-element>
    <base-element>
      <a-card>
        <div style="margin-bottom: 1.5rem; text-align: center;">
          <a-button-group>
            <a-button
              type="primary"
              ghost
            >
              <nuxt-link :to="editLink">
                <a-icon type="edit" />
                編集
              </nuxt-link>
            </a-button>
            <a-button
              type="primary"
              ghost
            >
              <a-icon type="eye" />
              プレビュー
            </a-button>
          </a-button-group>
          <a-dropdown>
            <a-menu slot="overlay">
              <a-menu-item>
                <a-icon type="plus" />新版を作成
              </a-menu-item>
              <a-menu-item>
                <a-icon type="clock-circle" />履歴を表示
              </a-menu-item>
            </a-menu>
            <a-button
              type="primary"
              ghost
            >
              <a-icon type="clock-circle" />
              版の管理
              <a-icon type="down" />
            </a-button>
          </a-dropdown>
        </div>
        <table-profile
          class="profile"
          v-bind="profile"
        />
        <table-skills :skills="skills" />
      </a-card>
    </base-element>
  </base-container>
</template>

<script>
import { mapGetters } from 'vuex'

import BaseContainer from '@/components/BaseContainer.vue'
import BaseElement from '@/components/BaseElement.vue'
import BaseHeading from '@/components/BaseHeading.vue'
import TableProfile from '@/components/TableProfile.vue'
import TableSkills from '@/components/TableSkills.vue'

export default {
  components: {
    BaseContainer,
    BaseElement,
    BaseHeading,
    TableProfile,
    TableSkills
  },

  computed: {
    ...mapGetters('skillSheetDetail', ['skillSheet']),

    profile() {
      return this.skillSheet && this.skillSheet.profile
    },

    skills() {
      return this.skillSheet ? this.skillSheet.skills : []
    },

    editLink() {
      return this.skillSheet ? `${this.skillSheet.id}/edit` : null
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
