<template>
  <div>
    <aside class="menu">
      
    <ul class="menu-list">
      <li class="menu-list-title"><div><input type="text" v-model="serchText"></div>
    <div class="serch-button">検索</div></li>
      <li class="menu-list-title active">タイムライン</li>
      <li class="menu-list-title">ホーム</li>
      <li class="menu-list-title">設定</li>
    </ul>
  </aside>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompSerchField from "@/components/CompSerchField.vue"
@Component({
  components:{
    CompSerchField,
  }
})
export default class CompSideMenu extends Vue {

}
</script>

<style scoped>
.menu {
  width: 149px;
  background: #eee;
  border: 1px solid gray;
  position: absolute;
}
.menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  cursor: pointer;
}
.menu-list-title {
  border-bottom: 1px solid gray;
  line-height: 40px;
  font-size: 0.8em;
}
.menu-list-title:hover, .active {
  font-size: 1em;
  background-color: pink;
  color: white;
  font-weight: bold;
}
</style>
