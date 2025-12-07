<template>
  <div class="home-content">
    
    <div class="hero-section">
      <div class="hero-text">
        <h1 class="main-title">
          PÜRE YATAĞINDA<br>
          <span class="highlight">DİYARBAKIR USULÜ</span><br>
          <span class="green-text">TAVA DÜRÜM</span>
        </h1>
        <p class="description">
          Asırlardır; Mezopotamya'nın köylerinde yapılan lezzetlerin izini sürdük, 
          <strong>TAVA DÜRÜM</strong>'ü üretip beğeninize sunduk.
        </p>
        <button class="cta-button">DAHA FAZLA BİLGİ</button>
      </div>

      <div class="hero-image">
         <img :src="tavaImg" alt="Sac Tava" class="pan-image" />
      </div>
    </div>

    <div class="bottom-section">
      <div class="handwriting-area">
        <p>Bildiğin Sac Tava'nın Dürüm Hali</p>
      </div>
      <div class="wraps-area">
         <img :src="wrapsImg" alt="Dürüm Çeşitleri" class="wraps-image" />
      </div>
    </div>

  </div>
</template>

<script>
// Navigation importunu sildik
import tavaImg from '@/assets/images/tava.png'
import altGorselImg from '@/assets/images/alt-gorsel.png'

export default {
  name: 'Home',
  data() {
    return {
      tavaImg: tavaImg,
      wrapsImg: altGorselImg
    }
  }
}
</script>

<style scoped>
.home-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* HERO BÖLÜMÜ (Yazı ve Tava) */
.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem 0;
}

.hero-text {
  flex: 1;
}

.main-title {
  font-size: 3rem;
  line-height: 1.1;
  color: #333;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.highlight {
  color: var(--brand-green); /* Fıstık yeşili */
}

.green-text {
  color: var(--primary-green); /* Koyu yeşil */
  font-size: 3.5rem;
}

.description {
  color: #555;
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 90%;
  margin-bottom: 2rem;
}

.cta-button {
  background-color: var(--brand-green);
  color: #fff;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 4px 10px rgba(186, 211, 25, 0.4);
}

.cta-button:hover {
  transform: translateY(-3px);
  background-color: var(--primary-green);
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.pan-image {
  max-width: 100%;
  height: auto;
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.15));
}

/* ALT BÖLÜM */
.bottom-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.handwriting-area p {
  font-family: 'Brush Script MT', cursive;
  font-size: 3rem;
  color: #4a4a4a;
  text-align: center;
  margin: 1rem 0;
  transform: rotate(-2deg);
}

.wraps-image {
  max-width: 100%;
  height: auto;
  max-height: 350px;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .hero-section {
    flex-direction: column-reverse; /* Mobilde görsel üste gelsin */
    text-align: center;
  }
  
  .description {
    margin: 0 auto 2rem auto;
  }
  
  .main-title {
    font-size: 2rem;
  }
  
  .green-text {
    font-size: 2.5rem;
  }
}
</style>