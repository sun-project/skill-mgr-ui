<template>
  <b-table :data="skills" bordered paginated>
    <template slot-scope="props">
      <b-table-column label="作業期間" field="workRange">
        <span class="nowrap">{{
          props.row.workRange.from | formatYearMonth
        }}</span>
        <br />
        <span class="nowrap"
          >〜{{ props.row.workRange.to | formatYearMonth }}</span
        >
      </b-table-column>
      <b-table-column label="システム概要" field="systemName">
        {{ props.row.systemName }}
      </b-table-column>
      <b-table-column label="工程" field="steps">
        <list-inline :items="props.row.steps" />
      </b-table-column>
      <b-table-column label="作業形態" field="positions">
        <list-inline :items="props.row.positions" />
      </b-table-column>
      <b-table-column label="体制/規模" field="scale">
        {{ props.row.scale }}
      </b-table-column>
      <b-table-column label="動作環境" field="environments">
        <list-inline :items="props.row.environments" />
      </b-table-column>
      <b-table-column label="DB/MW" field="middlewares">
        <list-inline :items="props.row.middlewares" />
      </b-table-column>
      <b-table-column label="言語" field="languages">
        <list-inline :items="props.row.languages" />
      </b-table-column>
      <b-table-column label="ツール/FW" field="others">
        <list-inline :items="props.row.others" />
      </b-table-column>
    </template>
  </b-table>
</template>

<script>
import ListInline from '@/components/ListInline.vue'
import { formatYearMonth } from '@/filters'

export default {
  components: {
    ListInline
  },

  filters: {
    formatYearMonth
  },

  props: {
    skills: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.nowrap {
  white-space: nowrap;
}
</style>
