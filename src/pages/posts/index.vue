<template>
  <div class="posts__container">
    <Cards
      :posts="posts"
    />
  </div>
</template>

<script>
  import Cards from "~/components/cards/molecules/Cards"
  import { createClient } from "~/plugins/contentful"

  const client = createClient();
  export default {
    name: "index",
    components: {
        Cards
    },
    async asyncData ({ env}) {
      return await client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-fields.publishDate',
      }).then(entries => {
        return {
          posts: entries.items
        }
      })
        .catch(console.error)
    }
  }
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
    color: #121314;
    position: relative;
  }
  .posts__container {
    margin: 16px;
  }
  // SP横、タブレット縦
  @media screen and (min-width: 481px) {
    .posts__container {
      margin: 48px;
    }
  }

  // デスクトップ、タブレット横
  @media screen and (min-width: 769px) {
    .posts__container {
    }
  }
</style>
