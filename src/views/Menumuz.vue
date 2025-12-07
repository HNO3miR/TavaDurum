<template>
  <div class="page-content">
    <h1 class="page-title">MENÜMÜZ</h1>

    <div class="menu-grid">
      
      <div class="menu-card">
        <div class="image-box">
           <img :src="lavasImg" class="product-img" alt="Lavaş Dürüm" />
        </div>
        <h3>Lavaş Dürüm</h3>
      </div>

      <div class="menu-card">
        <div class="image-box">
          <img :src="bohcaImg" class="product-img" alt="Bohça Dürüm" />
        </div>
        <h3>Bohça Dürüm</h3>
      </div>

      <div class="menu-card">
        <div class="image-box">
          <img :src="bastonImg" class="product-img" alt="Baston Dürüm" />
        </div>
        <h3>Baston Dürüm</h3>
      </div>

    </div>
  </div>
</template>

<script>
// Görselleri import ediyoruz (Eski kodunuzdaki gibi)
import lavasImg from '@/assets/images/lavas.png'
import bohcaImg from '@/assets/images/bohca.png'
import bastonImg from '@/assets/images/baston.png'

export default {
  name: 'Menumuz',
  data() {
    return {
      lavasImg: lavasImg,
      bohcaImg: bohcaImg,
      bastonImg: bastonImg
    }
  }
}
</script>

<style scoped>
.page-content {
  text-align: center;
}

.page-title {
  font-size: 3.5rem;
  color: var(--primary-green);
  font-weight: 900;
  margin-bottom: 3rem;
  border-bottom: 4px solid var(--brand-green);
  display: inline-block;
  padding-bottom: 10px;
  letter-spacing: 1px;
}

.menu-grid {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  padding: 1rem;
}

/* KARTLAR */
.menu-card {
  background: white;
  border-radius: 20px;
  width: 320px;
  padding: 2rem 1rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08); /* Biraz daha belirgin gölge */
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid #eee;
}

.menu-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  border-color: var(--yellow); /* Hover olunca sarı çerçeve */
}

.image-box {
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.product-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 5px 10px rgba(0,0,0,0.1));
}

.menu-card h3 {
  color: var(--primary-green);
  font-size: 1.6rem;
  font-weight: bold;
  margin: 0;
}
</style>
