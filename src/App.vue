<template>
  <div>
    <Header/>
    <div id="app" class="container">
      <WheelMain/>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import WheelMain from './components/wheel/WheelMain.vue';
import Header from './components/header/Header.vue';
import Footer from "@/components/footer/Footer.vue";

@Options({
  components: {
    Footer,
    WheelMain,
    Header
  },
})
export default class App extends Vue {}
</script>
