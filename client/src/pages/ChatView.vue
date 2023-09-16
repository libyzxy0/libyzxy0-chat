<script setup>
import NavBar from '../components/ChatUserNav.vue'
import ChatBox from '../components/ChatBox.vue'
import Message from '../components/MessagesComponent.vue'
</script>
<template>
  <NavBar
    :name="`${userInfo.firstName} ${userInfo.lastName}`"
    :image="`https://api.nilskoepke.com/profile-image?name=${userInfo.firstName}+${userInfo.lastName}&backgroundColor=rgb(33,194,87)`"
  />
  <div class="chats">
    <Message
      v-for="(message, index) in messages"
      :key="index"
      :user="message.sender.userID === userInfo.userID ? 'other' : 'me'"
      :username="message.recipient.userID === userInfo.userID ? message.sender.username : message.recipient.username"
      :text="message.body"
      :time="`${new Date(message.timestamp).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`"
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
    if(this.$route.params.id) {
    await this.login()
    await this.getUserInfo() 
    this.handleEvent()
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
     } 
  },
  methods: {
    async handleEvent() {
     socket.on('event', (event) => {
       if(event.type == 'message') {
         this.messages.push(event)
       }
     })
    }, 
    async getUserInfo() {
      let response = await fetch('https://chat-b.libyzxy0.repl.co/api/fetch-user-basic-info', {
          method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.$route.params.id
      })
        });
        let res = await response.json();
        if(res.code != 400) {
          this.userInfo = res;
        } else {
          this.$router.push('/login');
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
