<template>
  <div class="top">
    <CompHeader></CompHeader>
      <div class="main">
        <CompSideMenu></CompSideMenu>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompHeader from "@/components/CompHeader.vue";
import CompFooter from "@/components/CompFooter.vue";
import CompSideMenu from "@/components/CompSideMenu.vue";
@Component({
  components: {
    CompHeader,
    CompFooter,
    CompSideMenu
  }
})
export default class Top extends Vue {

}
</script>

<style scoped>
.main {
  display: flex;
}
</style>
