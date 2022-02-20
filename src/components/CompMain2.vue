<template>
  <div class="main2">
    <CompReserveArea></CompReserveArea>
    <div class="devider"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompReserveArea from "@/components/CompReserveArea.vue";

@Component({
  components: {
    CompReserveArea,
  }
})
export default class CompMain2 extends Vue {

}
</script>

<style scoped>
.main2 {
  width: calc(100% - 150px);
  padding: 0 30px 0 0;
  flex: 1;
  position: absolute;
  left: 160px;
}
.devider {
  margin-right: 20px;
  border-top: 5px solid #ccc;
}
</style>
