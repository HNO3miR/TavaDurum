<template>
  <div class="page-content">
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
</template>

<script>
// Navigation ve Logo importlarını sildik, çünkü MainLayout hallediyor.
export default {
  name: 'Hakkimizda'
}
</script>

<style scoped>
.page-content {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 3rem;
  color: var(--primary-green);
  margin-bottom: 2rem;
  font-weight: 800;
  border-bottom: 3px solid var(--brand-green);
  display: inline-block;
  padding-bottom: 0.5rem;
}

.text-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1.5rem;
  text-align: justify;
}

.highlight-box {
  background-color: var(--cream);
  border-left: 5px solid var(--brand-green);
  padding: 2rem;
  margin-top: 2rem;
  border-radius: 0 15px 15px 0;
}

.highlight-box p {
  font-size: 1.2rem;
  color: var(--primary-green);
  font-style: italic;
  font-weight: 500;
  margin: 0;
}
</style>