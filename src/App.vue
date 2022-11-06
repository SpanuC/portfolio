<template vue-smooth-scroll>
  <div class="stars"></div>
  <PageLoader />
  <Header />
  <Body />
  <MoreInfo />
  <About />
  <Footer />

  <div class="inner-cursor"></div>
  <div class="outer-cursor"></div>
</template>

<script>
import PageLoader from "@/components/PageLoader.vue";
import Header from "@/components/Header.vue";
import Body from "@/components/ProjectBody.vue";
import MoreInfo from "@/components/MoreInfo.vue";
import About from "@/components/About.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { PageLoader, Header, Body, About, MoreInfo, Footer },
  name: "App",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: Megistica;
  src: url(./fonts/Megistica.otf);
}
@font-face {
  font-family: HelveticaNowDisplay-Regular;
  src: url(./fonts/HelveticaNowDisplay-Regular.ttf);
}

@font-face {
  font-family: HelveticaNowDisplay-Bold;
  src: url(./fonts/HelveticaNowDisplay-Bold.ttf);
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 100%;
  background: linear-gradient(180deg, #02010a 0%, #03031f 100%);
}
:root {
  --value: none;
}

body::-webkit-scrollbar {
  width: 5px;
  background: transparent;
  display: var(--value);
}
body::-webkit-scrollbar-thumb {
  background-color: rgb(194, 194, 194);
}
body::-webkit-scrollbar-corner {
  border-radius: 10px;
}

@function box-shadow-stars($n) {
  $star-shadows: "#{random(20000)-5000}px #{random(20000)-2000}px rgba(255,255,255,1)";
  @for $i from 2 through $n {
    $star-color-num: random(2);
    $star-color: rgba(255, 255, 255, 1);
    @if ($star-color-num == 1) {
      $star-color: "rgba(255,255,255,0.5)";
    }
    @if ($star-color-num == 2) {
      $star-color: "rgba(255,255,255,0.7)";
    }
    $star-shadows: "#{$star-shadows}, #{random(20000)-5000}px #{random(20000)-2000}px #{$star-color}";
  }
  @return unquote($star-shadows);
}

$stars1-shadows: box-shadow-stars(5000);

.stars {
  position: absolute;
  width: 1px;
  height: 1px;
  box-shadow: $stars1-shadows;
  border-radius: 50%;
  animation: rotateEarth 200s linear infinite;
  opacity: 0.9;
  z-index: 1;
}

@keyframes rotateEarth {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(1000px);
  }
}

html,
body,
p,
h1,
a {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  overflow: overlay;
  overflow-x: hidden;
}

p,
span {
  overflow: hidden;
}

textarea:focus,
input:focus {
  outline: none;
}

button:focus {
  outline: 0;
}

img {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
</style>
