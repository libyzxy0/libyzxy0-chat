<template>
  <div class="body">
    <div class="container">
      <h1>Login</h1>
      <form>
        <div class="input-group">
          <label for="username">Username</label>
          <input type="text" name="username" placeholder="Enter username" />
        </div>
        <div class="input-group">
          <label for="username">Password</label>
          <input type="text" name="password" placeholder="Enter password" />
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
.container {
  margin: 30px;
  display: grid;
  place-items: center;
  font-family: 'Shantell Sans', cursive;
}
form {
  margin-top: 5rem;
  height: 20rem;
  width: 19rem;
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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  height: 2.8rem;
  border-radius: 8px;
  padding: 10px;
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
}
input:focus {
  outline: none;
}
</style>
