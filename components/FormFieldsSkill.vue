<template>
  <div>
    <b-field
      label="作業期間"
      :horizontal="horizontal"
    >
      <b-field>
        <b-input
          v-model="values.workRange.from"
          type="text"
        />
        <p class="control">
          <span class="button is-static">〜</span>
        </p>
        <b-input
          v-model="values.workRange.to"
          type="text"
        />
      </b-field>
    </b-field>
    <b-field
      label="システム概要"
      :horizontal="horizontal"
    >
      <b-input
        v-model="values.systemName"
        type="text"
      />
    </b-field>
    <b-field
      label="工程"
      :horizontal="horizontal"
    >
      <b-taginput v-model="values.steps" />
    </b-field>
    <b-field
      label="作業形態"
      :horizontal="horizontal"
    >
      <b-taginput v-model="values.positions" />
    </b-field>
    <b-field
      label="動作環境"
      :horizontal="horizontal"
    >
      <b-taginput v-model="values.environments" />
    </b-field>
    <b-field
      label="DB/MW"
      :horizontal="horizontal"
    >
      <b-taginput v-model="values.middlewares" />
    </b-field>
    <b-field
      label="言語"
      :horizontal="horizontal"
    >
      <b-taginput v-model="values.languages" />
    </b-field>
    <b-field
      label="ツール/FW"
      :horizontal="horizontal"
    >
      <b-taginput v-model="values.others" />
    </b-field>
  </div>
</template>

<script>
export default {
  props: {
    horizontal: {
      type: Boolean,
      default: false
    },

    initialValues: {
      type: Object,
      default() {
        return {
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
        }
      }
    }
  },

  data() {
    return {
      values: {
        ...this.initialValues,
        workRange: { ...this.initialValues.workRange },
        steps: [...this.initialValues.steps],
        positions: [...this.initialValues.positions],
        environments: [...this.initialValues.environments],
        middlewares: [...this.initialValues.middlewares],
        languages: [...this.initialValues.languages],
        others: [...this.initialValues.others]
      }
    }
  },

  watch: {
    values: {
      deep: true,
      handler(newValues) {
        this.$emit('change', {
          ...newValues,
          workRange: { ...newValues.workRange },
          steps: [...newValues.steps],
          positions: [...newValues.positions],
          environments: [...newValues.environments],
          middlewares: [...newValues.middlewares],
          languages: [...newValues.languages],
          others: [...newValues.others]
        })
      }
    }
  }
}
</script>
