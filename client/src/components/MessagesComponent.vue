<script setup>
  defineProps({
    user: { type: String, required: true }, 
    text: { type: String, required: true }, 
    username: { type: String, required: true }, 
    time: { type: String, required: true }, 
  })
</script>

<template>
  <div :class="user == 'me' ? 'me' : 'other'">
      <label :class="user == 'me' ? 'me' : 'other'">{{ username }} • {{ time }}</label>
      <li :class="user == 'me' ? 'txt-me' : 'txt-other'">{{ text }}</li>
  </div>
</template>

<style scoped>
/* Base styles for both messages */
label {
  font-size: 12px;
}
.me {
    font-family: 'Shantell Sans', cursive;
    margin-right: 5px;
    clear: both;
    float: right;
    position: relative;
    overflow-wrap: break-word;
    word-break: break-all;
    max-width: 80vw;
}
.txt-me {
    color: #1A1A1A;
    background-color: #2DD4C0;
    width: auto;
    margin-right: 5px;
    padding: 8px 18px 8px 18px;
    border-radius: 30px 30px 0px 30px;
    clear: both;
    float: right;
    position: relative;
    overflow-wrap: break-word;
    word-break: break-all;
    max-width: 80vw;
    hyphens: auto;
    font-family: 'Shantell Sans', cursive;
}
.other {
    font-family: 'Shantell Sans', cursive;
    margin-left: 5px;
    clear: both;
    float: left;
    position: relative;
    overflow-wrap: break-word;
    word-break: break-all;
    max-width: 80vw;
}
.txt-other {
    color: #ffffff;
    background-color: #525252;
    width: auto;
    margin-right: 5px;
    padding: 8px 18px 8px 18px;
    border-radius: 30px 30px 30px 0px;
    clear: both;
    float: left;
    position: relative;
    overflow-wrap: break-word;
    word-break: break-all;
    max-width: 80vw;
    hyphens: auto;
    font-family: 'Shantell Sans', cursive;
} 
</style>