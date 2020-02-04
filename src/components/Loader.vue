<template>
  <div class="loading"> </div>
</template>
<style>
.loading{
  height: 5rem;
  width: 5rem;
  border-radius: 100%;
  border-top: 16px solid blue;
  border-right: 16px solid green;
  border-bottom: 16px solid red;
  border-left: 16px solid yellow;
  animation: spin 2s linear infinite;

}
@keyframes spin {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}

</style>
