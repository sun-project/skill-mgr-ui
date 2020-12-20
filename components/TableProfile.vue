<template>
  <div class="table-profile">
    <table class="table is-bordered is-fullwidth">
      <tbody>
        <tr>
          <th>氏名</th>
          <td data-label="氏名">
            {{ fullName }}
          </td>
          <th>性別</th>
          <td data-label="性別">
            {{ sex }}
          </td>
          <th data-label="生年月">生年月</th>
          <td data-label="生年月">
            {{ birthday | formatYearMonth }}
          </td>
          <td data-label="年齢">
            {{ age | formatAge }}
          </td>
        </tr>
        <tr>
          <th>住所</th>
          <td data-label="住所">
            {{ address }}
          </td>
          <th>最寄り駅</th>
          <td data-label="最寄駅" colspan="4">
            {{ nearestStation }}
          </td>
        </tr>
        <tr>
          <th>最終学歴</th>
          <td data-label="最終学歴">
            {{ finalEducation }}
          </td>
          <th>学部・学科</th>
          <td data-label="学部・学科" colspan="4">
            {{ department }}
          </td>
        </tr>
        <tr>
          <th>卒業年月</th>
          <td data-label="卒業年月">
            {{ graduation | formatYearMonth }}
            <template v-if="graduationType"> ({{ graduationType }}) </template>
          </td>
          <th>免許・資格</th>
          <td data-label="免許・資格" colspan="4">
            <list-inline :items="licenses" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ListInline from '@/components/ListInline.vue'
import { formatAge, formatYearMonth } from '@/filters'

export default {
  components: {
    ListInline,
  },

  filters: {
    formatAge,
    formatYearMonth,
  },

  props: {
    fullName: {
      type: String,
      default: '',
    },
    sex: {
      type: String,
      default: '',
    },
    birthday: {
      type: String,
      default: '',
      validator(value) {
        return !value || value.match(/^\d{4}-\d{2}$/)
      },
    },
    age: {
      type: Number,
      default: null,
      validator(value) {
        return !value || value >= 0
      },
    },
    address: {
      type: String,
      default: '',
    },
    nearestStation: {
      type: String,
      default: '',
    },
    finalEducation: {
      type: String,
      default: '',
    },
    department: {
      type: String,
      default: '',
    },
    graduation: {
      type: String,
      default: '',
      validator(value) {
        return !value || value.match(/^\d{4}-\d{2}$/)
      },
    },
    graduationType: {
      type: String,
      default: '',
    },
    licenses: {
      type: Array,
      default() {
        return []
      },
      validator(value) {
        return value.every((v) => typeof v === 'string')
      },
    },
  },
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .table-profile {
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    max-width: 100%;
    position: relative;
    display: block;
  }
  .table-profile th {
    display: none;
  }
  .table-profile td::before {
    content: attr(data-label);
    font-weight: 600;
    padding-right: 0.5em;
    text-align: left;
  }
  .table-profile td {
    display: flex;
    width: auto;
    justify-content: space-between;
    text-align: right;
    border: 0;
    border-bottom: 1px solid whitesmoke;
  }
}
</style>
