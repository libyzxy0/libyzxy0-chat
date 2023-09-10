<script setup>
import NavBar from '../components/ChatUserNav.vue'
import ChatBox from '../components/ChatBox.vue'
</script>
<template>
  <NavBar
    :name="threadID"
    image="https://graph.facebook.com/100081144393297/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662"
  />
  <ChatBox :threadID="threadID" uid="0" />
</template>
<script>
export default {
  data() {
    return {
      threadID: null
    }
  },
  mounted() {
    this.retrieveThreadData()
  },
  methods: {
    retrieveThreadData() {
      this.threadID = this.$route.params.id
    }
  }
}
</script>
