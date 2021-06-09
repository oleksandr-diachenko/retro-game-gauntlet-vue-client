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

<style>
.console-button {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 75px;
  margin: 20px;
}
.console-button:hover {
  transform: scale(1.2);
}
</style>