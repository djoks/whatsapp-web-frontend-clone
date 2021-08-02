<template>
  <div
    class="
      bg-ebony-clay
      flex flex-col
      items-center
      justify-center
      overflow-hidden
    "
  >
    <chatroom-default v-show="!chatroom" />
    <chatroom-messages v-if="chatroom" :chatroom="chatroom" />
  </div>
</template>

<script>
export default {
  name: 'MessagesPane',
}
</script>
