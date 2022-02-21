<template>
  <div class="tool-detail">
    <CompHeader></CompHeader>
      <div class="main">
        <CompSideMenu></CompSideMenu>
        <CompMain2></CompMain2>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompHeader from "@/components/CompHeader.vue";
import CompSideMenu from "@/components/CompSideMenu.vue";
import CompMain2 from "@/components/CompMain2.vue";
import CompFooter from "@/components/CompFooter.vue";

@Component({
  components: {
    CompMain2,
    CompSideMenu,
    CompHeader,
    CompFooter
  }
})
export default class toolDetail extends Vue {

}
</script>

<style scoped>

</style>
