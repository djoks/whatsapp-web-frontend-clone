<template>
  <div class="flex flex-col items-center justify-center">
    <img
      src="~/assets/images/defaults/messages.jpg"
      alt=""
      class="object-contain w-80 h-80"
    />
    <span class="text-white opacity-80 text-4xl font-roboto font-light mt-10"
      >Keep your phone connected</span
    >
    <span
      class="
        w-2/3
        text-center text-white
        opacity-70
        text-md
        font-roboto font-light
        mt-5
      "
      >Whatsapp connects to your phone to sync messages. To reduce data usage,
      connect your phone to Wi-Fi.</span
    >
    <span class="w-2/3 h-px bg-outer-space-400 my-10"></span>
    <div class="text-white text-sm font-light">
      <span class="opacity-70">Whatsapp is available for {{ os() }}.</span>
      <a href="#" target="_blank" class="text-primary">Get it here.</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatroomDefault',
  methods: {
    os() {
      switch (this.$ua.os()) {
        case 'Mac OSX':
          return 'Mac'
        case 'Windows':
          return 'Windows'
      }
    },
  },
}
</script>
