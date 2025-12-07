<template>
  <div class="scroll-container">
    
    <section id="home" class="section">
      <Home />
    </section>

    <section id="misyon" class="section">
      <MisyonVizyon />
    </section>

    <section id="hakkimizda" class="section">
      <Hakkimizda />
    </section>

    <section id="menumuz" class="section">
      <Menumuz />
    </section>

    <section id="ik" class="section">
      <InsanKaynaklari />
    </section>

    <section id="iletisim" class="section">
      <Iletisim />
    </section>

    <section id="ortaklik" class="section">
      <Ortaklik />
    </section>

  </div>
</template>

<script>
import Home from './Home.vue'
import MisyonVizyon from './MisyonVizyon.vue'
import Hakkimizda from './Hakkimizda.vue'
import Menumuz from './Menumuz.vue'
import InsanKaynaklari from './InsanKaynaklari.vue'
import Iletisim from './Iletisim.vue'
import Ortaklik from './Ortaklik.vue'

export default {
  name: 'FullPage',
  components: {
    Home, MisyonVizyon, Hakkimizda, Menumuz, InsanKaynaklari, Iletisim, Ortaklik
  }
}
</script>

<style scoped>
/* YENİ KOD: Yükseklik sınırını kaldırdık */
.scroll-container {
  width: 100%;
  /* height: calc(100vh - 90px);  <-- BU SATIRI SİLDİK */
  /* overflow-y: auto;            <-- BU SATIRI SİLDİK */
}

.section {
  /* Her bölüm en az bir ekran boyu olsun ama gerekirse uzasın */
  min-height: 100vh; 
  width: 100%;
  
  /* İçeriği yine ortalayalım */
  display: flex;
  align-items: center; 
  justify-content: center;
  
  /* Bölümler arası net ayrım için biraz boşluk (isteğe bağlı) */
  padding: 2rem 0; 
}

/* Home sayfası özel ayarı */
#home {
  align-items: stretch;
  padding: 0; /* Home sayfası tam otursun */
}
</style>