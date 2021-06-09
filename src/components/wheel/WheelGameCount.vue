<template>
  <div class="font-monospace text-info">
    <div v-if="gameConsole.consoleType">
      {{ gameConsole.consoleType }}&nbsp;:&nbsp;{{ gameConsole.gameCount }} games
    </div>
    <div v-else>Select console</div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {GameConsole} from "@/model/GameConsole";

@Options({
  props: {
    gameConsole: GameConsole
  }
})
export default class WheelGameCount extends Vue {
}
</script>
