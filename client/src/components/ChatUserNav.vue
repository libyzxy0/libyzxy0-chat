<script setup>
defineProps({
  name: { type: String, required: true },
  image: { type: String, required: true }
})
</script>
<template>
  <nav>
    <div class="left">
      <button @click="$router.push('/chats')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <img :src="image" alt="Profile" />
      <h1>{{ name }}</h1>
    </div>
    <div class="right"></div>
  </nav>
</template>
<style scoped>
nav {
  height: 4rem;
  width: 100%;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  display: flex;
  align-items: center;
}
.left {
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: left;
  height: 4rem;
}
.left button {
  background-color: transparent;
  border: none;
  width: 1.4rem;
  height: 1.4rem;
  margin-inline: 15px;
}
.left img {
  width: 2.8rem;
  height: 2.8rem;
  border: 1.5px solid #333;
  border-radius: 50%;
}
.left h1 {
  margin-left: 10px;
  font-size: 19px;
  font-family: 'Rubik', sans-serif;
}
.right {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  height: 4rem;
}
</style>
