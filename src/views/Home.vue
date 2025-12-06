<template>
  <div class="home-container">
    
    <div class="left-section">
      <div class="logo-area">
        <div class="logo-circle">
          <img src="/logo.png" alt="TD Logo" class="main-logo" />
        </div>
        <p class="logo-slogan">Sac Tava'nın Dürüm Hali</p>
      </div>

      <div class="left-content">
        

        <h1 class="main-title">
          PÜRE YATAĞINDA<br>
          <span class="highlight">DİYARBAKIR USULÜ</span><br>
          <span class="white-text">TAVA DÜRÜM</span>
        </h1>

        <p class="description">
          Asırlardır; Mezopotamya'nın köylerinde yapılan lezzetlerin izini sürdük, 
          <strong>TAVA DÜRÜM</strong>'ü üretip beğeninize sunduk.
        </p>

        <button class="cta-button">DAHA FAZLA BİLGİ</button>
      </div>
    </div>

    <div class="right-section">
      <div class="nav-container">
        <Navigation variant="green-pill" />
      </div>

      <div class="top-image-area">
         <img src="/tava.png" alt="Sac Tava" class="pan-image" />
      </div>

      <div class="handwriting-area">
        <p>Bildiğin Sac Tava'nın Dürüm Hali</p>
      </div>

      <div class="bottom-image-area">
         <img src="/alt-gorsel.png" alt="Dürüm Çeşitleri" class="wraps-image" />
      </div>
    </div>

  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
  name: 'Home',
  components: {
    Navigation
  }
}
</script>

<style scoped>
/* GENEL DÜZEN */
.home-container {
  display: flex;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

/* --- SOL TARA (YEŞİL) --- */
.left-section {
  flex: 1;
  background-color: #bad319ff; /* Görseldeki fıstık yeşili */
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.logo-area {
  display: flex;
  flex-direction: column;
  align-items: center; /* Logoyu sola yaslamak istersen 'flex-start' yap */
  margin-bottom: 2rem;
}

.main-logo {
  width: 180px; /* Logo boyutu */
  height: auto;
}

.logo-slogan {
  font-family: 'Brush Script MT', cursive;
  font-size: 1.5rem;
  color: #555;
  margin-top: 0.5rem;
}

/* Home.vue dosyasının <style> kısmında */

.left-content {
  display: flex;
  flex-direction: column;
  
  /* ESKİ KOD: justify-content: center; idi (Siliyoruz) */
  /* YENİ KOD: İçeriği dikeyde ortalar ve yayar */
  justify-content: center; 
  align-items: flex-start; /* Yazıları sola yaslar */
  
  flex: 1;
  z-index: 2;
  padding-top: 2rem; /* Logoyla arasına biraz daha boşluk ekledik */
}

/* Eğer .potato-image-wrapper ve .potato-image stilleri duruyorsa onları da silebilirsin, artık ihtiyaç yok. */

.potato-image-wrapper {
  margin-bottom: 1rem;
}
.potato-image {
  max-width: 250px; /* Patates boyutu */
  height: auto;
  display: block;
}

.main-title {
  font-size: 2.5rem;
  line-height: 1.1;
  color: #2e4a1c; /* Koyu yeşil yazı */
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.main-title .white-text {
  color: #fff;
  font-size: 3rem;
}

.description {
  color: #333;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 80%;
  margin-bottom: 2rem;
}

.cta-button {
  background-color: #f0f0f0;
  color: #2e4a1c;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 30px; /* Oval buton */
  cursor: pointer;
  width: fit-content;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.cta-button:hover {
  transform: scale(1.05);
}

/* --- SAĞ TARAF (BEYAZ) --- */
.right-section {
  flex: 1;
  background-color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-container {
  width: 100%;
  display: flex;
  justify-content: flex-end; /* Menüyü sağa yasla */
  margin-bottom: 2rem;
}

.top-image-area {
  margin-bottom: 1rem;
}

.pan-image {
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
}

.handwriting-area p {
  font-family: 'Brush Script MT', cursive; /* El yazısı fontu */
  font-size: 2.5rem;
  color: #4a4a4a;
  text-align: center;
  margin: 1rem 0;
}

.bottom-image-area {
  flex: 1;
  display: flex;
  align-items: flex-end;
}

.wraps-image {
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
}

/* RESPONSIVE (MOBİL İÇİN) */
@media (max-width: 900px) {
  .home-container {
    flex-direction: column;
  }
  .left-section {
    padding: 2rem;
    align-items: center;
    text-align: center;
  }
  .main-title {
    font-size: 2rem;
  }
  .nav-container {
    justify-content: center;
  }
}
</style>
