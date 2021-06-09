<template>
  <div id="console">
    <Nes @consoleType="handleConsoleClick"/>
    <Sega @consoleType="handleConsoleClick"/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Nes from './console/Nes.vue';
import Sega from './console/Sega.vue';
import {GameConsole} from "@/model/GameConsole";
import {ConsoleType} from "@/model/ConsoleType";

@Options({
  components: {
    Nes,
    Sega
  },
  methods: {
    handleConsoleClick(consoleType: ConsoleType) {
      //TODO retrieve data from server
      let gameConsole = new GameConsole(consoleType, 1234);
      this.$emit('gameConsole', gameConsole)
    },
  }
})
export default class WheelConsoleMain extends Vue {
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