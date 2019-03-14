<template>
  <a-table
    bordered
    :scroll="{ x: true }"
    :data-source="dataSource"
  >
    <a-table-column
      title="作業期間"
      data-index="workRange"
    >
      <template slot-scope="range">
        <span class="nowrap">{{ range.from | formatYearMonth }}</span><br>
        <span class="nowrap">〜{{ range.to | formatYearMonth }}</span>
      </template>
    </a-table-column>
    <a-table-column
      title="システム概要"
      data-index="systemName"
    />
    <a-table-column
      title="工程"
      data-index="steps"
    >
      <template slot-scope="list">
        <list-inline :items="list" />
      </template>
    </a-table-column>
    <a-table-column
      title="作業形態"
      data-index="positions"
    >
      <template slot-scope="list">
        <list-inline :items="list" />
      </template>
    </a-table-column>
    <a-table-column
      title="体制/規模"
      data-index="scale"
    />
    <a-table-column
      title="動作環境"
      data-index="environments"
    >
      <template slot-scope="list">
        <list-inline :items="list" />
      </template>
    </a-table-column>
    <a-table-column
      title="DB/MW"
      data-index="middlewares"
    >
      <template slot-scope="list">
        <list-inline :items="list" />
      </template>
    </a-table-column>
    <a-table-column
      title="言語"
      data-index="languages"
    >
      <template slot-scope="list">
        <list-inline :items="list" />
      </template>
    </a-table-column>
    <a-table-column
      title="ツール/FW"
      data-index="others"
    >
      <template slot-scope="list">
        <list-inline :items="list" />
      </template>
    </a-table-column>
  </a-table>
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
  },

  computed: {
    dataSource() {
      return this.skills.map((skill, i) => ({
        key: i,
        ...skill
      }))
    }
  }
}
</script>

<style>
.ant-table th {
  white-space: nowrap;
}
.ant-table td:nth-child(1) {
  min-width: 8em;
}
.ant-table td:nth-child(2) {
  min-width: 10em;
}
.ant-table td:nth-child(5) {
  min-width: 8em;
}
</style>

<style scoped>
.nowrap {
  white-space: nowrap;
}
</style>
