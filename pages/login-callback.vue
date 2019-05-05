<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered">
        Callback
      </h1>
      <div class="box">
        <p>Message: {{ message }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  auth: false,

  computed: {
    message() {
      return '...'
    }
  }
}
</script>
