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
    <chatroom-default v-show="!chatroom.name" />
    <chatroom-messages v-if="chatroom" :chatroom="chatroom" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MessagesPane',
  computed: {
    ...mapState({
      chatroom: (state) => state.chat.chatroom,
    }),
  },
}
</script>
