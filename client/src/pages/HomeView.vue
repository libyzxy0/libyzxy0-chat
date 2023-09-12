<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="body">
    <nav :class="isNav ? 'active' : ''">
      <h1>Chat</h1>
    </nav>
    <section class="hero" ref="heroSection">
      <div class="container">
        <div class="hero-content">
          <h1>Connect, chat, and build meaningful friendships.</h1>
          <div class="action-buttons">
            <button @click="$router.push('/chats')">
              Get Started<svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
    <!--
    <section class="about">
      <div class="container">
        <h1>About Us</h1>
      </div>
    </section>
-->
  </div>
</template>
<style scoped>
.body {
  background-color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
nav {
  height: 4rem;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 5;
  background-color: transparent;
  transition: 0.5s;
}
nav.active {
  box-shadow:
    0 3.2px 7.2px 0 rgb(0 0 0 / 13%),
    0 0.6px 1.8px 0 rgb(0 0 0 / 11%);
  background-color: #ffffff;
  z-index: 6;
}
nav h1 {
  font-size: 27px;
  color: #2bff82;
  display: inline-block;
  margin-top: 17px;
  font-weight: 400;
  margin-left: 15px;
  font-family: 'Ubuntu', sans-serif;
}
.hero {
  position: relative;
  height: 100vh;
}
.hero::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url('https://images.unsplash.com/photo-1663780887553-f61fb5caa1b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80')
    no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 105vh;
  filter: brightness(0.4);
}
.container {
  padding: 30px;
  position: relative;
}
.hero-content {
  padding-top: 190px;
}
.hero-content h1 {
  font-weight: 400;
  font-size: 36px;
  color: #2bff82;
  font-family: 'Ubuntu', sans-serif;
}
.hero-content .action-buttons {
  margin-top: 15px;
}
.action-buttons button {
  padding: 7px 22px;
  font-size: 17px;
  border: 1.5px solid #2bff82;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  color: #2bff82;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;
}
.action-buttons button svg {
  width: 1rem;
  height: auto;
  margin-left: 5px;
}
.action-buttons button:hover {
  color: #ffffff;
  background-color: #2bff82;
}
.about {
  height: 100vh;
  background: #ffffff;
  padding-top: 3rem;
}
.about h1 {
  font-family: 'Ubuntu', sans-serif;
  color: #2bff82;
  font-size: 32px;
}
</style>
<script>
export default {
  data() {
    return {
      observer: false,
      isNav: false
    }
  },
  mounted() {
    this.checkLogin()
    this.observeIntersection()
  },
  methods: {
    async checkLogin() {
      let token = this.$cookie.getCookie('token')
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
        if(user.code == 200) {
          this.$router.push('/chats')
        }
    }, 
    observeIntersection() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.isNav = false
            } else {
              this.isNav = true
            }
          })
        },
        {
          threshold: 0.5
        }
      )
      this.observer.observe(this.$refs.heroSection)
    }
  }
}
</script>
