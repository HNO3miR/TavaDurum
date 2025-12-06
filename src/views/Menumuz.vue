<template>
  <div class="menumuz-page">
    
    <div class="header-section">
      <div class="logo-area">
        <div class="logo-circle">
          <img src="/logo.png" alt="TD Logo" />
        </div>
        <p class="slogan">Sac Tava'nın Dürüm Hali</p>
      </div>
      
      <div class="nav-area">
        <Navigation variant="white-pill" />
      </div>
    </div>

    <div class="menu-content">
      <h1 class="page-title">MENÜMÜZ</h1>

      <div class="menu-grid">
        
        <div class="menu-card">
          <div class="image-box">
             <img src="/lavas.png" class="product-img" alt="Lavaş Dürüm" />
          </div>
          <h3>Lavaş Dürüm</h3>
        </div>

        <div class="menu-card">
          <div class="image-box">
            <img src="/bohca.png" class="product-img" alt="Bohça Dürüm" />
          </div>
          <h3>Bohça Dürüm</h3>
        </div>

        <div class="menu-card">
          <div class="image-box">
            <img src="/baston.png" class="product-img" alt="Baston Dürüm" />
          </div>
          <h3>Baston Dürüm</h3>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
  name: 'Menumuz',
  components: {
    Navigation
  }
}
</script>

<style scoped>
/* SAYFA YAPISI */
.menumuz-page {
  background-color: #FFC20E; /* Sarı Zemin */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Segoe UI', sans-serif;
}

/* HEADER */
.header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.logo-circle {
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.logo-circle img {
  width: 80px;
}

.slogan {
  font-family: 'Brush Script MT', cursive;
  margin-top: 5px;
  color: #333;
  text-align: center;
}

/* İÇERİK */
.menu-content {
  text-align: center;
  padding: 2rem;
}

.page-title {
  font-size: 3.5rem;
  color: #2e4a1c; /* Koyu Yeşil */
  font-weight: 900;
  margin-bottom: 3rem;
  letter-spacing: 1px;
}

.menu-grid {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

/* KARTLAR */
.menu-card {
  background: white;
  border-radius: 20px;
  width: 300px;
  padding: 1rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.menu-card:hover {
  transform: translateY(-5px);
}

.image-box {
  height: 200px;
  /* Resim taşmasın ama tam görünsün diye ayar */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 10px; /* Kenarlardan biraz boşluk */
}

.menu-card h3 {
  color: #2e4a1c;
  font-size: 1.5rem;
  font-weight: bold;
}

/* YENİ RESİM AYARLARI (SADE VE TEMİZ) */
.product-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Resmi kesmeden kutuya sığdırır */
  display: block;
  /* Eğer resimlerin arkası şeffaf değilse (beyazsa) sorun olmaz.
     Şeffaf ise çok daha şık durur. */
}

/* MOBİL */
@media (max-width: 768px) {
  .header-section { flex-direction: column; gap: 1rem; }
  .page-title { font-size: 2.5rem; }
}
</style>
