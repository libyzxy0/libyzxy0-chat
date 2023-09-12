<script setup>
import NavBar from '../components/ChatUserNav.vue'
import ChatBox from '../components/ChatBox.vue'
import Message from '../components/MessagesComponent.vue'
</script>
<template>
  <NavBar
    :name="`${userInfo.firstName} ${userInfo.lastName}`"
    image="https://graph.facebook.com/100081144393297/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662"
  />
  <div class="chats">
    <!--
    <Message user="me" username="libyzxy0" text="Hello" time="8:00" /> -->
    <Message v-for="item in messages" :user="item.sender.userID != user.userID ? 'other' : 'me'" :username="item.sender.username" :time="`${new Date(item.timestamp).getHours()}:${new Date(item.timestamp).getMinutes()}`" :text="item.body"/>
        
  </div>
  <ChatBox :username="$route.params.id" />
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
import socket from '../services/socket.service.js'
export default {
  data() {
    return {
      messages: [],
      userInfo: {}, 
      user: {
        userID: '',
        username: ''
      }
    }
  },
  mounted() {
    socket.connect()
  },
  async created() {
    await this.login()
    this.handleConversation()
  },
  methods: {
    async fetchUserInfo(username) {
      const response = await fetch('https://chat-b.libyzxy0.repl.co/api/fetch-user-basic-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username
        })
      })
      let user = await response.json()
      return user
    },
    async login() {
      try {
        const userInfo = await this.fetchUserInfo(this.$route.params.id)
        if (userInfo.error) {
           this.$router.push('/chats')
          return
        }
        this.userInfo = userInfo;
        const response = await fetch('https://chat-b.libyzxy0.repl.co/auth/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            token: this.$cookie.getCookie('token')
          })
        })
        let user = await response.json()
        if (user.code != 200) {
          this.user.userID = ''
          this.user.username = ''
          return
        } 
        this.user.userID = user.data.userID
        this.user.username = user.data.username
      } catch (err) {
        this.$router.push('/login')
        this.user.userID = ''
        this.user.username = ''
        console.log(err)
      }
    },
    async handleConversation() {
      const response = await fetch('https://chat-b.libyzxy0.repl.co/api/retrieve-message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            token: this.$cookie.getCookie('token')
          })
        })
      let data = await response.json()
      if(data.code == 200) {
        for(let i = 0;i < data.messages.length;i++) {
          if(this.user) {
            if(data.messages[i].sender.username == this.$route.params.id || data.messages[i].sender.userID == this.user.userID) {
          if(data.messages[i].recipient.userID == this.user.userID || data.messages[i].sender.userID == this.user.userID) {
              this.messages.push(data.messages[i])
            }
          }
            }
         } 
      }
      socket.on('receive-event', (data) => {
        if(this.user) {
            if(data.sender.username == this.$route.params.id || data.sender.userID == this.user.userID) {
          if(data.recipient.userID == this.user.userID || data.sender.userID == this.user.userID) {
              this.messages.push(data)
            }
          }
        }
      })
    }
  }
}
</script>
