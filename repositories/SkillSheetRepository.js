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

    return response.skill_sheet_list[0].id
  }

  async fetchSkillSheet(skillSheetId) {
    const { response } = await this.$axios.$get(
      `/skillmgr/api/v1/skillsheets/${skillSheetId}/detail`
    )

    console.debug(`SkillSheetRepository#fetchSkillSheet(${JSON.stringify(skillSheetId)})`, response) // eslint-disable-line

    const { skill_sheet: skillSheet } = response

    return mapSkillSheet(skillSheet)
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
