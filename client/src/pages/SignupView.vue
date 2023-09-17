<template>
  <div class="body">
    <h1 class="m-title">Join to Chatify</h1>
    <div class="container">
      <form @submit.prevent="handleSubmit()">
        <div class="view1" :class="view == 1 ? '' : 'hidden'">
          <h1>Terms and conditions</h1>
          <p>
           <h4>Last updated: September 17, 2023</h4> 
<p>
This Privacy Policy outlines the information we collect, how we use it, and the choices you have concerning your personal data when you use our chat application. Your privacy is of utmost importance to us, and we are committed to safeguarding your personal information.
</p>
<h3>1. Information We Collect</h3>
<p>
<b>A</b>. User-Provided Information: We may collect information you provide when you use our application, including but not limited to your name, email address, profile picture, and any messages or content you submit.
</p>
          <p>
<b>B</b>. Automatically Collected Information: We may collect data automatically, such as your IP address, device type, browser type, and usage statistics to improve our service and user experience.
          </p>
<h3>2. How We Use Your Information</h3>
<p>
<b>A</b>. Personalization: We use your data to personalize your experience within the application, including suggesting contacts and content tailored to your preferences.
</p>
          <p>
<b>B</b>. Communication: We use your contact information to facilitate communication within the app, including sending messages and notifications.
          </p>
          <p>
<b>C</b>. Improvements: Your data helps us analyze usage patterns and make improvements to our application, ensuring it remains secure and efficient.
          </p>
          <h3>
            3. Sharing Your Information
          </h3>         
<p>
  <b>A</b>. Third-Party Services: We may share data with third-party services for analytics, advertising, or other purposes. These third parties are bound by their own privacy policies.
</p>
          <p>
<b>B</b>. Legal Obligations: We may disclose your information if required by law or to protect our rights and the safety of others.
</p>
  <h3>4. Data Security</h3>
<p>
We employ industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction.
</p>
          <h3>5. Your Choices</h3>
<p>
<b>A</b>. Account Deletion: You may delete your account at any time through the application settings.
</p>
          <p>
<b>B</b>. Data Access and Correction: You can access and update your personal information through your account settings.
          </p>
          <h3>6. Children's Privacy</h3>
<p>
Our application is not intended for children under the age of 13, and we do not knowingly collect data from individuals under 13 years of age.
</p>
<h3>7. Changes to this Policy</h3>
<p>
We may update this Privacy Policy from time to time. It is your responsibility to review it periodically.
</p>
          <h3>8. Contact Us</h3>
          <p>
If you have questions or concerns about our Privacy Policy, please contact us at [contact@email.com].
          </p>
          <p>
By using our chat application, you consent to the practices described in this Privacy Policy.
          </p>
          </p>
<button class="button-32" type="button" @click="nextView()">Accept and Continue</button>
        </div> 
        <div class="view2" :class="view == 2 ? '' : 'hidden'">
          <div class="inputs">
            <input type="text" placeholder="Enter your First Name">
            <input type="text" placeholder="Enter your Last Name">
          </div>
        </div>
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
.view1 {
  font-family: 'Rubik', sans-serif;
  margin: 20px;
  margin-bottom: 2rem;
}
.view1 p {
  margin: 10px 0;
}
.view1 h1 {
  font-size: 28px;
  font-family: 'Rubik', sans-serif;
  margin-bottom: 0.5rem;
  color: #2dd4c0;
}
.container {
  margin: 10px;
}
.m-title {
  text-align: left;
  font-family: 'Rubik', sans-serif;
  margin: 25px;
  font-size: 23px;
  color: #2dd4c0;
}
form {
  margin-top: 2rem;
  height: 20rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* CSS */
.button-32 {
  background-color: #2dd4c0;
  border-radius: 7px;
  color: #000;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 15px;
  text-align: center;
  transition: 200ms;
  width: 100%;
  box-sizing: border-box;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-bottom: 3rem;
font-family: 'Rubik', sans-serif;
}

.button-32:not(:disabled):hover,
.button-32:not(:disabled):focus {
  outline: 0;
  background:  #2dd4c0;
  box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
}

.button-32:disabled {
  filter: saturate(0.2) opacity(0.5);
  -webkit-filter: saturate(0.2) opacity(0.5);
  cursor: not-allowed;
  }
.inputs {
  display: flex;
  flex-direction: row;
  margin: 10px;
  width: 100%;
}
  input {
margin-inline: 0.5rem;
                padding: 6px 13px;
                font-size: 16px;
                font-weight: 400;
                line-height: 1.5;
                color: #212529;
                background-color: #fff;
                background-clip: padding-box;
                border: 1px solid #ced4da;
                appearance: none;
                border-radius: 4px;
                transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    width: 10rem;
   } 
                input:focus{
                    color: #212529;
                    background-color: #fff;
                    border-color: #86b7fe;
                    outline: 0;
                    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
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
      isSignWithGoogle: false,
      view: 1
    }
  },
  created() {
    this.checklogin()
  },
  methods: {
    nextView() {
    this.view = this.view + 1;
  }, 
  prevView() {
    this.view = this.view - 1;
  },  
    async checklogin() {
      let token = this.$cookie.getCookie('token')
      if (!token) {
        this.$router.push('/signup')
      } else {
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
        if (user.code == 200) {
          //this.$router.push('/chats')
        }
      }
    },
    handleSubmit() {
      this.login(this.username, this.password, this.firstName, this.lastName, this.email)
    },
    googleSignIn() {
      this.isSignWithGoogle = true
    },
    async login(username, password, firstName, lastName, email) {
      const response = await fetch('https://chat-b.libyzxy0.repl.co/auth/signup', {
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