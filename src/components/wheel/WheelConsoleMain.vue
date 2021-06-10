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
import {ConsoleType} from "@/model/ConsoleType";
import axios from "axios";

@Options({
  components: {
    Nes,
    Sega
  },
  methods: {
    handleConsoleClick(consoleType: ConsoleType) {
      axios.get("http://localhost:8888/v1/consoles/" + consoleType)
      .then(response => {
        this.$emit('gameConsole', response.data)
      });
    }
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