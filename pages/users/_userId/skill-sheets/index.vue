<script>
export default {
  fetch({ redirect, route }) {
    redirect(`${route.path}/latest`)
  }
}
</script>
