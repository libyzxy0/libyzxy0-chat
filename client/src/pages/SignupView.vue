<template>
  <div class="container" :class="view == 1 ? '' : 'hidden'">
    <h1>Let's Create Your Account 🎉</h1>
    <div class="input-container">
      <input v-model="firstName" class="short" type="text" placeholder="First Name"/>
      <input v-model="lastName" class="short" type="text" placeholder="Last Name"/>
    </div>
    <div class="center"><button @click="nextView()" class="next">Continue</button></div>
    <div class="center"><p class="ask">Have an account? <a href="/login">Login</a></p></div>
  </div>
  <div class="container" :class="view == 2 ? '' : 'hidden'">
    <h1>Enter your Birthday🎂</h1>
    <div class="input-container">
      <input v-model="birthday" @input="birthday.replace(/[^0-9-]/g, '')" class="long" type="text" placeholder="Birthday (MM/DD/YYYY)"/>
    </div>
    <div class="center"><button @click="nextView()" class="next">Continue</button></div>
    <div class="center"><p class="ask">Have an account? <a href="/login">Login</a></p></div>
  </div>
  <div class="container" :class="view == 3 ? '' : 'hidden'">
    <h1>Enter your Username</h1>
    <div class="input-container">
      <input v-model="username" class="long" type="text" placeholder="Username"/>
    </div>
    <div class="center"><button @click="nextView()" class="next">Continue</button></div>
    <div class="center"><p class="ask">Have an account? <a href="/login">Login</a></p></div>
  </div>
  <div class="container" :class="view == 4 ? '' : 'hidden'">
    <h1>Enter your Email😉</h1>
    <div class="input-container">
      <input v-model="email" class="long" type="email" placeholder="Email"/>
    </div>
    <div class="center"><button @click="nextView()" class="next">Continue</button></div>
    <div class="center"><p class="ask">Have an account? <a href="/login">Login</a></p></div>
  </div>
  
    <div class="container" :class="view == 5 ? '' : 'hidden'">
  <h1>Enter your Password<b>{{ isShowPassword ? '🙊' : '🙈' }}</b></h1>
  <div class="input-container">
    <input v-model="password" class="long" :type="isShowPassword ? 'text' : 'password'" placeholder="Password"/>
    <div class="password-icon">
      <button @click="toogleShowHidePass()">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="isShowPassword ? 'hidden' : ''">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="isShowPassword ? '' : 'hidden'">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg></button>
    </div>
  </div>
  <div class="center"><button @click="nextView()" class="next">Create my Account</button></div>
      <div class="center"><p class="ask">Have an account? <a href="/login">Login</a></p></div>
</div>
</template>
<style>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
}
.ask {
  position: fixed;
  bottom: 4rem;
  font-family: 'Ubuntu', sans-serif;
  color: #2dd4c0;
}
.input-container {
  height: auto;
  width: 100%;
  margin: auto;
  padding: 1rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.short {
  border: 1.5px solid gainsboro;
  border-radius: 5px;
  padding: 12px 13px;
  width: 50%;
  margin: 0 5px;
  font-size: 17px;
  font-family: 'Ubuntu', sans-serif;
}
.short:focus, .short:hover {
  outline: none;
}
.long {
  border: 1.5px solid gainsboro;
  border-radius: 5px;
  padding: 12px 13px;
  width: 100%;
  margin: 0 5px;
  font-size: 17px;
  font-family: 'Ubuntu', sans-serif;
}
.long:focus, .long:hover {
  outline: none;
}
h1 {
  text-align: center;
  font-family: 'Shantell Sans', cursive;
  font-size: 24px;
  margin-top: 3rem;
  color: #2dd4c0;
}
.next {
  background-color: #2dd4c0;
  border: none;
  width: 90%;
  height: 2.5rem;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  font-size: 16px;
  font-family: 'Ubuntu', sans-serif;
}
.password-icon button {
  position: absolute;
  width: 1.5rem;
  height: auto;
  border: none;
  background-color: transparent;
  right: 2.3rem;
  stroke: gainsboro;
  top: 8.7rem;
}
</style>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      firstName: '',
      lastName: '', 
      email: '',
      birthday: '',
      view: 1, 
      isShowPassword: false
    }
  },
  created() {
    this.checklogin()
  },
  methods: {
    nextView() {
    if(this.view == 1) {
      if(this.firstName && this.lastName) {
        this.view = this.view + 1;
      } 
    }
    if(this.view == 2) {
      var dateRegex = /^(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[01])-\d{4}$/;
      if(this.birthday) {
        if(dateRegex.test(this.birthday)) {
          this.view = this.view + 1;
        } else {
          alert('Invalid date of birth!');
        }    
      }
    }  
    if(this.view == 3) {
      if(this.username) {
        const regex = /^\S+$/;
        if(regex.test(this.username)) {
          this.view = this.view + 1;
        } else {
          alert('Invalid username!');
        }
      } 
    }
    if(this.view == 4) {
      if(this.email) {
        this.view = this.view + 1;
      } 
    }
    if(this.view == 5) {
      if(this.password) {
      this.login(this.username, this.password, this.firstName, this.lastName, this.email, this.birthday);       
      this.view = this.view + 1;
      } 
    }
  }, 
  prevView() {
    this.view = this.view - 1;
  },  
    toogleShowHidePass() {
      this.isShowPassword = !this.isShowPassword;
    }, 
    async checklogin() {
      let token = this.$cookie.getCookie('token')
      if (!token) {
        this.$router.push('/signup')
      } else {
        const response = await fetch('https://libyzxy0-chat.libyzxy0.repl.co/auth/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            token: this.$cookie.getCookie('token')
          })
        })
        let user = await response.json()
        if (user.code == 200) {
          //this.$router.push('/chats')
        }
      }
    }, 
    async login(username, password, firstName, lastName, email, birthday) {
      const response = await fetch('https://libyzxy0-chat.libyzxy0.repl.co/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password,
          firstName,
          lastName, 
          email, 
          birthday
        })
      })
      let user = await response.json()
      if (user.code == 200) {
        alert("Congrats, your account has been created!, Let's login!")
        this.$router.push('/login')
      } else {
        alert('Account creation failed')
      }
    }
  }
}
</script>