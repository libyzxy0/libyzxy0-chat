<script setup>
import NavBar from '../components/ChatUserNav.vue'
import ChatBox from '../components/ChatBox.vue'
  import Message from '../components/MessagesComponent.vue'
  
</script>
<template>
  <NavBar
    :name="threadID"
    image="https://graph.facebook.com/100081144393297/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662"
  />
  <div class="chats">
    <Message user="me" username="libyzxy0" text="Hello" time="8:00" />
    <Message user="other" username="user" text="Hi" time="8:30" />
  </div>
  <ChatBox :threadID="threadID" uid="0" />
</template>
<style>
.chats {
    padding: 2rem 0;
    list-style: none;
    top: 0;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    overflow: scroll;
    flex: 1;
    height: calc(94vh - 4rem);
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 1;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
}

</style>
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
