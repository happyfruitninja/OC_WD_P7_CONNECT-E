<template>
 
    <div id="nav">
      <div class="container">
        <router-link :to="{ name: 'ProfilePage' }">ProfilePage</router-link>
        <router-link :to="{ name: 'PrivateChat' }">PrivateChat</router-link>
      </div>
    </div>
    <router-view />
  <div id="chat_group">
<div class="chatDisplay">
    This is the group chat display    
</div>
<div class="post">
    this is where user posts
</div>
  </div>
</template>
