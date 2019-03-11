<template>
  <div class="container">
    <h1 class="page-title">
      スキルシート <small>最新</small>
    </h1>
    <a-card>
      <div class="profile">
        <a-row>
          <a-col
            class="table-cell is-header"
            :md="3"
          >
            氏名
          </a-col>
          <a-col
            class="table-cell"
            :md="9"
          >
            {{ profile.full_name }}
          </a-col>
          <a-col
            class="table-cell is-header"
            :md="2"
          >
            性別
          </a-col>
          <a-col
            class="table-cell"
            :md="2"
          >
            {{ profile.sex_name }}
          </a-col>
          <a-col
            class="table-cell is-header"
            :md="3"
          >
            生年月
          </a-col>
          <a-col
            class="table-cell"
            :md="3"
          >
            {{ profile.birthday }}
            <!-- TODO: format -->
          </a-col>
          <a-col
            class="table-cell"
            :md="2"
          >
            {{ profile.age }}歳
          </a-col>
        </a-row>
        <a-row>
          <a-col
            class="table-cell is-header"
            :md="3"
          >
            住所
          </a-col>
          <a-col
            class="table-cell"
            :md="21"
          >
            {{ profile.address }}
          </a-col>
        </a-row>
        <a-row>
          <a-col
            class="table-cell is-header"
            :md="3"
          >
            最寄り駅
          </a-col>
          <a-col
            class="table-cell"
            :md="21"
          >
            {{ profile.nearest_station }}
          </a-col>
        </a-row>
        <a-row>
          <a-col
            class="table-cell is-header"
            :md="3"
          >
            最終学歴
          </a-col>
          <a-col
            class="table-cell"
            :md="9"
          >
            {{ profile.final_education }}
          </a-col>
          <a-col
            class="table-cell is-header"
            :md="3"
          >
            学部・学科
          </a-col>
          <a-col
            class="table-cell"
            :md="9"
          >
            {{ profile.department }}
          </a-col>
        </a-row>
        <a-row>
          <a-col
            class="table-cell is-header"
            :md="3"
          >
            卒業年月
          </a-col>
          <a-col
            class="table-cell"
            :md="21"
          >
            {{ profile.graduation }}
            <!-- TODO: format -->
          </a-col>
        </a-row>
        <a-row>
          <a-col
            class="table-cell is-header"
            :md="3"
          >
            免許・資格
          </a-col>
          <a-col
            class="table-cell"
            :md="21"
          >
            <ul class="list-inline">
              <li
                v-for="(text, i) in profile.license_list"
                :key="i"
              >
                {{ text }}
              </li>
            </ul>
          </a-col>
        </a-row>
      </div>
      <a-table
        :data-source="skillRecords"
        bordered
      >
        <a-table-column
          title="作業期間"
          data-index="work_range"
        >
          <template slot-scope="range">
            <!-- TODO: format -->
            <span>{{ range.from }}</span>
            <span>〜</span>
            <span>{{ range.to }}</span>
          </template>
        </a-table-column>
        <a-table-column
          title="システム概要"
          data-index="system_name"
        />
        <a-table-column
          title="工程"
          data-index="step_list"
        >
          <template slot-scope="list">
            <ul class="list-inline">
              <li
                v-for="(text, i) in list"
                :key="i"
              >
                {{ text }}
              </li>
            </ul>
          </template>
        </a-table-column>
        <a-table-column
          title="作業形態"
          data-index="position_list"
        >
          <template slot-scope="list">
            <ul class="list-inline">
              <li
                v-for="(text, i) in list"
                :key="i"
              >
                {{ text }}
              </li>
            </ul>
          </template>
        </a-table-column>
        <a-table-column
          title="体制/規模"
          data-index="scale_name"
        />
        <a-table-column
          title="動作環境"
          data-index="environment_list"
        >
          <template slot-scope="list">
            <ul class="list-inline">
              <li
                v-for="(text, i) in list"
                :key="i"
              >
                {{ text }}
              </li>
            </ul>
          </template>
        </a-table-column>
        <a-table-column
          title="DB/ミドルウェア"
          data-index="middleware_list"
        >
          <template slot-scope="list">
            <ul class="list-inline">
              <li
                v-for="(text, i) in list"
                :key="i"
              >
                {{ text }}
              </li>
            </ul>
          </template>
        </a-table-column>
        <a-table-column
          title="言語"
          data-index="language_list"
        >
          <template slot-scope="list">
            <ul class="list-inline">
              <li
                v-for="(text, i) in list"
                :key="i"
              >
                {{ text }}
              </li>
            </ul>
          </template>
        </a-table-column>
        <a-table-column
          title="ツール/フレームワーク"
          data-index="other_list"
        >
          <template slot-scope="list">
            <ul class="list-inline">
              <li
                v-for="(text, i) in list"
                :key="i"
              >
                {{ text }}
              </li>
            </ul>
          </template>
        </a-table-column>
      </a-table>
    </a-card>
  </div>
</template>

<script>
export default {
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
      return this.response.response.skill_sheet.profile
    },

    skillRecords() {
      return this.response.response.skill_sheet.skill_list.map(
        (skill, index) => ({
          key: index,
          work_range: {
            from: skill.work_from,
            to: skill.work_to
          },
          ...skill
        })
      )
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

.table-cell {
  padding: 0.5rem;
  border: 1px solid #ccc;
}

.table-cell.is-header {
}

.list-inline {
  margin: 0;
  padding: 0;
}

.list-inline li {
  display: inline-block;
  margin-right: 0.25rem;
}

.is-nowrap {
  white-space: nowrap;
}
</style>
