<template>
  <div class="layout" :class="layoutClass">
    <div class="layout-header" :class="headerClass">
      <div class="header-left">
        <Logo />
        <p class="slogan">Sac Tava'nın Dürüm Hali</p>
      </div>
      <div class="header-right">
        <Navigation :variant="navVariant" />
      </div>
    </div>
    <main class="layout-content" :class="contentClass">
      <slot />
    </main>
  </div>
</template>

<script>
import Logo from './Logo.vue'
import Navigation from './Navigation.vue'

export default {
  name: 'Layout',
  components: {
    Logo,
    Navigation
  },
  props: {
    layoutClass: {
      type: String,
      default: ''
    },
    headerClass: {
      type: String,
      default: ''
    },
    contentClass: {
      type: String,
      default: ''
    },
    navVariant: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style scoped>
.layout {
  min-height: 100vh;
  background: var(--white);
}

.layout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  gap: 2rem;
}

.header-left {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.slogan {
  font-family: 'Brush Script MT', 'Lucida Handwriting', cursive;
  font-size: 1.2rem;
  color: var(--primary-green);
  font-style: italic;
  margin: 0;
  margin-left: 1rem;
}

.header-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.layout-content {
  padding: 2rem 0;
}

/* Varyantlar */
.layout-header.split {
  background: none;
}

.layout-header.split .header-left {
  background: var(--lime-green);
  padding: 1.5rem 2rem;
  border-radius: 0;
}

.layout-header.split .header-right {
  background: var(--yellow);
  padding: 1rem;
  border-radius: 0;
}

@media (max-width: 768px) {
  .layout-header {
    flex-direction: column;
  }
  
  .header-left,
  .header-right {
    width: 100%;
  }
}
</style>

