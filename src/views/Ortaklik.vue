<template>
  <div class="page-content">
    <div class="header-group">
      <h1 class="page-title">FRANCHISE BAŞVURUSU</h1>
      <p class="sub-text">Büyüyen ailemize katılın, kazançlı bir yatırıma adım atın.</p>
    </div>
    
    <div class="form-wrapper">
      <form @submit.prevent="submitForm" class="franchise-form">
        
        <div class="form-row">
          <div class="input-group">
            <label>Adınız Soyadınız</label>
            <input type="text" placeholder="Ad Soyad" required />
          </div>
          <div class="input-group">
            <label>Telefon Numaranız</label>
            <input type="tel" placeholder="0555 ..." required />
          </div>
        </div>

        <div class="form-row">
          <div class="input-group">
            <label>E-posta Adresiniz</label>
            <input type="email" placeholder="ornek@email.com" required />
          </div>
          <div class="input-group">
            <label>Düşünülen Şehir / Semt</label>
            <input type="text" placeholder="Örn: İstanbul / Kadıköy" required />
          </div>
        </div>

        <div class="input-group">
          <label>Yatırım Bütçeniz (Tahmini)</label>
          <select>
            <option>500.000 ₺ - 1.000.000 ₺</option>
            <option>1.000.000 ₺ - 2.000.000 ₺</option>
            <option>2.000.000 ₺ ve üzeri</option>
          </select>
        </div>

        <div class="input-group">
          <label>Eklemek İstedikleriniz</label>
          <textarea rows="4" placeholder="Kendinizden bahsedin..."></textarea>
        </div>

        <button type="submit" class="submit-btn">BAŞVURUYU GÖNDER</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ortaklik',
  methods: {
    submitForm() {
      alert("Başvurunuz alındı!");
    }
  }
}
</script>

<style scoped>
.page-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
}

.header-group {
  text-align: center;
  margin-bottom: 2rem;
}

.sub-text {
  color: #666;
  font-size: 1.1rem;
}

.page-title {
  font-size: 2.5rem;
  color: var(--primary-green);
  font-weight: 800;
  margin-bottom: 0.5rem;
  border-bottom: 4px solid var(--brand-green);
  padding-bottom: 10px;
  display: inline-block;
}

.form-wrapper {
  width: 100%;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
}

.franchise-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: flex;
  gap: 2rem;
}

.input-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: 600;
  color: var(--primary-green);
}

input, select, textarea {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
  font-family: inherit;
}

.submit-btn {
  background-color: var(--primary-green);
  color: #fff;
  border: none;
  padding: 1.2rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
}

.submit-btn:hover {
  background-color: var(--brand-green);
}

@media (max-width: 768px) {
  .form-row { flex-direction: column; gap: 1rem; }
}
</style>

