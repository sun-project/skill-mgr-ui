<script>
export default {
  fetch({ redirect }) {
    // 無条件でログインに飛ばす
    return redirect('/login')
  }
}
</script>
