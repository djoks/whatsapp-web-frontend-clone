<template>
  <div class="bg-bunker flex flex-col border-r border-outer-space-400">
    <profile-bar />
    <chatroom-search />

    <div class="'flex-grow overflow-y-scroll">
      <chatroom-item
        :chatroom="chatroom"
        v-for="chatroom in chatrooms"
        :key="chatroom.id"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatroomsPane',
  data() {
    return {
      chatrooms: [],
    }
  },
  mounted() {
    this.getChatrooms()
  },
  methods: {
    getChatrooms() {
      this.$axios
        .get('data/chatrooms.json')
        .then((res) => console.log((this.chatrooms = res.data)))
        .catch((err) => console.log(err))
    },
  },
}
</script>
