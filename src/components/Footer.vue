<template>
  <footer class="main-footer">
    <div class="footer-content">
      <div class="social-links">
        <span>Instagram</span>
        <span>Facebook</span>
        <span>Twitter</span>
      </div>
      <p>
        Tava Dürüm - Diyarbakır Lezzetleri <br>
        Tüm Hakları Saklıdır.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.main-footer {
  background-color: var(--primary-green); /* Koyu Yeşil */
  color: #fff;
  padding: 2rem;
  margin-top: auto; /* İçerik azsa bile en alta yapışır */
  width: 100%;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.social-links span {
  margin-right: 15px;
  cursor: pointer;
  font-weight: bold;
}

.social-links span:hover {
  color: var(--yellow);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
}
</style>