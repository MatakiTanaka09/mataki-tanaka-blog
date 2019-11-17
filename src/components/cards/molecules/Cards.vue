<template>
  <div class="post__card__lists">
    <Card
      v-for="(post,i ) in posts"
      :key="i"
      :title="post.fields.title"
      :id="post.sys.id"
      :date="formatMonthDate(post.sys.updatedAt)"
      :image="post.fields.heroImage.fields.file.url"
    />
  </div>
</template>

<script>
  import Card from "~/components/cards/atoms/Card"
  import { formatMonthDate } from "~/utils/date";
  export default {
    name: "Cards",
    components: {
      Card
    },
    props: {
      posts: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      formatMonthDate(date) {
        return formatMonthDate(date);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .post__card__lists {
    display: block;
  }
  // SP横、タブレット縦
  @media screen and (min-width: 481px) {
    .post__card__lists {
      display: flex;
      flex-wrap: wrap;
    }
  }

  // デスクトップ、タブレット横
  @media screen and (min-width: 769px) {
    .post__card__lists {
    }
  }
</style>
