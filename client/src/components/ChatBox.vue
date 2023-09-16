<script setup>
defineProps({
  username: { type: String, required: true }
})
</script>
<template>
  <div class="chatbox">
    <textarea v-model="message" placeholder="Write a message..."></textarea>
    <div class="action">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.2"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </button>
      <button @click="sendMessage()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.2"
          stroke="currentColor"
          class="send"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<style scoepd>
.chatbox {
  position: fixed;
  bottom: 0;
  height: 4rem;
  width: 100%;
  background-color: #ffffff;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
textarea::-webkit-resizer {
  display: none;
}
textarea {
  border: none;
  background-color: transparent;
  height: 4rem;
  width: 80%;
  overflow: auto;
  padding: 15px;
  font-size: 17px;
  font-family: 'Ubuntu', sans-serif;
}
textarea:hover,
textarea:focus {
  border: none;
  outline: none;
}
.action {
  width: 20%;
  margin: 20px;
  text-align: right;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.action button {
  background-color: transparent;
  width: 1.5rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.send {
  transform: rotate(-30deg);
  padding-bottom: 7px;
}
</style>
<script>
import socket from '../services/socket.service.js'
export default {
  data() {
    return {
      message: '',
      userInfo: {}
    }
  },
  mounted() {
    this.scrollToBottom()
  },
  created() {
    this.fetchUserInfo()
  },
  methods: {
    async fetchUserInfo() {
      if(this.$route.params.id) {
      const response = await fetch('https://chat-b.libyzxy0.repl.co/api/fetch-user-basic-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.$route.params.id
        })
      })
      let user = await response.json()
      if(user.code != 400) {
        this.userInfo = user;
      } else {
        this.$router.push('/chats');
      }
       } 
    },
    async sendMessage(uid) {
      if (!this.message) {
        alert('Error')
        return
      }
      socket.emit('make event', {
        type: 'message',
        sender: {
          token: this.$cookie.getCookie('token')
        },
        recipient: {
          username: this.userInfo.username,
          userID: this.userInfo.userID
        },
        body: this.message
      })
      this.message = ''
      this.scrollToBottom()
    },
    scrollToBottom() {
      window.scrollTo(0, document.body.scrollHeight)
    }
  }
}
</script>
