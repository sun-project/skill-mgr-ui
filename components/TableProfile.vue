<template>
  <div>
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
        {{ fullName }}
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
        {{ sex }}
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
        {{ birthday | formatYearMonth }}
      </a-col>
      <a-col
        class="table-cell"
        :md="2"
      >
        {{ age | formatAge }}
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
        {{ address }}
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
        {{ nearestStation }}
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
        {{ finalEducation }}
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
        {{ department }}
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
        {{ graduation | formatYearMonth }}
        <template v-if="graduationType">
          ({{ graduationType }})
        </template>
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
        <list-inline :items="licenses" />
      </a-col>
    </a-row>
  </div>
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
