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
        v-if="$route.params.userId"
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
            {{ $route.params.userId }}
            <b-icon icon="menu-down" />
          </a>
          <b-dropdown-item
            value="logout"
            has-link
            aria-role="menuitem"
          >
            <nuxt-link to="/">
              <b-icon
                icon="logout"
                size="is-small"
              />
              ログアウト
            </nuxt-link>
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </nav>
</template>
