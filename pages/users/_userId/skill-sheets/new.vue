<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered">
        スキルシートの作成
      </h1>
      <div class="columns">
        <div class="column is-one-quarter">
          <form-fields-panel
            v-model="active"
            :skills="skills"
            @add="handleSkillAdd"
          />
          <div class="columns is-vcentered is-gapless">
            <div class="column">
              <b-button
                type="is-primary"
                class="is-fullwidth"
                @click="handleSave"
              >
                保存
              </b-button>
            </div>
            <div class="column">
              <nuxt-link to="." class="button is-text is-fullwidth">
                キャンセル
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <template v-if="active === 'profile'">
              <div class="content">
                <form-fields-profile
                  :initial-values="profile"
                  @change="handleProfileChange"
                />
              </div>
            </template>
            <template v-if="activeSkillIndex !== -1">
              <div class="content">
                <form-fields-skill
                  :key="activeSkillIndex"
                  :initial-values="skills[activeSkillIndex]"
                  @change="handleSkillChange"
                />
              </div>
              <b-button
                type="is-danger"
                icon-left="delete"
                @click="handleSkillRemove"
              >
                削除
              </b-button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import FormFieldsPanel from '@/components/FormFieldsPanel.vue'
import FormFieldsProfile from '@/components/FormFieldsProfile.vue'
import FormFieldsSkill from '@/components/FormFieldsSkill.vue'

export default {
  components: {
    FormFieldsPanel,
    FormFieldsProfile,
    FormFieldsSkill
  },

  data() {
    return {
      active: 'profile'
    }
  },

  computed: {
    ...mapGetters('skillSheetNew', ['skillSheet']),

    profile() {
      return this.skillSheet && this.skillSheet.profile
    },

    skills() {
      return this.skillSheet && this.skillSheet.skills
    },

    activeSkillIndex() {
      if (!this.active.startsWith('skill:')) {
        return -1
      }

      const index = this.active.substr('skill:'.length)
      return Number(index)
    }
  },

  async fetch({ store, params }) {
    await store.dispatch('skillSheetNew/load', params)
  },

  methods: {
    ...mapMutations('skillSheetNew', [
      'changeProfile',
      'changeSkill',
      'addSkill',
      'removeSkill'
    ]),
    ...mapActions('skillSheetNew', ['save']),

    handleProfileChange(newProfile) {
      this.changeProfile(newProfile)
    },

    handleSkillChange(newSkill) {
      this.changeSkill({
        index: this.activeSkillIndex,
        skill: newSkill
      })
    },

    handleSkillAdd() {
      this.addSkill()
      this.active = `skill:${this.skills.length - 1}`
    },

    handleSkillRemove() {
      this.removeSkill(this.activeSkillIndex)
      const prevIndex = this.activeSkillIndex - 1
      if (prevIndex < 0) {
        this.active = 'profile'
      } else {
        this.active = `skill:${prevIndex}`
      }
    },

    handleSave() {
      this.$dialog.confirm({
        message: '修正内容を保存しますか？',
        confirmText: '保存',
        cancelText: 'キャンセル',
        onConfirm: async () => {
          await this.save()
          this.$router.push('.')
        }
      })
    }
  }
}
</script>
