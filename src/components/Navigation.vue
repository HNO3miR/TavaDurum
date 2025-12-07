<template>
  <div class="nav-wrapper">
    <nav class="navigation" :class="variant">
      <a 
        v-for="item in menuItems" 
        :key="item.id"
        :href="'#' + item.id" 
        class="nav-button"
        @click.prevent="scrollToSection(item.id)"
      >
        {{ item.name }}
      </a>
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
        { name: 'ANASAYFA', id: 'home' },
        { name: 'MİSYON & VİZYON', id: 'misyon' },
        { name: 'HAKKIMIZDA', id: 'hakkimizda' },
        { name: 'MENÜMÜZ', id: 'menumuz' },
        { name: 'İNSAN KAYNAKLARI', id: 'ik' },
        { name: 'İLETİŞİM', id: 'iletisim' },
        { name: 'ORTAKLIK', id: 'ortaklik' }
      ]
    }
  },
  methods: {
    scrollToSection(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style scoped>
.navigation {
  display: flex;
  gap: 0.8rem; /* Butonların arasını biraz açtım, daha ferah dursun */
  flex-wrap: nowrap;
  justify-content: flex-end; /* Sağa yaslı */
  padding: 0;
  overflow-x: auto;
}

.nav-button {
  /* --- RENK DEĞİŞİMİ BURADA YAPILDI --- */
  background: var(--brand-green); /* Sarı yerine senin Fıstık Yeşili */
  color: #fff;                    /* Yazılar Beyaz */
  
  padding: 0.6rem 1.2rem;         /* Biraz daha kibar boyutlar */
  text-decoration: none;
  font-weight: 700;               /* Yazı kalınlığı */
  font-size: 0.85rem;
  border-radius: 30px;            /* Köşeleri yuvarlattık (hap gibi dursun) */
  transition: all 0.3s ease;
  border: 2px solid transparent;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05); /* Hafif gölge */
}

/* Üzerine gelince (Hover) efekti */
.nav-button:hover {
  background: var(--primary-green); /* Koyu yeşile dönsün (Logodaki koyu yeşil) */
  color: #fff;
  transform: translateY(-2px);      /* Hafif yukarı zıplama */
  box-shadow: 0 6px 12px rgba(46, 74, 28, 0.2);
}

/* Navigasyon Wrapper */
.nav-wrapper {
  width: 100%;
}

/* Divider'a gerek kalmadı, sildim veya gizledim */
.nav-divider {
  display: none;
}
</style>

