<template>
  <div class="misyon-vizyon-page">
    <div class="page-layout">
      
      <div class="left-section">
        <div class="logo-area">
          <img src="/logo.png" alt="TD Logo" class="mv-logo" />
          <p class="slogan">Sac Tava'nın Dürüm Hali</p>
        </div>
        
        <div class="left-decor">
          <h3>DİYARBAKIR USULÜ</h3>
          <h1>TAVA DÜRÜM</h1>
        </div>
      </div>
      
      <div class="right-section">
        <div class="nav-area">
          <Navigation variant="green-pill" />
        </div>
        
        <div class="content-area">
          <h1 class="page-title">MİSYON & VİZYON</h1>
          
          <div class="text-wrapper">
            
            <div class="text-block">
              <h2 class="section-title">MİSYONUMUZ</h2>
              <p>
                <strong>TAVA DÜRÜM</strong> olarak, asırlardır Mezopotamya'nın köylerinde yapılan otantik ve benzersiz tatların izini sürüp, 
                günümüzün modern damak zevkine uygun şekilde yeniden yorumlayarak ürettiğimiz dürümleri siz değerli müşterilerimizin beğenisine sunuyoruz.
              </p>
              <p>
                Amacımız; her bir dürüm lokmasında geleneksel lezzetleri koruyarak kaliteli, yöresel, sağlıklı ve unutulmaz bir lezzet deneyimi yaşatmaktır.
                Yöresel üreticilerle işbirliği yaparak Mezopotamya yöresine ait, taze ve doğal malzemeler kullanıyoruz.
              </p>
              <p class="highlight-text">
                TAVA DÜRÜM olarak, kültürel mirasımızı yaşatmak ve paylaşmak için buradayız.
              </p>
            </div>

            <div class="text-block">
              <h2 class="section-title">VİZYONUMUZ</h2>
              <p>
                <strong>TAVA DÜRÜM</strong> olarak vizyonumuz; Mezopotamya'nın köklü lezzetlerini global bir marka haline getirerek 
                dünya genelinde tanınan ve tercih edilen bir dürüm zinciri olmaktır.
              </p>
              <p>
                Yenilikçi yaklaşımımızla, geleneksel tariflerimizi korurken sürekli gelişen gastronomi trendlerini takip ediyoruz. 
                Sürdürülebilirlik ilkemiz doğrultusunda, çevre dostu uygulamalarla üretim yapıyor ve topluma katkı sağlamayı hedefliyoruz.
              </p>
              <p>
                Müşteri memnuniyetini her zaman ön planda tutarak, dürüm deneyimini bir sanat formuna dönüştürmek istiyoruz. 
                TAVA DÜRÜM ile, lezzetin sınırlarını aşmayı ve herkesin bu eşsiz tatlarla tanışmasını sağlamak için çalışıyoruz.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
  name: 'MisyonVizyon',
  components: {
    Navigation
  }
}
</script>

<style scoped>
/* SAYFA GENELİ */
.misyon-vizyon-page {
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
}

.page-layout {
  display: flex;
  min-height: 100vh;
}

/* --- SOL TARAF --- */
.left-section {
  flex: 0 0 35%;
  background-color: #bad319ff; /* Senin Yeşil Tonun */
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  height: 100vh;
}

.logo-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
}

.mv-logo {
  width: 200px;
  height: auto;
  filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
}

.slogan {
  font-family: 'Brush Script MT', cursive;
  font-size: 1.5rem;
  color: #fff;
  margin-top: 1rem;
  text-align: center;
}

.left-decor {
  text-align: center;
  color: #fff;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.left-decor h3 {
  font-size: 1.5rem;
  font-weight: normal;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}

.left-decor h1 {
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1;
  margin: 0;
}

/* --- SAĞ TARAF --- */
.right-section {
  flex: 1;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.nav-area {
  padding: 2rem 3rem;
  display: flex;
  justify-content: flex-end;
}

.content-area {
  flex: 1;
  padding: 0 4rem 4rem 4rem;
  max-width: 1000px;
  margin: 0 auto;
}

.page-title {
  font-size: 3rem;
  color: #2e4a1c; /* Koyu Yeşil */
  font-weight: 900;
  margin-bottom: 3rem;
  border-bottom: 4px solid #bad319ff;
  padding-bottom: 10px;
  display: inline-block;
}

/* METİN KUTULARI */
.text-wrapper {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.text-block {
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
}

.text-block:last-child {
  border-bottom: none;
}

.section-title {
  font-size: 1.8rem;
  color: #bad319ff; /* Başlıklar Açık Yeşil */
  margin-bottom: 1.5rem;
  font-weight: 800;
  letter-spacing: 1px;
}

.text-block p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1rem;
  text-align: justify;
}

.highlight-text {
  font-weight: bold;
  color: #2e4a1c;
  font-style: italic;
  margin-top: 1rem;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .page-layout { flex-direction: column; }
  .left-section { height: auto; position: relative; padding: 3rem 1rem; }
  .content-area { padding: 2rem; }
  .nav-area { justify-content: center; }
}
</style>

