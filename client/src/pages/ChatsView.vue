<script setup>
import Navbar from '../components/ChatNavigation.vue'
import ChatCard from '../components/ChatUserCard.vue'
</script>
<template>
  <Navbar
    :image="`https://api.nilskoepke.com/profile-image?name=${userInfo.firstName}+${
      userInfo.lastName
    }&backgroundColor=rgb(${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)})`"
    :name="`${userInfo.firstName || 'Fetching...'} ${userInfo.lastName || ''}`"
  />
  <div class="container">
    <ChatCard
      v-for="item in users"
      :name="`${item.firstName} ${item.lastName}`"
      :sub="item.latestmsg"
      :thread="item.username"
      :time="item.latestdate"
      :image="`https://api.nilskoepke.com/profile-image?name=${item.firstName}+${
        item.lastName
      }&backgroundColor=rgb(${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)})`"
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
<script>
export default {
  data() {
    return {
      userInfo: {},
      users: []
    }
  },
  created() {
    this.checkLogin()
    this.fetchUsers()
  },
  methods: {
    async checkLogin() {
      let token = this.$cookie.getCookie('token')
      if (!token) {
        this.$router.push('/login')
      } else {
        const response = await fetch('https://chat-b.libyzxy0.repl.co/auth/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            token: token
          })
        })
        let user = await response.json()
        if (user.code != 200) {
          this.$router.push('/login')
        }
        this.userInfo = user.data
        console.log(user.data)
      }
    },
    async getLatestMessage(userID) {
      let response = await fetch('https://chat-b.libyzxy0.repl.co/api/retrieve-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: this.$cookie.getCookie('token'),
          userID: userID
        })
      })
      let data = await response.json()
      if (data) {
        return data[data.length - 1]
      } else {
        return []
      }
    },
    sortUsers() {
      this.users = this.users.sort((a, b) => b.timestamp - a.timestamp);
    }, 
    async fetchUsers() {
      const response = await fetch('https://chat-b.libyzxy0.repl.co/api/get-users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: this.$cookie.getCookie('token')
        })
      })
      let data = await response.json()
      if (data.code == 200) {
        for (let i = 0; i < data.users.length; i++) {
          if (data.users[i]) {
            let latestMsg = await this.getLatestMessage(data.users[i].username)
            this.users.push({
              firstName: data.users[i].firstName,
              lastName: data.users[i].lastName,
              username: data.users[i].username,
              timestamp: new Date(latestMsg?.timestamp),
              latestmsg: latestMsg?.sender?.userID
                ? this.userInfo.userID === latestMsg.sender.userID
                  ? `You: ${latestMsg.body}`
                  : latestMsg.body
                : 'No conversation',
              latestdate: latestMsg?.timestamp
                ? new Date(latestMsg?.timestamp).toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true
                  })
                : '00:00 AM/PM'
            })
            this.sortUsers()
          }
        }
      }
    }
  }
}
</script>
