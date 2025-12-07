<template>
  <div class="app-wrapper">
    
    <header class="main-header" :class="{ 'header-hidden': isHidden }">
      
      <div class="logo-badge">
         <Logo />
      </div>

      <div class="nav-area">
        <Navigation variant="green-pill" />
      </div>

    </header>

    <div class="main-body">
      <main class="content-area">
        <slot />
      </main>
      <Footer />
    </div>

  </div>
</template>

<script>
import Navigation from './Navigation.vue'
import Footer from './Footer.vue'
import Logo from './Logo.vue'

export default {
  name: 'MainLayout',
  components: {
    Navigation,
    Footer,
    Logo
  },
  data() {
    return {
      isHidden: false,      // Menü gizli mi?
      lastScrollPosition: 0 // Son kaydırma konumu
    }
  },
  mounted() {
    // Sayfa açılınca kaydırmayı dinlemeye başla
    window.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount() {
    // Sayfa kapanınca dinlemeyi bırak (performans için)
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      // Mevcut kaydırma pozisyonunu al
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      
      // Eğer negatifse (örneğin iOS'ta yaylanma efekti) işlem yapma
      if (currentScrollPosition < 0) {
        return
      }

      // AKILLI MENÜ MANTIĞI:
      // 1. Eğer aşağı kaydırıyorsak (current > last) VE 60px'den fazla indiysek -> GİZLE
      // 2. Eğer yukarı çıkıyorsak (current < last) -> GÖSTER
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      
      this.isHidden = currentScrollPosition > this.lastScrollPosition
      
      // Son pozisyonu güncelle
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* --- ANA HEADER AYARLARI --- */
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px; 
  background-color: var(--white);
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  z-index: 1000;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  /* Sağdan boşluk (Butonları biraz sola almıştık) */
  padding-right: 6rem; 
  box-sizing: border-box;

  /* --- YENİ EKLENEN ANİMASYON --- */
  transition: transform 0.4s ease-in-out; /* Yumuşak geçiş */
}

/* --- GİZLENME EFEKTİ --- */
.header-hidden {
  /* Menüyü kendi boyu kadar yukarı iterek ekrandan çıkarır */
  transform: translateY(-100%); 
}

/* LOGO ROZETİ */
.logo-badge {
  background-color: var(--brand-green);
  height: 100%; 
  display: flex;
  align-items: center;
  padding: 0 30px; 
  border-bottom-right-radius: 30px; 
}

/* Navigasyon Alanı */
.nav-area {
  /* Hizalama */
}

/* --- İÇERİK GÖVDESİ --- */
.main-body {
  margin-top: 90px; 
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
}

.content-area {
  flex: 1;
  width: 100%; 
}

/* MOBİL UYUMLULUK */
@media (max-width: 900px) {
  .main-header {
    height: auto;
    flex-direction: column;
    padding: 0;
  }

  .logo-badge {
    width: 100%;
    justify-content: center;
    border-radius: 0;
    padding: 10px;
  }

  .nav-area {
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .main-body {
    margin-top: 180px;
  }
}
</style>