<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <Logo />
      <p class="slogan">Sac Tava'nın Dürüm Hali</p>
    </div>

    <div class="sidebar-content">
      <h3 class="decor-text">DİYARBAKIR<br>USULÜ</h3>
      <h1 class="main-text">TAVA<br>DÜRÜM</h1>
    </div>

    <div class="sidebar-footer">
      <p class="copyright">© 2025 Tava Dürüm</p>
    </div>
  </aside>
</template>

<script>
import Logo from './Logo.vue'

export default {
  name: 'Sidebar',
  components: {
    Logo
  }
}
</script>

<style scoped>
/* src/components/Sidebar.vue içindeki style */
.sidebar {
  background-color: var(--brand-green);
  width: 300px;
  
  /* ESKİ KOD:
  height: 100vh;
  top: 0;
  */
  
  /* YENİ KOD: Navbar yüksekliği kadar (80px) boşluk bırak */
  position: fixed;
  left: 0;
  top: 80px; /* Navbar'ın altından başlasın */
  height: calc(100vh - 80px); /* Ekran boyu eksi navbar boyu */
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  z-index: 100;
  color: #fff;
  box-shadow: 4px 0 10px rgba(0,0,0,0.1);
}

.sidebar-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.slogan {
  font-family: 'Brush Script MT', cursive;
  font-size: 1.2rem;
  margin-top: 1rem;
  opacity: 0.9;
}

.sidebar-content {
  text-align: center;
  opacity: 0.2; /* Arka planda hafif görünsün diye */
}

.decor-text {
  font-size: 1.5rem;
  font-weight: normal;
  letter-spacing: 2px;
}

.main-text {
  font-size: 3rem;
  font-weight: 900;
  line-height: 1;
}

.sidebar-footer {
  font-size: 0.8rem;
  opacity: 0.7;
}

/* MOBİL İÇİN GİZLEME (Mobilde sidebar genelde hamburger menü olur) */
@media (max-width: 900px) {
  .sidebar {
    display: none; /* Şimdilik mobilde gizliyoruz, ilerde hamburger menü yaparız */
  }
}
</style>