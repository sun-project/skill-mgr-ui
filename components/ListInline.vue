<template>
  <ul class="list-inline">
    <li v-for="(item, i) in items" :key="keyOf(item, i)">
      <slot name="item" :item="item" :index="i">
        {{ item }}
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return []
      },
    },
    itemKey: {
      type: [String, Function],
      default: '',
    },
  },

  methods: {
    keyOf(item, index) {
      if (!this.itemKey) {
        return String(index)
      }
      if (typeof this.itemKey === 'function') {
        return String(this.itemKey(item))
      }
      return item[this.itemKey]
    },
  },
}
</script>

<style scoped>
.list-inline {
  margin: 0;
  padding: 0;
}

.list-inline li {
  display: inline-block;
  margin-right: 0.25rem;
  white-space: nowrap;
}
.list-inline li:not(:last-child)::after {
  content: ',';
  margin-left: -4px;
}
</style>
