<template>
  <div class="register-admin">
    <div class="header">
      <h1>Reserve Tools</h1>
    </div>
    <div class="register-field">
      <h2 class="title">ユーザー登録</h2>
      <div class="user-form">
        <form action="post">
          <div>
            <label for="name">名前: </label>
            <input id="name" type="text" v-model="userName">
          </div>
          <div>
            <span>部署: </span>
            <select v-model="userDepId">
              <option value="0">営業部</option>
              <option value="1">人事部</option>
              <option value="2">開発部</option>
              <option value="3">広報部</option>
            </select>
          </div>
          <div>
            <label for="mailaddress">メールアドレス: </label>
            <input id="mailaddress" type="text" v-model="mailAddress">
          </div>
          <div>
            <label for="password">パスワード: </label>
            <input id="password" type="text" v-model="password">
          </div>
          <div class="register-button" v-on:click="registerAdmin">ユーザー登録</div>
        </form>
      </div>
    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class RegisterAdmin extends Vue {
  private userName = "";
  private userDepId = 0;
  private mailAddress = "";
  private password = "";

  registerAdmin():void{
    this.$router.push("/top")
  }
}
</script>

<style scoped>

</style>
