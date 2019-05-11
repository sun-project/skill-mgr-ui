export class SkillSheetRepository {
  constructor($axios) {
    this.$axios = $axios
  }

  async fetchLatestSkillSheetId(userId) {
    const params = userId
      ? {
          user_id: userId
        }
      : undefined

    const { response } = await this.$axios.$get(
      `/skillmgr/api/v1/skillsheets/list`,
      {
        params
      }
    )

    console.debug(`SkillSheetRepository#fetchLatestSkillSheetId(${JSON.stringify(userId)})`, response) // eslint-disable-line

    if (response.skill_sheet_list.length === 0) {
      return null
    }

    return response.skill_sheet_list[response.skill_sheet_list.length - 1].id
  }

  async fetchSkillSheet(skillSheetId) {
    const { response } = await this.$axios.$get(
      `/skillmgr/api/v1/skillsheets/${skillSheetId}/detail`
    )

    console.debug(`SkillSheetRepository#fetchSkillSheet(${JSON.stringify(skillSheetId)})`, response) // eslint-disable-line

    const { skill_sheet: skillSheet } = response

    return mapSkillSheet(skillSheet)
  }

  async updateSkillSheet(skillSheet) {
    const { response } = await this.$axios.$put(
      `/skillmgr/api/v1/skillsheets/${skillSheet.id}/update`,
      {
        skill_sheet: {
          profile: mapProfileFieldsBack(skillSheet.profile),
          skill_list: skillSheet.skills.map(mapSkillFieldsBack)
        }
      }
    )

    await console.debug(`SkillSheetRepository#updateSkillSheet(${JSON.stringify(skillSheet)})`, response) // eslint-disable-line
  }

  async createSkillSheet(skillSheet) {
    const { response } = await this.$axios.$post(
      '/skillmgr/api/v1/skillsheets/create',
      {
        skill_sheet: {
          profile: mapProfileFieldsBack(skillSheet.profile),
          skill_list: skillSheet.skills.map(mapSkillFieldsBack)
        }
      }
    )

    await console.debug(`SkillSheetRepository#createSkillSheet(${JSON.stringify(skillSheet)})`, response) // eslint-disable-line
  }
}

const mapSkillSheet = skillSheet => ({
  id: skillSheet.id,
  meta: {
    createdAt: skillSheet.create_timestamp,
    updatedAt: skillSheet.last_update_timestamp
  },
  profile: mapProfileFields(skillSheet.profile),
  skills: skillSheet.skill_list.map(mapSkillFields)
})

const mapProfileFields = profile => ({
  fullName: profile.full_name,
  sex: profile.sex_name,
  birthday: profile.birthday,
  age: profile.age,
  address: profile.address,
  nearestStation: profile.nearest_station,
  finalEducation: profile.final_education,
  department: profile.department,
  graduation: profile.graduation,
  graduationType: profile.graduation_type,
  licenses: profile.license_list
})

const mapProfileFieldsBack = profile => ({
  full_name: profile.fullName,
  sex_name: profile.sex,
  birthday: profile.birthday,
  age: profile.age,
  address: profile.address,
  nearest_station: profile.nearestStation,
  final_education: profile.finalEducation,
  department: profile.department,
  graduation: profile.graduation,
  graduation_type: profile.graduationType,
  license_list: profile.licenses
})

const mapSkillFields = skill => ({
  workRange: {
    from: skill.work_from,
    to: skill.work_to
  },
  systemName: skill.system_name,
  steps: skill.step_list,
  positions: skill.position_list,
  scale: skill.scale_name,
  environments: skill.environment_list,
  middlewares: skill.middleware_list,
  languages: skill.language_list,
  others: skill.other_list
})

const mapSkillFieldsBack = skill => ({
  work_from: skill.workRange.from,
  work_to: skill.workRange.to,
  system_name: skill.systemName,
  step_list: skill.steps,
  position_list: skill.positions,
  scale_name: skill.scale,
  environment_list: skill.environments,
  middleware_list: skill.middlewares,
  language_list: skill.languages,
  other_list: skill.others
})

export const createNewSkill = () => ({
  workRange: {
    from: '',
    to: ''
  },
  systemName: '',
  steps: [],
  positions: [],
  scale: '',
  environments: [],
  middlewares: [],
  languages: [],
  others: []
})

export const createNewSkillSheet = (
  copyOf = {
    profile: {
      fullName: '',
      sex: '',
      birthday: '',
      age: '',
      address: '',
      nearestStation: '',
      finalEducation: '',
      department: '',
      graduation: '',
      graduationType: '',
      licenses: []
    },
    skills: []
  }
) => ({
  ...copyOf,
  id: '',
  meta: null
})
