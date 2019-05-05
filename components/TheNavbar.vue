<template>
  <nav
    class="navbar has-background-light"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <nuxt-link
        class="navbar-item"
        to="/"
      >
        SkillMgr - 経歴管理
      </nuxt-link>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar-menu"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div
      id="navbar-menu"
      class="navbar-menu"
    >
      <div
        v-if="user"
        class="navbar-end"
      >
        <b-dropdown
          position="is-bottom-left"
          aria-role="menu"
          hoverable
        >
          <a
            slot="trigger"
            class="navbar-item"
            role="button"
          >
            <b-icon icon="account" />
            {{ user.name }}
            <b-icon icon="menu-down" />
          </a>
          <b-dropdown-item
            value="logout"
            aria-role="menuitem"
            @click="$emit('logout')"
          >
            <b-icon
              icon="logout"
              size="is-small"
            />
            ログアウト
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: null
    }
  }
}
</script>
