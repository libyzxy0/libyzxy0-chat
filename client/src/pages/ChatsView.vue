<script setup>
import Navbar from '../components/ChatNavigation.vue'
import ChatCard from '../components/ChatUserCard.vue'
</script>
<template>
  <Navbar
    image="https://graph.facebook.com/100081144393297/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662"
    :name="`${userInfo.firstName} ${userInfo.lastName}`"
  />
  <div class="container">
    <ChatCard
      name="Jan Liby Dela Costa"
      sub="Sheeshhh"
      time="7:00"
      thread="libyzxy0"
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
    }, 
    methods: {
      async checkLogin() {
      let token = this.$cookie.getCookie('token')
      if(!token) {
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
        if(user.code != 200) {
          this.$router.push('/login')
        }
      this.userInfo = user.data;
      console.log(user.data)
      }
    }, 
    async fetchUsers() {
      const response = await fetch('https://chat-b.libyzxy0.repl.co/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: token
        })
      })
      let data = await response.json()
      if(data.code == 200) {
        for(let i = 0;i < data.users.length;i++) {
          users.push(data.users[i])
        }
      }
    }     
    }
  }
</script>