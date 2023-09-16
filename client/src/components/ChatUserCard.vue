<script setup>
defineProps({
  name: { type: String, required: true },
  sub: { type: String, required: true },
  time: { type: String, required: true },
  thread: { type: String, required: true },
  image: { type: String, required: true }
})
</script>
<template>
  <div @click="handleClick()" class="card">
    <div class="left">
      <img :src="image" :alt="name" />
      <div class="infos">
        <h1>{{ name }}</h1>
        <p>{{ sub }} • {{ time }}</p>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>
<style scoped>
.card {
  width: 100%;
  max-width: 100%;
  height: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  background-color: #ffffff;
  transition: 0.4s;
}
.card .left {
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 4.5rem;
  width: 80%;
}
.card .right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: left;
  height: 4.5rem;
  width: 20%;
}
.card:hover {
  background-color: #f5f5f5;
}
.left img {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-left: 10px;
  border: 1.5px solid gray;
}
.left .infos {
  margin-left: 10px;
  height: 4rem;
  display: flex;
  text-align: left;
  flex-direction: column;
}
.left .infos h1 {
  font-size: 17px;
  position: relative;
  font-family: 'Ubuntu', sans-serif;
  top: 0.6rem;
  font-weight: 550;
}
.infos p {
  position: relative;
  text-align: left;
  top: 0.9rem;
  font-size: 15px;
  color: #333;
  font-weight: 500;
  font-family: 'Rubik', sans-serif;
}
</style>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleClick() {
      this.$router.push(`/chat/${this.thread}`)
    }
  }
}
</script>
