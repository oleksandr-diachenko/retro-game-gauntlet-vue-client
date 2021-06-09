<template>
  <div>
    <h2 v-if="game.name" class="text-danger font-monospace">
      {{ game.name }}&nbsp;({{ game.consoleType }})({{ game.year }})
    </h2>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  props: ['game']
})
export default class WheelView extends Vue {
}
</script>
