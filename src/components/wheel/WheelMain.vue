<template>
  <div>
        <div class="row p-2 border-top">
          <div class="col-md center-block text-center">
            <WheelView/>
          </div>
        </div>
    <div class="row p-2">
      <div class="col-md">
        <WheelRandom/>
      </div>
    </div>
    <div class="row">
      <div class="col-md center-block text-center p-2">
        <WheelGameCount/>
      </div>
    </div>
    <div class="row border-top">
      <div class="p-4">
        <div class="col-md">
          <WheelConsoleMain/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WheelRandom from "@/components/wheel/WheelRandom";
import WheelGameCount from "@/components/wheel/WheelGameCount";
import WheelConsoleMain from "@/components/wheel/WheelConsoleMain";
import WheelView from "@/components/wheel/WheelView";

export default {
  name: "WheelMain",
  components: {WheelRandom, WheelGameCount, WheelConsoleMain, WheelView}
}
</script>

<style scoped>

</style>