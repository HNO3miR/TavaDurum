<template>
  <div class="page-content">
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
</template>

<script>
export default {
  name: 'Iletisim'
}
</script>

<style scoped>
.page-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh; /* Ortalamak için */
}

.page-title {
  font-size: 3.5rem;
  color: var(--primary-green);
  font-weight: 900;
  margin-bottom: 3rem;
  border-bottom: 4px solid var(--brand-green);
  padding-bottom: 10px;
}

.address-card {
  background: #fdfdfd;
  border: 1px solid #eee;
  border-left: 10px solid var(--brand-green);
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

.address-text .district { font-weight: bold; color: var(--primary-green); font-size: 1.4rem; }
.address-text .city { font-weight: bold; margin-top: 1rem; color: var(--brand-green); font-size: 1.3rem; }

@media (max-width: 768px) {
  .address-card { flex-direction: column; align-items: center; text-align: center; }
}
</style>