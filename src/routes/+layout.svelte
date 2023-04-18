<script lang="ts">
  import "../app.scss";
</script>

<body>
  <div class="main">
    <slot />
  </div>
</body>

<style lang="scss">
  body {
    height: 100vh;
    margin: 0;
    // overflow: hidden;
  }
  .main {
    border: 3px;
    box-sizing: border-box;
  }
</style>
