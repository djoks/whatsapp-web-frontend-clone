<template>
  <div class="py-2 border-b border-outer-space-500">
    <div
      class="flex bg-ebony-clay-400 py-1 px-3 mx-5 rounded-full overflow-hidden"
    >
      <button v-show="!isSearching" @click="toggleSearch()">
        <img
          src="~/assets/images/icons/profile-search.svg"
          alt=""
          class="object-contain"
        />
      </button>
      <button
        class="animated rotateIn"
        v-show="isSearching"
        @click="toggleSearch()"
      >
        <img
          src="~/assets/images/icons/profile-search-back.svg"
          alt=""
          class="object-contain"
        />
      </button>
      <input
        ref="search"
        type="text"
        v-model="keyword"
        placeholder="Search or start new chat"
        class="
          flex flex-grow
          bg-ebony-clay-400
          ml-5
          focus:outline-none
          text-sm text-white
        "
      />
      <button class="animated fadeIn" v-show="keyword" @click="clearSearch()">
        <img
          src="~/assets/images/icons/search-clear.svg"
          alt=""
          class="object-contain"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatRoomSearch',
  data() {
    return {
      isSearching: false,
      keyword: null,
    }
  },
  methods: {
    toggleSearch() {
      this.isSearching = !this.isSearching
      if (this.isSearching) {
        this.$refs.search.focus()
      } else {
        this.$refs.search.blur()
      }
    },
    clearSearch() {
      this.keyword = null
    },
  },
}
</script>
