<template>
  <base-container size="sm">
    <base-element>
      <base-heading align="center">
        Callback
      </base-heading>
    </base-element>
    <base-element>
      <a-card>
        <p>Message: {{ message }}</p>
      </a-card>
    </base-element>
  </base-container>
</template>

<script>
import BaseContainer from '@/components/BaseContainer.vue'
import BaseElement from '@/components/BaseElement.vue'
import BaseHeading from '@/components/BaseHeading.vue'

export default {
  auth: false,

  components: {
    BaseContainer,
    BaseElement,
    BaseHeading
  },

  computed: {
    message() {
      return '...'
    }
  }
}
</script>
