<template>
  <div class="reserve-container">
    <h2 class="reserve-area-title">{{ currentTool.name }}の使用予約</h2>
    <form action="post">
      <div class="reserve-term">
        <div>予約日時の入力</div>
          <div class="start-day"><input type="text" size="5" v-model.number="startUseDay"> 日</div>
          <div class="reserve-hour"><input type="text" size="5" v-model.number="startUsehour"> 時 ~ <input type="text" size="5" v-model.number="endUsehour"> 時</div>
          <div class="reserve-button"> 予約 </div>
      </div>
    </form>
    <span class="image-area"><img v-bind:src="currentTool.image" alt=""></span>
  </div>
</template>

<script lang="ts">
import { ReserveState } from "@/types/reserveState";
import { Tool } from "@/types/tool";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class CompReserveArea extends Vue {
  private currentTool = new Tool(0, "", "", new ReserveState(false, 0, 0, 0, 0, 0))
  private startUsehour = "";
  private endUsehour = "";
  private startUseDay = "";
  private endUsehDay = "";

  created(): void{
    const toolId = Number(this.$route.params.id);
    this.currentTool = this.$store.getters.getToolByID(toolId);
  }
}
</script>

<style scoped>
.reserve-container{
  text-align: left;
  padding: 0 10px;
  flex: 1;
  height: 180px;
}
.reserve-area-title{
  margin: 0;
}
img{
  margin: 10px;
  width: 100px;
}
.reserve-term {
  margin-top: 10px;
  flex-direction: column;
  width: calc(100% - 100px);
  position: absolute;
  left: 140px;
}
.reserve-button {
  text-align: right;
  margin: 20px 0 10px 120px;
  display: inline-block;
  background: pink;
  border-radius: 5px;
  color: black;
  padding: 5px 10px;
  cursor: pointer;
}
.reserve-button:hover {
  background: red;
}
.reserve-button:active {
  background: red;
}
</style>
