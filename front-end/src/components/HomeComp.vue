<template>
  <div id="chatGroup">
    <div class="chatDisplay">
      BOX
    </div>
    <div>
      <div class="post">
        <input type="text" />
        <div id="buttons">
          <button v-on="click" id="attach">Attach</button>
          <button v-on="click" id="post">Post</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
<style>

.chatGroup {
  width:60%;
  height: 50%;
  background-color: pink;
}
.chatDisplay {
  margin: 10px;
  border: 1px solid lightgrey;
  width: 60%;
  height: 800px;
}
.post {
  display: flex;
  flex-direction: row;
 }
 .post input {
  width: 100%;
 }
#buttons {
  display: flex;
  flex-direction: column;
  width: 100px;
}
</style>
