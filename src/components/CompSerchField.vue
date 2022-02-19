<template>
  <div class="serch-field">
    <div><input type="text" v-model="serchText"></div>
    <div class="serch-button">検索</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class CompSerchField extends Vue {
  private serchText = "";
}
</script>

<style scoped>
.serch-field {
  display: flex;
  justify-content: center;
  position: fixed;
  width: 149px;
  height: 60px;
  background: #eee;
  border: 1px solid gray;
  position: absolute;
}
</style>
