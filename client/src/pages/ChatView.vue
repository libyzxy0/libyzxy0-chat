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
    <Message
      v-for="(message, index) in messages"
      :key="index"
      :user="message.sender.userID === userInfo.userID ? 'me' : 'other'"
      :username="message.sender.username"
      :text="message.body"
      :time="`${new Date(message.timezone)}`"
    />
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
import socket from '../services/socket.service.js';

export default {
  data() {
    return {
      messages: [],
      currentUserInfo: {}, 
      userInfo: {
        firstName: 'Anonymous',
        lastName: '',
        username: 'anonymous'
      },
    };
  },
  mounted() {
    socket.connect();
  },
  async created() {
    await this.login()
    await this.getUserInfo()
    // Make an API request using fetch()
    fetch('https://chat-b.libyzxy0.repl.co/api/retrieve-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: this.$cookie.getCookie('token'),
        userID: this.$route.params.id
      })
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data)
      this.messages = data;
    })
    .catch((error) => {
      console.error('Error fetching messages:', error);
    });
  },
  methods: {
    async getUserInfo() {
      let response = await fetch('https://chat-b.libyzxy0.repl.co/api/get-users', {
          method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: this.$cookie.getCookie('token'), // Replace with your token
      })
        });
        let res = await response.json();
        if(res.code == 200) {
          this.currentUserInfo = res.data;
        } else {
          this.$router.push('/login');
        }
  }
    }, 
    async login() {
        let response = await fetch('https://chat-b.libyzxy0.repl.co/auth/verify', {
          method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: this.$cookie.getCookie('token'), // Replace with your token
      })
        });
        let res = await response.json();
        if(res.code == 200) {
          this.currentUserInfo = res.data;
        } else {
          this.$router.push('/login');
        }
    }
  }
};
</script>
