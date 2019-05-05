<template>
  <table class="table is-bordered is-fullwidth">
    <tbody>
      <tr>
        <th>
          氏名
        </th>
        <td>
          {{ fullName }}
        </td>
        <th>
          性別
        </th>
        <td>
          {{ sex }}
        </td>
        <th>
          生年月
        </th>
        <td>
          {{ birthday | formatYearMonth }}
        </td>
        <td>
          {{ age | formatAge }}
        </td>
      </tr>
      <tr>
        <th>
          住所
        </th>
        <td>
          {{ address }}
        </td>
        <th>
          最寄り駅
        </th>
        <td colspan="4">
          {{ nearestStation }}
        </td>
      </tr>
      <tr>
        <th>
          最終学歴
        </th>
        <td>
          {{ finalEducation }}
        </td>
        <th>
          学部・学科
        </th>
        <td colspan="4">
          {{ department }}
        </td>
      </tr>
      <tr>
        <th>
          卒業年月
        </th>
        <td>
          {{ graduation | formatYearMonth }}
          <template v-if="graduationType">
            ({{ graduationType }})
          </template>
        </td>
        <th>
          免許・資格
        </th>
        <td colspan="4">
          <list-inline :items="licenses" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ListInline from '@/components/ListInline.vue'
import { formatAge, formatYearMonth } from '@/filters'

export default {
  components: {
    ListInline
  },

  filters: {
    formatAge,
    formatYearMonth
  },

  props: {
    fullName: {
      type: String,
      default: ''
    },
    sex: {
      type: String,
      default: ''
    },
    birthday: {
      type: String,
      default: '',
      validator(value) {
        return !value || value.match(/^\d{4}-\d{2}$/)
      }
    },
    age: {
      type: Number,
      default: null,
      validator(value) {
        return !value || value >= 0
      }
    },
    address: {
      type: String,
      default: ''
    },
    nearestStation: {
      type: String,
      default: ''
    },
    finalEducation: {
      type: String,
      default: ''
    },
    department: {
      type: String,
      default: ''
    },
    graduation: {
      type: String,
      default: '',
      validator(value) {
        return !value || value.match(/^\d{4}-\d{2}$/)
      }
    },
    graduationType: {
      type: String,
      default: ''
    },
    licenses: {
      type: Array,
      default() {
        return []
      },
      validator(value) {
        return value.every(v => typeof v === 'string')
      }
    }
  }
}
</script>

<style scoped>
.table-cell {
  padding: 0.5rem;
  border: 1px solid #ccc;
}
</style>
