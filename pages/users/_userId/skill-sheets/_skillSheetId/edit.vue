<template>
  <base-container>
    <base-element>
      <base-heading align="center">
        スキルシートの編集 <small>最新</small>
      </base-heading>
    </base-element>
    <base-element>
      <a-card>
        <form @submit.prevent="save">
          <a-button
            type="primary"
            html-type="submit"
          >
            保存
          </a-button>
          <pre>{{ JSON.stringify(skillSheet, null, 2) }}</pre>
        </form>
      </a-card>
    </base-element>
  </base-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BaseContainer from '@/components/BaseContainer.vue'
import BaseElement from '@/components/BaseElement.vue'
import BaseHeading from '@/components/BaseHeading.vue'

export default {
  components: {
    BaseContainer,
    BaseElement,
    BaseHeading
  },

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
