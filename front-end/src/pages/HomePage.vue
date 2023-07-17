<template>
  <div id="nav">
    <div class="container">
      <router-link :to="{ name: 'ProfilePage' }">ProfilePage</router-link>
    </div>
  </div>

  <div id="chat_group">
    <div class="chatDisplay">This is the group chat display</div>
    <div class="post">this is where user posts</div>
  </div>
</template>

<style>
#nav {
  background-color: lightgreen;
}
</style>
