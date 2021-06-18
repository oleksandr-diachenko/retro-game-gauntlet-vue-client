<template>
  <div>
    <div class="text-danger font-monospace">
      <label v-if="isRollingGame">Rolling...</label>
      <h2 v-else-if="!isRollingGame && this.game.year">
        {{ game.name }}&nbsp;({{ game.consoleType }})({{ game.year }})
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {Game} from "@/model/Game";

@Options({
  props: {
    game: Game,
    isRollingGame: Boolean
  }
})

export default class WheelView extends Vue {
}
</script>
