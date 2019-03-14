<template>
  <div class="container">
    <h1 class="page-title">
      スキルシート <small>最新</small>
    </h1>
    <a-card>
      <div style="margin-bottom: 1.5rem; text-align: center;">
        <a-button-group>
          <a-button
            type="primary"
            ghost
          >
            <a-icon type="edit" />
            編集
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
              <a-icon type="plus" />新バージョンを作成
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
            バージョンの管理
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
  </div>
</template>

<script>
import TableProfile from '@/components/TableProfile.vue'
import TableSkills from '@/components/TableSkills.vue'

export default {
  components: {
    TableProfile,
    TableSkills
  },

  computed: {
    profile() {
      const profile = this.response.response.skill_sheet.profile
      return {
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
      }
    },

    skills() {
      const skills = this.response.response.skill_sheet.skill_list
      return skills.map(skill => ({
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
      }))
    }
  },

  async asyncData({ params, $axios }) {
    let skillSheetId
    if (params.skillSheetId === 'latest') {
      const { response } = await $axios.$get(
        `http://118.27.0.151/skillmgr/api/v1/skillsheets/list`,
        {
          params: {
            user_id: params.userId
          }
        }
      )

      console.log('list', response) // eslint-disable-line

      if (response.skill_sheet_list.length === 0) {
        return {}
      }

      skillSheetId = response.skill_sheet_list[0].id
    } else {
      skillSheetId = params.skillSheetId
    }

    const response = await $axios.$get(
      `http://118.27.0.151/skillmgr/api/v1/skillsheets/${skillSheetId}/detail`
    )

    console.log('detail', response) // eslint-disable-line

    return { response }
  }
}
</script>


<style scoped>
.container {
  width: 60rem;
  max-width: 100%;
  margin: 3rem auto;
}
.page-title {
  text-align: center;
}
.profile {
  margin-bottom: 24px;
}
</style>
