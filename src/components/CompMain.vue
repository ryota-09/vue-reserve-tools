<template>
  <div>
    <main class="main-container">
      <h2>予約者タイムライン</h2>
      <div v-for="tool of getReserveToolList" v-bind:key="tool.id">
        <div class="tool-title">{{ tool.name }}</div>
        <div v-for="(reserve,index) of tool.reserveArray" v-bind:key="index">
        <div>{{ getLentalUserById(reserve.userId).name }}  ( {{ getDepName(getLentalUserById(reserve.userId).depId) }} )<span>  {{ reserve.startUsehour }}時 ~ {{ reserve.endUsehour }}時</span></div>
        </div>
        <hr>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Tool } from "@/types/tool";
import { User } from "@/types/user";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CompMain extends Vue {
  private depName = "";

  getDepName(depId: number): string{
    if (depId === 0){
      this.depName = "営業部"
    } else if( depId === 1){
      this.depName = "人事部"
    } else if( depId === 2){
      this.depName = "開発部"
    } else if( depId === 3){
      this.depName = "広報部"
    }
    return this.depName
  }

  getLentalUserById(userId: number): User{
    return this.$store.getters.getUserByID(userId)
  }
  
  get getReserveToolList(): Array<Tool>{
    return this.$store.getters.getReserveToolList;
  }

}
</script>

<style scoped>
.main-container {
  width: calc(100% - 150px);
  margin: 0;
  padding: 0 30px 0 160px;
}
.tool-title {
  padding: 5px 0;
  width: 150px;
  text-align: center;
  border: 2px solid pink;
  display: inline-block;
}
</style>
