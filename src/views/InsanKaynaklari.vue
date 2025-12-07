<template>
  <div class="page-content">
    <h1 class="page-title">İNSAN KAYNAKLARI</h1>
    
    <div class="info-box">
      <p class="info-text">
        15-30 Yaş arası yetiştirilmek üzere<br>
        <strong>Bay / Bayan</strong> elemanlar alınacaktır.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InsanKaynaklari'
}
</script>

<style scoped>
.page-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.page-title {
  font-size: 3rem;
  font-weight: bold;
  color: var(--primary-green);
  margin-bottom: 3rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 3px solid var(--brand-green);
  padding-bottom: 10px;
}

.info-box {
  background: var(--cream);
  padding: 3rem 5rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  max-width: 700px;
  width: 100%;
  border-left: 10px solid var(--brand-green);
  text-align: center;
}

.info-text {
  font-size: 1.5rem;
  color: #333;
  line-height: 1.6;
  margin: 0;
}
</style>