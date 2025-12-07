<template>
  <div class="page-content">
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
</template>

<script>
// Sidebar ve Navigasyon MainLayout'tan geliyor, burayı temizledik.
export default {
  name: 'MisyonVizyon'
}
</script>

<style scoped>
.page-content {
  max-width: 1000px;
  margin: 0 auto;
}

.page-title {
  font-size: 3rem;
  color: var(--primary-green);
  font-weight: 900;
  margin-bottom: 3rem;
  border-bottom: 4px solid var(--brand-green);
  padding-bottom: 10px;
  display: inline-block;
}

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
  color: var(--brand-green); /* Başlıklar fıstık yeşili */
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
  color: var(--primary-green);
  font-style: italic;
  margin-top: 1rem;
}
</style>
