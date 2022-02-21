<template>
  <div class="reserve-list">
    <h2>利用者スケジュール</h2>
      <div v-for="(reserve,index) of sameDayReserveList" v-bind:key="index">
        {{ reserve.startUseDay }}日
        {{ getLentalUserById(reserve.userId).name }} (  {{ getDepName(getLentalUserById(reserve.userId).depId) }} )
        {{ reserve.startUsehour }}時 ~ {{ reserve.endUsehour }}時
      </div>
      <hr>
  </div>
</template>

<script lang="ts">
import { ReserveState } from "@/types/reserveState";
import { Component, Vue } from "vue-property-decorator";
import { Tool } from "@/types/tool";
import { User } from "@/types/user";
@Component
export default class CompReserveList extends Vue {
  private currentTool = new Tool(0, "", "", []);
  private depName = "";
  private initArray = new Array<ReserveState>();

  created(): void{
    const toolId = Number(this.$route.params.id);
    this.currentTool = this.$store.getters.getToolByID(toolId);
  }

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

  // get getStartDayArray(): Array<number>{
  //   let newArray = new Array<number>();
  //   if(this.currentTool.reserveArray){
  //     for(let reserve of this.currentTool.reserveArray){
  //       if(reserve && !newArray.find(value => value === reserve.startUseDay)){
  //         newArray.push(reserve.startUseDay);
  //       }
  //     }
  //   }
  //   console.log(newArray)
  //   return newArray;
  // }

  get sameDayReserveList(): Array<ReserveState>{
    console.log("@@@@@@  1  @@@@@@@")
    if(this.currentTool.reserveArray){
      this.initArray = this.currentTool.reserveArray.sort(function( a:ReserveState, b:ReserveState ){
        if( a.startUseDay < b.startUseDay){
          return -1;
        } else {
          return 1;
        }
      });
    }
    return this.initArray;
  }

   getLentalUserById(userId: number): User{
    return this.$store.getters.getUserByID(userId)
  }
}
</script>

<style scoped>
.reserve-list {
  margin: 10px;
}
</style>
