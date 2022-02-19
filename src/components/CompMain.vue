<template>
  <div>
    <main class="main-container">
      <h2>予約者タイムライン</h2>
      <div v-for="tool of getLentToolList" v-bind:key="tool.id">
        <div>{{ tool.name }}</div>
        <div>{{ getLentalUserById(tool.currentReserveState.userId).name }}</div>
        <div>{{ tool.currentReserveState.startUsehour }} ~ {{ tool.currentReserveState.endUsehour }}</div>
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
