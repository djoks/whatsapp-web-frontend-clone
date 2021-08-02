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
      chatrooms: [
        {
          cid: 1,
          iconUrl: 'https://i.pravatar.cc/150?img=10',
          name: 'Slimsoja',
          lastPoster: null,
          lastMessage: 'You mugged me again on torn!',
          lastMessageAt: '10:05',
          isMuted: true,
          newMessageCount: 3,
        },
        {
          cid: 2,
          iconUrl: 'https://i.pravatar.cc/150?img=12',
          name: 'Mr. Henry Spudnik',
          lastPoster: null,
          lastMessage: 'Hi',
          lastMessageAt: '09:30',
          isMuted: false,
          newMessageCount: 0,
        },
        {
          cid: 3,
          iconUrl: 'https://i.pravatar.cc/150?img=3',
          name: 'Licensed Operators',
          lastPoster: 'Henry Cavill',
          lastMessage: "It's a bird its a plane.",
          lastMessageAt: '08:32',
          isMuted: true,
          newMessageCount: 256,
        },
        {
          cid: 4,
          iconUrl: 'https://i.pravatar.cc/150?img=4',
          name: 'NBA Young Boy',
          lastPoster: null,
          lastMessage: 'Yo fam!',
          lastMessageAt: '07:05',
          isMuted: false,
          newMessageCount: 1,
        },
        {
          cid: 5,
          iconUrl: 'https://i.pravatar.cc/150?img=15',
          name: 'Tyler Perry',
          lastPoster: null,
          lastMessage: 'Damn Philip Madea is at it again...',
          lastMessageAt: 'yesterday',
          isMuted: true,
          newMessageCount: 1,
        },
        {
          cid: 6,
          iconUrl: 'https://i.pravatar.cc/150?img=6',
          name: 'Developers Union',
          lastPoster: 'Charles',
          lastMessage: "These clients be trippin'",
          lastMessageAt: 'yesterday',
          isMuted: false,
          newMessageCount: 0,
        },
        {
          cid: 7,
          iconUrl: 'https://i.pravatar.cc/150?img=27',
          name: 'Aunty Miguel',
          lastPoster: null,
          lastMessage: 'Come home! Now!',
          lastMessageAt: 'yesterday',
          isMuted: false,
          newMessageCount: 0,
        },
        {
          cid: 8,
          iconUrl: 'https://i.pravatar.cc/150?img=8',
          name: 'Sandra Sands',
          lastPoster: null,
          lastMessage: 'When are you coming around again baby? :(',
          lastMessageAt: '20/07/2021',
          isMuted: false,
          newMessageCount: 0,
        },
        {
          cid: 9,
          iconUrl: 'https://i.pravatar.cc/150?img=9',
          name: 'That Awesome Tailor',
          lastPoster: null,
          lastMessage: "I promise you you'll get your shirt by wednesday!",
          lastMessageAt: '15/07/2021',
          isMuted: false,
          newMessageCount: 0,
        },
        {
          cid: 10,
          iconUrl: 'https://i.pravatar.cc/150?img=10',
          name: 'Side Chick #1',
          lastPoster: null,
          lastMessage: "I don't think we should see each other again.",
          lastMessageAt: '10/07/2021',
          isMuted: true,
          newMessageCount: 1,
        },
        {
          cid: 11,
          iconUrl: 'https://i.pravatar.cc/150?img=11',
          name: 'Side Chick #2',
          lastPoster: null,
          lastMessage: "You're an asshole!",
          lastMessageAt: '01/07/2021',
          isMuted: false,
          newMessageCount: 2,
        },
      ],
    }
  },
}
</script>
