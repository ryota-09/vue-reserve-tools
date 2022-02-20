<template>
  <div class="reserve-list">
    <h2>利用者スケジュール</h2>
    <hr>
    <div class="sameday-reserve-list" v-for="day of getStartDayArray" v-bind:key="day">
      <div>2月{{ day }}日</div>
      <div v-for="(reserve,index) of sameDayReserveList(day)" v-bind:key="index">
        {{ getLentalUserById(reserve.userId).name }} (  {{ getDepName(getLentalUserById(reserve.userId).depId) }} )
        {{ reserve.startUsehour }}時 ~ {{ reserve.endUsehour }}時
      </div>
      <hr>
    </div>
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
  private initReserveState = new ReserveState(false, 0, 0, 0, 0, 0);
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

  get getStartDayArray(): Array<number>{
    let newArray = new Array<number>();
    if(this.currentTool.reserveArray){
      for(let reserve of this.currentTool.reserveArray){
        if(reserve && !newArray.find(value => value === reserve.startUseDay)){
          newArray.push(reserve.startUseDay);
        }
      }
    }
    console.log(newArray)
    return newArray;
  }

  sameDayReserveList(startUseDay: number): Array<ReserveState>{
    console.log("@@@@@@  1  @@@@@@@")
    if(this.currentTool.reserveArray){
      for(let reserve of this.currentTool.reserveArray){
        if(reserve.startUseDay === startUseDay){
          this.initReserveState = reserve
          this.initArray.push(this.initReserveState)
        }
      }
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
