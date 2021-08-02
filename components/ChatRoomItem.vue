<template>
  <div
    class="
      w-full
      flex flex-row
      items-center
      pl-4
      pr-1
      overflow-hidden
      hover:cursor-pointer
      hover:bg-outer-space-400
    "
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <img :src="chatroom.iconUrl" alt="" class="w-12 h-12 rounded-full" />
    <div
      class="
        flex flex-row flex-grow
        w-full
        ml-4
        py-3
        border-b border-outer-space-500
      "
    >
      <div class="flex flex-col">
        <span class="text-white opacity-80">{{ chatroom.name }}</span>
        <div class="flex flex-row">
          <span
            v-show="chatroom.lastPoster"
            class="text-white text-sm opacity-60"
            >{{ chatroom.lastPoster }}:</span
          >
          <span
            class="text-white text-sm opacity-60"
            :class="{ 'ml-2': chatroom.lastPoster }"
            >{{ chatroom.lastMessage }}</span
          >
        </div>
      </div>
      <div class="flex flex-col pr-3 ml-auto">
        <span
          class="text-xs ml-auto"
          :class="{
            'text-primary': chatroom.newMessageCount > 0,
            'text-white opacity-60': chatroom.newMessageCount == 0,
          }"
          >{{ chatroom.lastMessageAt }}</span
        >
        <div class="flex flex-row items-center space-x-4 mt-2 ml-auto">
          <button v-show="chatroom.isMuted">
            <img
              src="~/assets/images/icons/muted.svg"
              alt=""
              class="object-contain w-4 h-4 opacity-50"
            />
          </button>
          <div
            v-show="chatroom.newMessageCount > 0"
            class="
              inline-flex
              items-center
              justify-center
              px-2
              py-1
              text-xs
              leading-none
              bg-primary
              rounded-full
            "
          >
            {{ chatroom.newMessageCount }}
          </div>
          <button v-show="hover" class="animate fadeIn">
            <img
              src="~/assets/images/icons/arrow-down.svg"
              alt=""
              class="object-contain w-3 h-3 opacity-50"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatroomItem',
  props: ['chatroom'],
  data() {
    return {
      hover: false,
    }
  },
}
</script>
