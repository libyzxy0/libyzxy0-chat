<script setup>
defineProps({
  name: { type: String, required: true },
  image: { type: String, required: true }
})
</script>
<template>
  <div id="body">
    <nav>
      <div class="circular-nav">
        <div class="left">
          <img :src="image" :alt="name" />
          <h1>{{ name }}</h1>
        </div>
        <button @click="toggleMenu()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            :class="isMenuOpen ? 'hidden' : ''"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            :class="isMenuOpen ? '' : 'hidden'"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>
  </div>
</template>

<style scoped>
#body {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
nav {
  position: fixed;
  top: 0;
  height: 6rem;
  width: 100%;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
}
.circular-nav {
  height: 4rem;
  width: 90%;
  border-radius: 50px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
.circular-nav .left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.circular-nav .left img {
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 50%;
  margin-left: 10px;
  border: 2px solid #2bff82;
}
.circular-nav .left h1 {
  font-family: 'Rubik', sans-serif;
  font-size: 22px;
  color: #333;
  margin-left: 8px;
  font-weight: 500;
}
.circular-nav button {
  width: 1.8rem;
  height: auto;
  background-color: transparent;
  border: none;
  margin-right: 24px;
  margin-top: 2px;
}
</style>
<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>
