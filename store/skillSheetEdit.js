import {
  SkillSheetRepository,
  createNewSkill,
} from '@/repositories/SkillSheetRepository'

export const state = () => ({
  skillSheet: null,
})

export const getters = {
  skillSheet: (state) => state.skillSheet,
}

export const mutations = {
  load(state, skillSheet) {
    state.skillSheet = skillSheet
  },

  changeProfile(state, profile) {
    state.skillSheet.profile = profile
  },

  changeSkill(state, { index, skill }) {
    state.skillSheet.skills.splice(index, 1, skill)
  },

  addSkill(state) {
    state.skillSheet.skills.push(createNewSkill())
  },

  removeSkill(state, skillIndex) {
    state.skillSheet.skills.splice(skillIndex, 1)
  },
}

export const actions = {
  async load({ commit }, { skillSheetId }) {
    const skillSheetRepository = new SkillSheetRepository(this.$axios)

    const skillSheet = await skillSheetRepository.fetchSkillSheet(skillSheetId)

    commit('load', skillSheet)
  },

  async save({ state }) {
    const skillSheetRepository = new SkillSheetRepository(this.$axios)

    await skillSheetRepository.updateSkillSheet(state.skillSheet)
  },
}
