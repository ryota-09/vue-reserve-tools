<template>
  <div>
    <main class="main-container">
      <h2>予約者タイムライン</h2>
      <div v-for="tool of getLentToolList" v-bind:key="tool.id">
        <div>{{ tool.name }}</div>
        <div>{{ getLentalUserById(tool.currentReserveState.userId).name }}  ( {{ getDepName(getLentalUserById(tool.currentReserveState.userId).depId) }} )</div>
        <div>{{ tool.currentReserveState.startUsehour }}時 ~ {{ tool.currentReserveState.endUsehour }}時</div>
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
  
  get getLentToolList(): Array<Tool>{
    return this.$store.getters.getLentToolList;
  }

}
</script>

<style scoped>
.main-container {
  width: calc(100% - 150px);
  margin: 0;
  padding: 0 30px 0 160px;
}
</style>
