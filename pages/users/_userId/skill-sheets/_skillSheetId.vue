<template>
  <div class="container">
    <h1>スキルシート <small>最新</small></h1>
    <a-card>
      <p>氏名</p>
      <p>性別</p>
      <p>生年月日</p>
      <p>住所</p>
      <p>最寄り駅</p>
      <p>最終学歴</p>
      <p>学部・学科</p>
      <p>卒業年月</p>
      <p>免許・資格</p>
      <h2>技術経歴</h2>
      <table>
        <thead>
          <tr>
            <th>作業期間</th>
            <th>システム名</th>
            <th>業務内容</th>
            <th>工程</th>
            <th>OS</th>
            <th>DB・ツール等</th>
            <th>言語等</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="i in 9"
            :key="i"
          >
            <td>dummy</td>
            <td>dummy</td>
            <td>dummy</td>
            <td>dummy</td>
            <td>dummy</td>
            <td>dummy</td>
            <td>dummy</td>
          </tr>
        </tbody>
      </table>
    </a-card>
  </div>
</template>

<style scoped>
.container {
  width: 60rem;
  margin: 3rem auto;
}
</style>
