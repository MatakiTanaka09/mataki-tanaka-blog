<template>
  <div class="slug__container">
    <div class="article">
      <div class="article__image">
        <img class="card_image" :alt="article.fields.description" :src="article.fields.heroImage.fields.file.url"/>
      </div>
      <h1 class="article__title">
        {{ article.fields.title }}
      </h1>
      <div class="author__profile">
        <div class="author__profile--left">
          <div class="author_image">
            <img style="width: 100%; height: auto" :src="article.fields.author.fields.image.fields.file.url" alt="">
          </div>
        </div>
        <div class="author__profile--right">
          <div class="author__name">
            {{ article.fields.author.fields.name }}
          </div>
          <div class="article__date">
            {{ customDate(article.sys.updatedAt) }}
          </div>
        </div>
      </div>
      <div class="article__content">
        <vue-markdown>
          {{ article.fields.body }}
        </vue-markdown>
      </div>
    </div>
  </div>
</template>

<script>
  import { createClient } from '~/plugins/contentful'
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
  import { richTextFromMarkdown } from '@contentful/rich-text-from-markdown';
  import VueMarkdown from 'vue-markdown';
  import { customDate } from "~/utils/date";

  const client = createClient();
  export default {
    name: "posts-id",
    components: {
      VueMarkdown
    },
    props: {
      id: {
        type: String,
        default: ''
      }
    },
    transition: 'slide-right',
    async asyncData({ env, params }) {
      return await client
        .getEntry(params.id)
        // .then(entry => {
        //   const rawRichTextField = entry.fields.body;
        //   return richTextFromMarkdown(rawRichTextField);
        // })
        // .then(renderedMarkdown => {
        //   // do something with html, like write to a file
        //   console.log(renderedMarkdown);
        //   document.getElementById('rich-text-body').innerHTML = renderedMarkdown;
        // })
        .then(entry => {
          return {
            article: entry
          }
        })
        .catch(console.error)
    },
    methods: {
      customDate(date) {
        return customDate(date);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .slug__container {
    max-width: 800px;
    margin: 16px;
    .article {
      width: 100%;
      margin: 0 auto;
      &__image {
        width: 100%;
        margin-bottom: 16px;
        .card_image {
          width: 100%;
          height: auto;
        }
      }
      &__title {
        margin-bottom: 8px;
      }
      .author__profile {
        display: flex;
        width: 100%;
        height: auto;
        margin-bottom: 8px;
        &--left {
          margin: 4px;
          .author_image {
            max-width: 48px;
            max-height: 48px;
          }
        }
        &--right {
          width: 100%;
          margin: 4px;
          .author__name {
            width: 100%;
            font-size: 12px;
          }
          .article__date {
            width: 100%;
            font-size: 10px;
            color: darkgray;
          }
        }

      }

      &__title {}
      &__article__date {}
      &__content {
        word-wrap: break-word;
        width: 100%;
      }
    }
  }

  // SP横、タブレット縦
  @media screen and (min-width: 481px) {
    .slug__container {
      max-width: 100%;
      .article {
        max-width: 620px;
        margin: 0 auto;
        &__title {
        }
      }
    }
  }

  // デスクトップ、タブレット横
  @media screen and (min-width: 769px) {
    .slug__container {
      .article {
        &__title {
        }
      }
    }
  }
</style>
