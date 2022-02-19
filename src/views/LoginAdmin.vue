<template>
  <div class="register-admin">
    <div class="header">
      <h1>Reserve Tools</h1>
    </div>
    <div class="register-field">
      <h2 class="title">ログインページ</h2>
      <div class="user-form">
        <form action="post">
          <div>
            <label for="mailaddress">メールアドレス: </label>
            <input id="mailaddress" type="text" v-model="mailAddress">
          </div>
          <div>
            <label for="password">パスワード: </label>
            <input id="password" type="text" v-model="password">
          </div>
          <div class="register-button" v-on:click="loginAdmin">ユーザー登録</div>
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
export default class LoginAdmin extends Vue {
  private mailAddress = "";
  private password = "";

  loginAdmin(): void{
    this.$router.push("/top");
  }
}
</script>

<style scoped>

</style>
