<template>
  <div id="console">
    <Nes/>
    <Sega/>
  </div>
</template>

<script>
import Nes from "@/components/wheel/console/Nes";
import Sega from "@/components/wheel/console/Sega";

export default {
  name: "WheelConsoleMain",
  components: {Sega, Nes}
}
</script>

<style scoped>

</style>