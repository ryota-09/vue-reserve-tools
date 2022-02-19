<template>
  <div class="top">
    <CompHeader></CompHeader>
      <div class="main">
        <CompSideMenu></CompSideMenu>
        <CompMain></CompMain>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompHeader from "@/components/CompHeader.vue";
import CompFooter from "@/components/CompFooter.vue";
import CompSideMenu from "@/components/CompSideMenu.vue";
import CompMain from "@/components/CompMain.vue";
@Component({
  components: {
    CompHeader,
    CompFooter,
    CompSideMenu,
    CompMain
  }
})
export default class Top extends Vue {

}
</script>

<style scoped>
</style>
