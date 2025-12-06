<template>
  <div class="iletisim-page">
    <div class="page-layout">
      
      <div class="left-section">
        <div class="logo-area">
          <img src="/logo.png" alt="TD Logo" class="contact-logo" />
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
          <h1 class="page-title">İLETİŞİM</h1>
          
          <div class="address-card">
            <div class="icon-circle">📍</div>
            <div class="address-text">
              <p class="district">Diclekent Mah. Kayapınar Cad.</p>
              <p class="detail">Batı Hastanesi Karşısı 265 Sok. No:13/AE</p>
              <p class="site">Ataşlar Serhat Sitesi Altı</p>
              <p class="city">Kayapınar / DİYARBAKIR</p>
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
  name: 'Iletisim',
  components: {
    Navigation
  }
}
</script>

<style scoped>
.iletisim-page {
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
  background-color: #bad319ff; 
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; /* Yazıyı en alta, logoyu en üste iter */
}

.logo-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
}

.contact-logo {
  width: 220px;
  height: auto;
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.1));
}

.slogan {
  font-family: 'Brush Script MT', cursive;
  font-size: 1.5rem;
  color: #fff;
  margin-top: 1rem;
  text-align: center;
}

/* YAZI STİLLERİ */
.left-decor {
  text-align: center;
  color: #fff;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.left-decor h3 { 
  font-size: 1.5rem; 
  margin: 0; 
  font-weight: normal; 
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}

.left-decor h1 { 
  font-size: 3.5rem; /* Büyük Yazı */
  margin: 0; 
  line-height: 1; 
  font-weight: 900; 
}

/* --- SAĞ TARAF --- */
.right-section {
  flex: 1;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.nav-area {
  padding: 2rem 3rem;
  display: flex;
  justify-content: flex-end;
}

.content-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.page-title {
  font-size: 3.5rem;
  color: #2e4a1c;
  font-weight: 900;
  margin-bottom: 3rem;
  border-bottom: 4px solid #bad319ff;
  padding-bottom: 10px;
  letter-spacing: 2px;
}

.address-card {
  background: #fdfdfd;
  border: 1px solid #eee;
  border-left: 10px solid #bad319ff;
  border-radius: 15px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  transition: transform 0.3s;
}

.address-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
}

.icon-circle {
  width: 60px;
  height: 60px;
  background-color: #f4f8e6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  flex-shrink: 0;
}

.address-text p {
  margin: 0.5rem 0;
  color: #444;
  font-size: 1.2rem;
}

.address-text .district { font-weight: bold; color: #2e4a1c; font-size: 1.4rem; }
.address-text .city { font-weight: bold; margin-top: 1rem; color: #bad319ff; font-size: 1.3rem; }

@media (max-width: 1024px) {
  .page-layout { flex-direction: column; }
  .left-section { padding: 3rem 1rem; }
  .content-area { padding: 1rem; }
  .address-card { flex-direction: column; align-items: center; text-align: center; padding: 2rem; }
}
</style>