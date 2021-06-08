<template>
  <div id="console">
    <Nes @consoleType="handleConsoleClick($event)"/>
    <Sega @consoleType="handleConsoleClick($event)"/>
  </div>
</template>

<script>
import Nes from "@/components/wheel/console/Nes";
import Sega from "@/components/wheel/console/Sega";

export default {
  components: {Sega, Nes},
  methods: {
    handleConsoleClick(consoleType) {
      //TODO retrieve data from server
      const gameConsole = {
        consoleType: consoleType,
        gameCount: 1234
      }
      this.$emit('gameConsole', gameConsole)
    },
  }
}
</script>