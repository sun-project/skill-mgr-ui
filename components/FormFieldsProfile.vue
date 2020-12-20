<template>
  <div>
    <b-field label="氏名" :horizontal="horizontal">
      <b-input v-model="values.fullName" type="text" />
    </b-field>
    <b-field label="性別" :horizontal="horizontal">
      <div>
        <b-radio v-model="values.sex" native-value="男"> 男 </b-radio>
        <b-radio v-model="values.sex" native-value="女"> 女 </b-radio>
      </div>
    </b-field>
    <b-field label="生年月" :horizontal="horizontal">
      <b-input v-model="values.birthday" type="text" />
    </b-field>
    <b-field label="年齢" :horizontal="horizontal">
      <b-input v-model="values.age" type="number" />
    </b-field>
    <b-field label="住所" :horizontal="horizontal">
      <b-input v-model="values.address" type="text" />
    </b-field>
    <b-field label="最寄り駅" :horizontal="horizontal">
      <b-input v-model="values.nearestStation" type="text" />
    </b-field>
    <b-field label="最終学歴" :horizontal="horizontal">
      <b-input v-model="values.finalEducation" type="text" />
    </b-field>
    <b-field label="学部・学科" :horizontal="horizontal">
      <b-input v-model="values.department" type="text" />
    </b-field>
    <b-field label="卒業年月" :horizontal="horizontal">
      <b-input v-model="values.graduation" type="text" />
    </b-field>
    <b-field label="卒業区分" :horizontal="horizontal">
      <div>
        <b-radio v-model="values.graduationType" native-value="卒業">
          卒業
        </b-radio>
        <b-radio v-model="values.graduationType" native-value="中退">
          中退
        </b-radio>
      </div>
    </b-field>
    <b-field label="免許・資格" :horizontal="horizontal">
      <b-taginput v-model="values.licenses" />
    </b-field>
  </div>
</template>

<script>
export default {
  props: {
    horizontal: {
      type: Boolean,
      default: false,
    },

    initialValues: {
      type: Object,
      default() {
        return {
          fullName: '',
          sex: '',
          birthday: '',
          age: '',
          address: '',
          nearestStation: '',
          finalEducation: '',
          department: '',
          graduation: '',
          graduationType: '',
          licenses: [],
        }
      },
    },
  },

  data() {
    return {
      values: {
        ...this.initialValues,
        licenses: [...this.initialValues.licenses],
      },
    }
  },

  watch: {
    values: {
      deep: true,
      handler(newValues) {
        this.$emit('change', {
          ...newValues,
          licenses: [...newValues.licenses],
        })
      },
    },
  },
}
</script>
