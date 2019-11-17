<template>
  <div>
    <Header/>
    <div class="main__container">
      <nuxt/>  
    </div>
  </div>
</template>

<script>
  import Header from "~/components/common/header/TopHeader"
  export default {
    components:{
      Header
    },
    data() {
      return {
        openMenuFlag: false
      }
    },
    methods: {
      openMenu: function() {
        this.openMenuFlag = !this.openMenuFlag
      }
    }
  };
</script>

<style lang="scss">
  body {
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: calc(10px + 0.33vw);
    -webkit-font-smoothing: antialiased;
    /*padding: 5vh 10vw;*/
    color: #121314;
    display: block;
    margin: 8px;
    background-color: #F1F1F1;
  }
  h1 {
    font-size: 3.5em;
    font-weight: 500;
    margin-bottom: 0;
  }
  h2 {
    font-size: 3.0em;
    font-weight: 400;
    margin-bottom: 0;
  }
  p {
    font-size: 1.6em;
    font-weight: 300;
    line-height: 1.4;
  }

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.main__container {
  margin-top: 64px;
}
  .mb_16 {
    margin-bottom: 16px;
  }
</style>
