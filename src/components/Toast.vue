<template>
  <transition name="toast">
    <div  :class="['toast', context]"> {{message}} </div>
  </transition>
</template>
<script>
export default {
  name: 'Toast',
  props: ['message', 'context']
}
</script>
<style lang="">

</style>
