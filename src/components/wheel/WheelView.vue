<template>
  <div>
    <h2 v-if="this.game.year" class="text-danger font-monospace">
      {{ game.name }}&nbsp;({{ game.consoleType }})({{ game.year }})
    </h2>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {Game} from "@/model/Game";

@Options({
  props: {
    game: Game
  }
})

export default class WheelView extends Vue {
}
</script>
