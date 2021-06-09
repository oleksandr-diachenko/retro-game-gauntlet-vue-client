<template>
  <div id="console">
    <Nes @consoleType="handleConsoleClick($event)"/>
    <Sega @consoleType="handleConsoleClick($event)"/>
  </div>
</template>


<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Nes from './console/Nes.vue';
import Sega from './console/Sega.vue';

@Options({
  components: {
    Nes,
    Sega
  },
  methods: {
    handleConsoleClick(consoleType: string) {
      //TODO retrieve data from server
      const gameConsole = {
        consoleType: consoleType,
        gameCount: 1234
      }
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