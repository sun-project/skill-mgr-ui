<template>
  <nav class="panel">
    <a
      class="panel-block"
      :class="{ 'is-active': value === 'profile' }"
      @click="handleProfileClick"
    >
      <b-icon
        icon="account-box-outline"
        class="panel-icon"
      />
      プロフィール
    </a>
    <a
      v-for="(skill, i) in skills"
      :key="i"
      class="panel-block"
      :class="{ 'is-active': value === `skill:${i}` }"
      @click="handleSkillClick(i)"
    >
      <b-icon
        icon="text-short"
        class="panel-icon"
      />
      {{ skill.workRange.from | formatYearMonth }}〜{{ skill.workRange.to | formatYearMonth }}
    </a>
    <div class="panel-block">
      <b-button
        class="is-fullwidth"
        @click="handleAddClick"
      >
        経歴の追加
      </b-button>
    </div>
  </nav>
</template>

<script>
import { formatYearMonth } from '@/filters'

export default {
  filters: {
    formatYearMonth
  },

  props: {
    value: {
      type: String,
      default: 'profile'
    },

    skills: {
      type: Array,
      default() {
        return []
      }
    }
  },

  methods: {
    handleProfileClick() {
      this.$emit('input', 'profile')
    },

    handleSkillClick(index) {
      this.$emit('input', `skill:${index}`)
    },

    handleAddClick() {
      this.$emit('add')
    }
  }
}
</script>
