<script>
export default {
  fetch({ app, redirect }) {
    redirect(`/users/${app.$auth.user.preferred_username}/skill-sheets`)
  }
}
</script>
