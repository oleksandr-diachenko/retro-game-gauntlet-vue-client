<template>
  <div class="font-monospace text-info">
    <label v-if="isGameCountLoading">Loading...</label>
    <div v-if="gameConsole.consoleType && !isGameCountLoading">
      {{ gameConsole.consoleType }}&nbsp;:&nbsp;{{ gameConsole.gameCount }} games
    </div>
    <div v-if="!isGameCountLoading && !gameConsole.consoleType">Select console</div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {GameConsole} from "@/model/GameConsole";

@Options({
  props: {
    gameConsole: GameConsole,
    isGameCountLoading: Boolean
  },
  computed: {
    isLoad() {
      return true
    }
  }
})
export default class WheelGameCount extends Vue {
}
</script>
