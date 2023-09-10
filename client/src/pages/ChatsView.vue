<script setup>
import Navbar from '../components/ChatNavigation.vue'
import ChatCard from '../components/ChatUserCard.vue'
</script>
<template>
  <Navbar
    image="https://graph.facebook.com/100081144393297/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662"
    name="Jan Liby Dela Costa"
  />
  <div class="container">
    <ChatCard
      name="Jan Liby Dela Costa"
      sub="Hahahaha yu..."
      time="10:00"
      thread="100382"
      image="https://graph.facebook.com/100081144393297/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662"
    />
  </div>
</template>
<style scoped>
.container {
  padding: 0;
  margin: 120px 0px;
  box-sizing: border-box;
}
</style>
