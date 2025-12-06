<template>
  <div class="hakkimizda-container">
    
    <div class="left-section">
      <div class="logo-area">
        <div class="logo-circle">
          <img src="/logo.png" alt="TD Logo" class="main-logo" />
        </div>
        <p class="logo-slogan">Sac Tava'nın Dürüm Hali</p>
      </div>
      
      <div class="left-decor-text">
        <h3>DİYARBAKIR<br>USULÜ</h3>
        <h1>TAVA<br>DÜRÜM</h1>
      </div>
    </div>

    <div class="right-section">
      <div class="nav-container">
        <Navigation variant="green-pill" />
      </div>

      <div class="content-wrapper">
        <h1 class="page-title">HAKKIMIZDA</h1>
        
        <div class="text-content">
          <p>
            <strong>TAVA DÜRÜM</strong>, 1982 yılında Diyarbakır'ın o tarihteki en büyük ocakbaşı ve ciğer kebap salonu olan ve 
            <em>"kendin pişir kendin ye"</em>nin Diyarbakır şivesine evrilerek marka ismini belirlediği 
            <strong>Sansana Ocakbaşı</strong>'nın kurucularından Uzan ailesinin 2. nesil temsilcisi 
            <strong>Sait UZAN</strong> önderliğinde kurulmuştur.
          </p>

          <p>
            Köklü aile geleneğimizden aldığımız ilhamla, Diyarbakır başta olmak üzere Mezopotamya'nın zengin ve benzersiz 
            lezzetlerini tüm Türkiye ile buluşturma misyonunu üstleniyoruz.
          </p>

          <p>
            Geçmişin zengin damak tadı mirasını günümüzün modern mutfak anlayışıyla harmanlayarak, her bir dürümümüzde unutulmaz tatlar sunmayı hedefliyoruz.
          </p>

          <p>
            TAVA DÜRÜM, Mezopotamya'nın toprağında yetişmiş titizlikle seçilen malzemeler ve özgün tariflerle hazırlanan 
            dürümleriyle kalite, lezzet ve doğallıktan ödün vermeyen bir hizmet sunmaktadır. Müşteri memnuniyetini ön planda 
            tutarak, hem geleneksel tatları korumakta hem de yenilikçi yaklaşımlarımızla sürekli gelişim sağlamaktayız.
          </p>

          <p>
            Yemek kültürümüzün temel taşlarını oluşturan, nesilden nesile aktarılan bu lezzetleri sizlere sunarken; 
            <strong>dürüstlük, güven ve samimiyetle</strong> hizmet vermeyi ilke edindik. TAVA DÜRÜM olarak, Mezopotamya'nın otantik tadını ve sıcak misafirperverliğini her bir lokmada hissettirmenin gururunu yaşıyoruz.
          </p>
        </div>

        <div class="highlight-box">
          <p>
            Seri üretim, fabrikasyon ve işlenmiş gıdaların hayatımıza çığ gibi girdiği günümüz dünyasında; 
            Mezopotamya'nın tamamen doğal ortamında yetişmiş, işlenmemiş ve katkı maddesi katılmamış 
            malzemeleri kullanarak, asırlardır denenmiş yöresel lezzetleri günümüz bakış açısı ile 
            yorumlayarak kent insanına <strong>TAVA DÜRÜM</strong> olarak sunuyoruz.
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
  name: 'Hakkimizda',
  components: {
    Navigation
  }
}
</script>

<style scoped>
/* GENEL DÜZEN */
.hakkimizda-container {
  display: flex;
  min-height: 100vh;
  width: 100%;
}

/* --- SOL TARAF --- */
.left-section {
  flex: 0 0 30%; /* Sol taraf %30 genişlikte */
  
  /* SENİN İSTEDİĞİN RENK KODU */
  background-color: #bad319ff; 
  
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
  height: 100vh; /* Sabit durması için */
}

.logo-area {
  text-align: center;
  margin-bottom: 4rem;
}

.main-logo {
  width: 150px;
  height: auto;
}

.logo-slogan {
  font-family: 'Brush Script MT', cursive;
  font-size: 1.2rem;
  color: #555;
  margin-top: 0.5rem;
}

.left-decor-text {
  text-align: center;
  color: #fff;
  margin-top: auto; /* En alta itmek için */
  margin-bottom: 2rem;
}

.left-decor-text h3 {
  font-size: 1.5rem;
  font-weight: normal;
  margin-bottom: 0.5rem;
  opacity: 0.9;
}

.left-decor-text h1 {
  font-size: 3rem;
  line-height: 1;
  font-weight: 900;
}

/* --- SAĞ TARAF --- */
.right-section {
  flex: 1;
  background-color: #fff;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* İçerik uzunsa scroll olsun */
}

.nav-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 3rem;
  color: #2e4a1c;
  margin-bottom: 2rem;
  font-weight: 800;
  
  /* BAŞLIK ÇİZGİSİ DE AYNI RENK OLSUN */
  border-bottom: 3px solid #bad319ff;
  
  display: inline-block;
  padding-bottom: 0.5rem;
}

.text-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1.5rem;
  text-align: justify; /* Yazıları iki yana yasla */
}

/* Öne Çıkarılan Alt Kutu */
.highlight-box {
  background-color: #f9fbf0; /* Çok açık yeşil zemin */
  
  /* KUTU KENAR ÇİZGİSİ AYNI RENK */
  border-left: 5px solid #bad319ff;
  
  padding: 2rem;
  margin-top: 2rem;
  border-radius: 0 15px 15px 0;
}

.highlight-box p {
  font-size: 1.2rem;
  color: #2e4a1c;
  font-style: italic;
  font-weight: 500;
  margin: 0;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .hakkimizda-container {
    flex-direction: column;
  }
  
  .left-section {
    height: auto;
    padding: 2rem;
    position: relative;
  }
  
  .right-section {
    padding: 2rem;
  }

  .nav-container {
    justify-content: center;
    margin-bottom: 2rem;
  }
}
</style>
