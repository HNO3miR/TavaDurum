<template>
  <div class="nav-wrapper">
    <nav class="navigation" :class="variant">
      <router-link 
        v-for="item in menuItems" 
        :key="item.path"
        :to="item.path" 
        class="nav-button"
        :class="{ active: $route.path === item.path }"
      >
        {{ item.name }}
      </router-link>
    </nav>
    <div class="nav-divider"></div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    variant: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {
      menuItems: [
        { name: 'ANASAYFA', path: '/' },
        { name: 'MİSYON & VİZYON', path: '/misyon-vizyon' },
        { name: 'HAKKIMIZDA', path: '/hakkimizda' },
        { name: 'MENÜMÜZ', path: '/menumuz' },
        { name: 'İNSAN KAYNAKLARI', path: '/insan-kaynaklari' },
        { name: 'İLETİŞİM', path: '/iletisim' },
        { name: 'ORTAKLIK', path: '/ortaklik' }
      ]
    }
  }
}
</script>

<style scoped>
.navigation {
  display: flex;
  gap: 0.5rem;
  flex-wrap: nowrap;
  justify-content: flex-start;
  padding: 0;
  overflow-x: auto;
}

.nav-button {
  background: var(--yellow);
  color: var(--text-dark);
  padding: 0.75rem 1.2rem;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.75rem;
  border-radius: 4px;
  transition: all 0.3s;
  border: 2px solid transparent;
  white-space: nowrap;
  min-width: fit-content;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-button:hover {
  background: #ffed4e;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.nav-button.active {
  background: var(--primary-green);
  color: var(--white);
  border-color: var(--light-green);
}

/* Sarı arka plan varyantı (Menümüz sayfası için) */
.navigation.yellow-bg .nav-button {
  background: rgba(255, 255, 255, 0.9);
  color: var(--primary-green);
  border: 1px solid var(--primary-green);
}

.navigation.yellow-bg .nav-button.active {
  background: var(--yellow);
  color: var(--primary-green);
  border-color: var(--primary-green);
}

/* Beyaz arka plan varyantı (İnsan Kaynakları için) */
.navigation.white-bg .nav-button {
  background: var(--white);
  color: var(--primary-green);
  border: 1px solid var(--yellow);
}

.navigation.white-bg .nav-button.active {
  background: var(--yellow);
  color: var(--white);
}

/* Sarı-turuncu arka plan varyantı (İletişim için) */
.navigation.orange-bg .nav-button {
  background: rgba(255, 255, 255, 0.9);
  color: var(--text-dark);
  border: 1px solid var(--text-dark);
}

.navigation.orange-bg .nav-button.active {
  background: var(--primary-green);
  color: var(--white);
  border-color: var(--primary-green);
}

.nav-wrapper {
  width: 100%;
}

.nav-divider {
  width: 100%;
  height: 3px;
  background: var(--primary-green);
  margin-top: 0.5rem;
}
</style>

