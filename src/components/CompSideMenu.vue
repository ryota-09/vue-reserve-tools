<template>
  <div>
    <aside class="menu">
      <ul class="menu-list">
        <li class="menu-list-title"><div><input type="text" size="15" v-model="serchText"></div>
        <div class="serch-button">検索</div></li>
      </ul>
    <ul class="menu-list">
      <li class="menu-list-title" v-for="tool of getToolList" v-bind:key="tool.id">
        <router-link class="menu-link" v-bind:to="'/toolDetail/' + tool.id">{{ tool.name }}</router-link>
      </li>
    </ul>
  </aside>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompSerchField from "@/components/CompSerchField.vue"
import { Tool } from "@/types/tool";
@Component({
  components:{
    CompSerchField,
  }
})
export default class CompSideMenu extends Vue {
  private serchText = "";
  get getToolList(): Array<Tool>{
    return this.$store.getters.getToolList;
  }
}
</script>

<style scoped>
.menu-link{
  text-decoration: none;
  color: black;
}
.menu-link:hover{
  text-decoration: none;
}
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
  font-weight: bold;
}
</style>
