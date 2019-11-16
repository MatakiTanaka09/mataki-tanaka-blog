<template>
  <div class="top__container">
    top
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.top__container {
  margin: 16px;
}

// SP横、タブレット縦
@media screen and (min-width: 481px) {
  .top__container {
    margin: 40px;
  }
}

// デスクトップ、タブレット横
@media screen and (min-width: 769px) {
  .top__container {
  }
}
</style>
