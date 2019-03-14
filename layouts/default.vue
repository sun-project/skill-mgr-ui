<template>
  <a-layout class="layout-default">
    <a-layout-header>
      <a-row
        justify="space-between"
        type="flex"
      >
        <a-col>
          SkillMgr - 経歴管理
        </a-col>
        <a-col v-if="$route.params.userId">
          <a-dropdown placement="bottomRight">
            <a-menu slot="overlay">
              <a-menu-item>
                <nuxt-link to="/">
                  ログアウト
                </nuxt-link>
              </a-menu-item>
            </a-menu>
            <div style="cursor: pointer;">
              <a-avatar
                icon="user"
                size="small"
              />
              {{ $route.params.userId }}
              <a-icon type="down" />
            </div>
          </a-dropdown>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content>
      <nuxt />
    </a-layout-content>
  </a-layout>
</template>

<style>
@font-face {
  font-family: 'Yu Gothic M';
  src: local('Yu Gothic Medium');
}
@font-face {
  font-family: 'Yu Gothic M';
  src: local('Yu Gothic Bold');
  font-weight: bold;
}

* {
  font-family: -apple-system, BlinkMacSystemFont, '游ゴシック体', YuGothic,
    'Yu Gothic M', '游ゴシック Medium', 'Yu Gothic Medium',
    'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN W3', HiraKakuProN-W3,
    'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ Pro',
    'Hiragino Kaku Gothic Pro', 'メイリオ', Meiryo, Osaka, 'ＭＳ Ｐゴシック',
    'MS PGothic', 'Helvetica Neue', HelveticaNeue, Helvetica, Arial, 'Segoe UI',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji' !important;
}
</style>

<style scoped>
.layout-default {
  min-height: 100vh;
}
.layout-default .ant-layout-header {
  color: #fff;
}
.layout-default .ant-layout-content {
  height: 100%;
}
</style>
