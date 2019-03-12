<template>
  <div class="container">
    <h1 class="page-title">
      スキルシート <small>最新</small>
    </h1>
    <a-card>
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

  data() {
    return {
      response: {
        response: {
          skill_sheet: {
            id: '1',
            create_timestamp: '2015-01-01T00:00:00.000+09:00',
            create_user: 'tmiyajima',
            last_update_timestamp: '2015-01-02T00:00:00.000+09:00',
            last_update_user: 'tnemoto',
            profile: {
              full_name: 'M.T',
              sex_name: '男',
              birthday: '1983-10',
              age: 29,
              address: '東京都',
              nearest_station: '総武線 新小岩駅',
              final_education: '筑波大学',
              department: '第三学群情報学類',
              graduation: '2005-03',
              graduation_type: '中退',
              license_list: ['普通自動車第一種免許']
            },
            skill_list: [
              {
                work_from: '2005-01',
                work_to: '2006-06',
                system_name: 'ホームページ管理担当',
                step_list: ['製造', '単体テスト'],
                position_list: ['PG'],
                scale_name: '数名',
                environment_list: ['Linux'],
                middleware_list: ['*******'],
                language_list: ['HTML', 'JavaScript'],
                other_list: ['********']
              },
              {
                work_from: '2006-07',
                work_to: '2007-10',
                system_name: '賃貸斡旋支援システム',
                step_list: [
                  '基本設計',
                  '詳細設計',
                  '製造',
                  '単体テスト',
                  '結合テスト',
                  '総合テスト'
                ],
                position_list: ['SE', 'PG'],
                scale_name: '数名',
                environment_list: ['Windows2003'],
                middleware_list: ['Oracle10g', 'ColdFusion'],
                language_list: ['CFML', 'HTML', 'JavaScript', 'C++'],
                other_list: ['VisualStudio', 'Eclipse', 'Subversion']
              }
            ]
          }
        }
      }
    }
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
  }
}
</script>


<style scoped>
.container {
  width: 80rem;
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
