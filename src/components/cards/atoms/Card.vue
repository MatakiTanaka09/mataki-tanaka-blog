<template>
  <div class="post__card">
    <nuxt-link
      :to="{ name: 'posts-id', params: {
        id: id
      }}"
    >
      <div class="card__thumbnail">
        <img class="card_image" :src="image" alt="thumbnail">
      </div>
      <div class="post__card__title">
        <div class="title__date">
          <span class="title__date__month">{{ date.month }}月</span>
          <span class="title__date__date">{{ date.date }}</span>
        </div>
        <div class="days-title-text">
          {{ title }}
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: {
      title: {
        type: String,
        default: ''
      },
      id: {
        type: String,
        default: ''
      },
      date: {
        type: Object,
        default: () => {}
      },
      image: {
        type: String,
        default: ''
      },
    }
  }
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
    color: #121314;
    position: relative;
  }
  .post__card {
    width: 100%;
    padding: 8px;
    margin-bottom: 4px;
    .card__thumbnail {
      width: 100%;
      height: auto;
      margin-bottom: 8px;
      .card_image {
        width: 100%;
        height: auto;
      }
    }
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
  // SP横、タブレット縦
  @media screen and (min-width: 481px) {
    .post__card {
      width: 50%;
      .card__thumbnail {
        /*max-width: 180px;*/
        /*max-height: 120px;*/
      }
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

  // デスクトップ、タブレット横
  @media screen and (min-width: 769px) {
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
</style>
