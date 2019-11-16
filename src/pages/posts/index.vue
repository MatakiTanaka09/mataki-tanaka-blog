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
    .post__card__lists {
      display: block;
      .post__card {
        padding: 8px;
        margin-bottom: 4px;
        &__title {
          display: flex;
          margin-bottom: 8px;
          .title__date {
            padding: 0 12px;
            margin-right: 12px;
            border-right: 1px solid #eee;
            border-left: 1px solid #eee;
            text-align: center;
            display: flex;
            align-items: center;
            flex-direction: column;
            &__month {
              font-size: 13px;
              line-height: 13px;
              white-space: nowrap;
            }
            &__date {
              font-size: 36px;
              line-height: 36px;
            }
          }
          .title__text {
            font-size: 1em;
            line-height: 150%;
            font-weight: bold;
          }
        }
      }
    }
  }
  // SP横、タブレット縦
  @media screen and (min-width: 481px) {
    .posts__container {
      margin: 48px;
      .post__card__lists {
        display: flex;
        flex-wrap: wrap;
        .post__card {
          width: 50%;
          &__title {
            .title__date {
              &__month {
              }
              &__date {
              }
            }
            .title__text {
            }
          }
        }
      }
    }
  }

  // デスクトップ、タブレット横
  @media screen and (min-width: 769px) {
    .posts__container {
      .post__card__lists {
        .post__card {
          width: 25%;
          &__title {
            .title__date {
              &__month {
              }
              &__date {
              }
            }
            .title__text {
            }
          }
        }
      }
    }
  }
</style>
