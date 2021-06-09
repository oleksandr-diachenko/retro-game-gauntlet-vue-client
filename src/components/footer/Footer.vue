<template>
  <footer class="page-footer font-small bg-light mt-5">
    <div class="pb-5 pt-5">
      <div id="social-network" class="d-flex justify-content-center">
        <a id="facebook" class="nav-link waves-effect waves-dark"
           href="https://www.facebook.com/aleksander.diachenko">
          Facebook
        </a>
        <a id="linkedin" class="nav-link waves-effect waves-dark"
           href="https://www.linkedin.com/in/alexander-diachenko/">
          LinkedIn
        </a>
        <a id="github" class="nav-link waves-effect waves-dark"
           href="https://github.com/oleksandr-diachenko">
          Github
        </a>
        <a id="telegram" class="nav-link waves-effect waves-dark" href="https://t.me/Oleksandr_Diachenko">
          Telegram
        </a>
        <a id="email" class="nav-link waves-effect waves-dark" href="mailto:mail.positiv@gmail.com">
          Email
        </a>
      </div>
    </div>
    <div class="footer-copyright text-center py-3">© {{ year }} Copyright:
      <a href="https://github.com/oleksandr-diachenko">Oleksandr Diachenko</a>
    </div>
  </footer>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
})
export default class Footer extends Vue {
}
</script>
