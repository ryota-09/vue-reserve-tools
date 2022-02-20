<template>
  <div>
    <header class="header">
      <h1 class="logo">Reserve Tools</h1>
      <div class="sub">備品予約管理システム</div>
    </header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class CompHeader extends Vue {

}
</script>

<style scoped>
.header {
  background-color: pink;
  margin: 0 0 10px 0;
  width: 100%;
  height: 60px;
  z-index: 1;
  display: flex;
}
.logo {
  display: flex;
  justify-content: left;
  margin: 0;
  font-family:initial;
  line-height: 60px;
  padding-left: 10px;
}
.sub {
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 30px 0 0 40px;
}
</style>
