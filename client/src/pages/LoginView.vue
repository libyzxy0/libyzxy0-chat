<template>
  <div class="body">
    <div class="container">
      <h1>Login</h1>
      <form @submit.prevent="handleSubmit()">
        <div class="input-group">
          <label for="username">Username</label>
          <input v-model="username" type="text" name="username" placeholder="Enter username" />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input v-model="password" type="text" name="password" placeholder="Enter password" />
        </div>
        <div class="input-group">
          <button class="button-61" type="submit">Login</button>
        </div>
        <p>OR</p>
        <div class="input-group">
          <button @click="googleSignIn()" class="s-methods">
            <img
              style="width: 1.7rem; height: auto; margin-right: 10px"
              src="https://freesvg.org/img/1534129544.png"
            />
            Signin with google
          </button>
        </div>
        <p>Don't have an account? <a href="signup">Create account</a>.</p>
      </form>
    </div>
  </div>
</template>
<style scoped>
.body {
  background-color: #ffffff;
  position: absolute;
  color: black;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.container {
  margin: 30px;
  display: grid;
  place-items: center;
  font-family: 'Rubik', sans-serif;
}
p {
  font-size: 14px;
  margin-top: 1.5rem;
}
form {
  margin-top: 5rem;
  height: 20rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input-group {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 95%;
}
label {
  font-size: 14px;
}
input {
  margin: auto;
  width: 100%;
  border: none;
  background-color: #ffffff;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  height: 2.9rem;
  border-radius: 8px;
  padding: 10px;
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
}
input:focus {
  outline: none;
}

.button-61 {
  align-items: center;
  margin-top: 0.5rem;
  appearance: none;
  border-radius: 4px;
  border-style: none;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0 2px 2px 0,
    rgba(0, 0, 0, 0.12) 0 1px 5px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: 'Rubik', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  height: 39px;
  justify-content: center;
  letter-spacing: 0.0892857em;
  line-height: normal;
  min-width: 64px;
  outline: none;
  overflow: visible;
  padding: 0 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  will-change: transform, opacity;
  font-family: 'Ubuntu', sans-serif;
}

.button-61:hover {
  box-shadow:
    rgba(0, 0, 0, 0.2) 0 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0 4px 5px 0,
    rgba(0, 0, 0, 0.12) 0 1px 10px 0;
}

.button-61:disabled {
  background-color: rgba(0, 0, 0, 0.12);
  box-shadow:
    rgba(0, 0, 0, 0.2) 0 0 0 0,
    rgba(0, 0, 0, 0.14) 0 0 0 0,
    rgba(0, 0, 0, 0.12) 0 0 0 0;
  color: rgba(0, 0, 0, 0.37);
  cursor: default;
  pointer-events: none;
}

.button-61:not(:disabled) {
  background-color: #6200ee;
}

.button-61:focus {
  box-shadow:
    rgba(0, 0, 0, 0.2) 0 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0 4px 5px 0,
    rgba(0, 0, 0, 0.12) 0 1px 10px 0;
}

.button-61:active {
  box-shadow:
    rgba(0, 0, 0, 0.2) 0 5px 5px -3px,
    rgba(0, 0, 0, 0.14) 0 8px 10px 1px,
    rgba(0, 0, 0, 0.12) 0 3px 14px 2px;
  background: #a46bf5;
}
.s-methods {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  outline: 0;
  cursor: pointer;
  border: none;
  padding: 0 15px;
  height: 45px;
  line-height: 45px;
  border-radius: 7px;
  font-weight: 400;
  font-size: 16px;
  background: #fff;
  color: #696969;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
  transition:
    background 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;
  font-family: 'Ubuntu', sans-serif;
}
.s-methods:hover {
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 6px 20px rgb(93 93 93 / 23%);
}
</style>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      isSignWithGoogle: false
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
        const response = await fetch('https://chat-b.libyzxy0.repl.co/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      })
      let user = await response.json()
        if(user.code == 200) {
          this.$router.push('/chats')
        }
      }
    },
    handleSubmit() {
      this.login(this.username, this.password)
    },
    googleSignIn() {
      this.isSignWithGoogle = true
    },
    async login(username, password) {
      const response = await fetch('https://chat-b.libyzxy0.repl.co/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      })
      let user = await response.json()
      if (user.code == 200 && user.token) {
        this.$cookie.setCookie('token', user.token, {
          expire: '3d',
          path: '/',
          domain: '',
          secure: '',
          sameSite: ''
        })
        this.$router.push('/chats')
      } else {
        alert('Login failed')
      }
    }
  }
}
</script>
