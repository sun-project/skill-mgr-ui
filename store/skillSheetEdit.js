import {
  SkillSheetRepository,
  createNewSkill
} from '@/repositories/SkillSheetRepository'

export const state = () => ({
  skillSheet: null
})

export const getters = {
  skillSheet: state => state.skillSheet
}

export const mutations = {
  load(state, skillSheet) {
    state.skillSheet = skillSheet
  },

  inputProfile(state, profile) {
    state.skillSheet.profile = profile
  },

  inputSkill(state, skillIndex, skill) {
    state.skillSheet.skills[skillIndex] = skill
  },

  addSkill(state) {
    state.skillSheet.skills.push(createNewSkill())
  },

  removeSkill(state, skillIndex) {
    state.skillSheet.skills.splice(skillIndex, 1)
  }
}

export const actions = {
  async load({ commit }, { skillSheetId }) {
    const skillSheetRepository = new SkillSheetRepository(this.$axios)

    const skillSheet = await skillSheetRepository.fetchSkillSheet(skillSheetId)

    commit('load', skillSheet)
  },

  async save({ state }, { commit }) {
    const skillSheetRepository = new SkillSheetRepository(this.$axios)

    await skillSheetRepository.updateSkillSheet(state.skillSheet)
  }
}
