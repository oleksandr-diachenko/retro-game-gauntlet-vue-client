<template>
  <div>
    <Header/>
    <div id="app" class="container">
      <WheelMain/>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import WheelMain from './components/wheel/WheelMain.vue';
import Header from './components/header/Header.vue';

@Options({
  components: {
    WheelMain,
    Header
  },
})
export default class App extends Vue {}
</script>
