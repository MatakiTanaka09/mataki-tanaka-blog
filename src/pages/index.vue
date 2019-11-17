<template>
  <div class="top__container">
    <div class="top__boxes">
      <div class="top__slider">
        <client-only>
          <swiper :options="swiperOption">
            <swiper-slide
              v-for="(image, i) in imgaes"
              :key="i"
            >
              <div class="top__section">
                <div class="top__container">
                  <div class="top__wrapper">
                    <img :src="image" alt="">
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </client-only>
      </div>
      <div class="news__section">
        <div class="news__container">
          <div class="news__wrapper">準備中...</div>
        </div>
      </div>
    </div>
    <div class="blog__index">
      <Cards
        :posts="posts"
      />
    </div>
    <div class="intro__section">
      <div class="intro__container">
        <div class="intro__wrapper">
          <p class="title__large_en">Author</p>
          <p class="title__large_ja">運営者</p>
        </div>
      </div>
    </div>
    <div class="profile">
      <div class="profile__box">
        <div class="profile__box__img">
          <img class="profile__box__img--size" src="~/assets/LfsVO8a+TL+HvLWXsKRELQ_thumb_98f.jpg" alt="profile">
        </div>
        <div class="profile__box__name">
          <h1>田中又暉</h1>
        </div>
        <div class="profile__box__role">
          <div class="roleJob">フルスタックエンジニア</div>
          <div class="roleStyle"></div>
        </div>
        <div class="profile__box__description" v-if="moreLooking">
          <p>
            1997年大阪生まれ東京育ち。
            都立竹早高校卒業後、住込み、海外、ヒッチハイク 、VR企業インターン、エンジニア起業家養成スクールを経て、独立系システム会社・株式会社クロスブリッジに入社。
            と同時に、キッズシーズ株式会社CTOとして、「kidsweekend」の開発・運営に従事。
          </p>
          <div class="profile__box__description--links">
            <div class="profile__box__description--links_link">
              <a href="https://mataki-tanaka.me" target="_blank">ポートフォリオ</a>
            </div>
            <div class="profile__box__description--links_link">
              <a href="https://twitter.com/matakitanaka_jp" target="_blank">Twitter</a>
            </div>
            <div class="profile__box__description--links_link">
              <a href="https://note.mu/mataki_tanaka" target="_blank">Note</a>
            </div>
          </div>
        </div>
        <div class="profile__box__more">
          <a class="more__btn" @click="toggleMoreLooking" v-if="!moreLooking">詳しくみる</a>
          <a class="more__btn" @click="toggleMoreLooking" v-if="moreLooking">閉じる</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Cards from "~/components/cards/molecules/Cards"
  import { createClient } from "~/plugins/contentful"

  const client = createClient();
  export default {
    components: {
      Cards
    },
    data() {
      return {
        moreLooking: false,
        swiperOption: {
          // spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
        },
        imgaes: [
          require("~/assets/logo-black.png"),
          require("~/assets/logo-black.png")
        ]
      }
    },
    async asyncData ({ env}) {
      return await client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-fields.publishDate',
        limit: 4
      }).then(entries => {
        return {
          posts: entries.items
        }
      })
        .catch(console.error)
    },
    methods: {
      toggleMoreLooking() {
        this.moreLooking = !this.moreLooking;
      }
    }
  }
</script>

<style lang="scss" scoped>
.top__container {
  margin: 16px;
  .top__boxes {
    .top__slider {
      .top__section {
        width: 375px;
        height: 375px;
        background-color: white;
        padding: 0 8px;
        margin-bottom: 16px;
        .top__container {
          .top__wrapper {
          }
        }
      }
    }
    .news__section {
      display: none;
    }
  }

  .blog__index {
    margin-bottom: 48px;
  }
  .intro__section {
    background-color: white;
    padding: 0 8px;
    margin-bottom: 16px;
    .intro__container {
      padding: 24px 0;
      .intro__wrapper {
        margin: 0 auto;
        .title__large_en {
          font-family: 'Maven Pro', sans-serif;
          font-weight: 700;
          font-size: 24px;
        }
      }
    }
  }
  .profile {
    display: block;
    width: 100%;
    &__box {
      width: 100%;
      padding: 16px;
      background-color: white;
      &__img {
        width: 100%;
        margin-bottom: 8px;
        &--size {
          width: 100%;
          height: auto;
        }
      }
      &__name {
        h1 {
          font-family:  "ヒラギノ角ゴ Pro W3", "Shuei MaruGo B", "Yu Gothic", "Hiragino Kaku Gothic Pro", "Meiryo UI", メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
          font-size: 2.0em;
          font-weight: 800;
          line-height: 1.333;
          margin-bottom: 4px;
        }
      }
      &__role {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        .roleJob {
          padding-right: 4px;
        }
        .roleStyle {
          border-left: 1px solid #eee;
          padding-left: 4px;
        }
      }
      &__description {
        margin-bottom: 16px;
        p {
          font-size: 14px;
          margin-bottom: 8px;
        }
        &--links {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          width: 100%;
          &_link  {
            margin-right: 8px;
            line-height: 2;
            a {
              color: #121314;
            }
          }
        }
      }
      &__more {
        .more__btn {
          color: #1b9af7;
          font-size: 16px;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-align: center;
          align-items: center;
          line-height: 1.6;
        }
      }
    }
  }
}

// SP横、タブレット縦
@media screen and (min-width: 481px) {
  .top__container {
    margin: 40px;
    .top__boxes {
      display: flex;
      .top__slider {
        width: 50%;
        height: auto;
        margin: 0 8px;
        .top__section {
          width: 100%;
          padding: 8px;
        }
      }
      .news__section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: auto;
        background-color: white;
        padding: 0 8px;
        margin-bottom: 16px;
        .news__container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 24px 0;
          .news__wrapper {
            margin: 0 auto;
          }
        }
      }
    }
    .blog__index {
    }
    .profile {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      &__box {
        width: calc(50% - 10px);
        margin-bottom: 10px;
        margin-right: 10px;
        padding: 24px;
        &__img {
          width: 100%;
          &--size {
            width: calc(100% - 24px);
            height: auto;
          }
        }
      }
    }
  }
}

// デスクトップ、タブレット横
@media screen and (min-width: 769px) {
  .top__container {
    max-width: 1024px;
    margin: 0 auto;
  }
}
</style>
