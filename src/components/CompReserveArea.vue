<template>
  <div class="reserve-container">
    <h2 class="reserve-areatitle">{{  }}</h2>
  </div>
</template>

<script lang="ts">
import { ReserveState } from "@/types/reserveState";
import { Tool } from "@/types/tool";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class CompReserveArea extends Vue {
  private currentTool = new Tool(0, "", "", new ReserveState(false, 0, 0, 0, 0, 0))
  private startUsehour = 0;
  private endUsehour = 0;

  created(): void{
    const toolId = Number(this.$route.params.id);
    this.currentTool = this.$store.getters.getToolByID(toolId);
  }
}
</script>

<style scoped>
.reserve-container{
  text-align: left;
  padding: 10px;
  height: 100px;
}
</style>
