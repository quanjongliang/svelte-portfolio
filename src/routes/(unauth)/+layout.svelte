<script lang="ts">
  export const ssr = true;
</script>

<div class="layout-main">
  <!-- <header>Hello header</header> -->
  <div>
    <slot />
  </div>
  <!-- <footer>Hello footer</footer> -->
</div>

<style lang="scss">
  .layout-main {
    height: 100vh;
  }
</style>
