<template>
    <div class="spin"></div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.spin {
  display: block;
  width: 100px;
  height: 100px;
  margin: 30px auto;
  border: 10px solid transparent;
  border-radius: 50%;
  border-top-color: var(--clr-palette-1);
  animation: spin 1s ease infinite;
}

@keyframes spin {
  to { -webkit-transform: rotateZ(360deg);  }
}
</style>