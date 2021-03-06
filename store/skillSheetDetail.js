import { SkillSheetRepository } from '@/repositories/SkillSheetRepository'

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
}

export const actions = {
  async load({ commit }, { userId, skillSheetId }) {
    const skillSheetRepository = new SkillSheetRepository(this.$axios)

    const loadingSkillSheetId =
      skillSheetId === 'latest'
        ? await skillSheetRepository.fetchLatestSkillSheetId(userId)
        : skillSheetId

    if (!loadingSkillSheetId) {
      return
    }

    const skillSheet = await skillSheetRepository.fetchSkillSheet(
      loadingSkillSheetId
    )

    commit('load', skillSheet)
  },
}
