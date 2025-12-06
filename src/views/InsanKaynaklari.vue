<template>
  <div class="insan-kaynaklari-page">
    <div class="page-layout">
      
      <div class="left-section">
        <div class="logo-area">
          <img src="/logo.png" alt="TD Logo" class="ik-logo" />
          <p class="slogan">Sac Tava'nın Dürüm Hali</p>
        </div>

        <div class="left-decor-text">
          <h3>DİYARBAKIR USULÜ</h3>
          <h1>TAVA DÜRÜM</h1>
        </div>
      </div>
      
      <div class="right-section">
        <div class="nav-area">
          <Navigation variant="green-pill" />
        </div>
        
        <div class="content-area">
          <h1 class="page-title">İNSAN KAYNAKLARI</h1>
          
          <div class="info-box">
            <p class="info-text">
              15-30 Yaş arası yetiştirilmek üzere<br>
              <strong>Bay / Bayan</strong> elemanlar alınacaktır.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
  name: 'InsanKaynaklari',
  components: {
    Navigation
  }
}
</script>

<style scoped>
.insan-kaynaklari-page {
  min-height: 100vh;
}

.page-layout {
  display: flex;
  min-height: 100vh;
}

/* --- SOL TARAF --- */
.left-section {
  flex: 0 0 35%;
  background-color: #bad319ff; 
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Yazıyı en alta itmek için space-between değil, içeriği yayıyoruz */
  justify-content: space-between; 
}

.logo-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.ik-logo {
  width: 200px;
  height: auto;
  filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
}

.slogan {
  font-family: 'Brush Script MT', cursive;
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
  margin-top: 0.5rem;
}

/* YENİ EKLENEN YAZI STİLİ */
.left-decor-text {
  text-align: center;
  color: #fff;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.left-decor-text h3 {
  font-size: 1.5rem;
  font-weight: normal;
  margin-bottom: 0.5rem;
  letter-spacing: 2px;
}

.left-decor-text h1 {
  font-size: 3.5rem; /* Büyük ve İddialı */
  line-height: 1;
  font-weight: 900;
  margin: 0;
}

/* --- SAĞ TARAF --- */
.right-section {
  flex: 1;
  background: var(--white);
  display: flex;
  flex-direction: column;
}

.nav-area {
  padding: 2rem;
  display: flex;
  justify-content: flex-end;
}

.content-area {
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.page-title {
  font-size: 3rem;
  font-weight: bold;
  color: #2e4a1c;
  margin-bottom: 3rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 3px solid #bad319ff;
  padding-bottom: 10px;
}

.info-box {
  background: #f9fbf0;
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  max-width: 600px;
  width: 100%;
  border-left: 10px solid #bad319ff;
  text-align: center;
}

.info-text {
  font-size: 1.5rem;
  color: #333;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 1024px) {
  .page-layout { flex-direction: column; }
  .left-section { flex: none; padding: 2rem; }
  .page-title { font-size: 2rem; }
  .nav-area { justify-content: center; }
}
</style>