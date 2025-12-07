<template>
  <div class="logo-container">
    <div class="logo-image-wrapper">
      <img 
        v-if="logoExists" 
        :src="logoSrc" 
        alt="TAVA DÜRÜM Logo" 
        class="logo-image"
        @error="onImageError"
      />
      <div v-else class="logo-circle">
        <span class="logo-text">td</span>
      </div>
    </div>
    <div class="logo-text-container">
      <div class="logo-top">DİYARBAKIR USULÜ</div>
      <div class="logo-main">TAVA DÜRÜM</div>
    </div>
  </div>
</template>

<script>
// Görseli JavaScript modülü gibi import ediyoruz
import logoImg from '@/assets/images/logo.png'

export default {
  name: 'Logo',
  data() {
    return {
      logoExists: true,
      logoSrc: logoImg // Import ettiğimiz görseli data'ya atadık
    }
  },
  methods: {
    onImageError() {
      this.logoExists = false
    }
  }
}
</script>

<style scoped>
/* Stiller aynen kalıyor... */
.logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-image-wrapper {
  flex-shrink: 0;
}

.logo-image {
  width: 120px;
  height: 120px;
  object-fit: contain;
  display: block;
}

.logo-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: 3px solid rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.logo-text {
  font-size: 2rem;
  font-weight: bold;
  color: var(--white);
  letter-spacing: 2px;
}

.logo-text-container {
  display: flex;
  flex-direction: column;
}

.logo-top {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--white);
  letter-spacing: 1px;
  margin-bottom: 0.25rem;
}

.logo-main {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--white);
  letter-spacing: 2px;
}

@media (max-width: 768px) {
  .logo-circle {
    width: 60px;
    height: 60px;
  }
  
  .logo-text {
    font-size: 1.5rem;
  }
  
  .logo-main {
    font-size: 1.2rem;
  }
  
  .logo-top {
    font-size: 0.8rem;
  }
}
</style>

