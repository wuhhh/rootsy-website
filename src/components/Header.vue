<template>
  <header class="fit-height">
    <template v-if="videoIsReady">
      <transition appear name="fade-in">
        <video id="kes" src="/video/kes2-compressed.mp4" type="video/mp4" autoplay loop muted/>
      </transition>
    </template>
    <MainMenu/>
    <transition appear name="fade-in">
      <h1 class="main">Web Design &amp; Development</h1>
    </transition>
    <div class="section-title with-icon-left">
      <span>Case Studies</span>
      <svg viewBox="0 0 40 40">
        <path
          fill="#eba7a7"
          d="M25.9,20.9l-0.7-0.7L21,24.3V12h-1v12.3l-4.1-4.1l-0.7,0.7l5,5c0,0,0.1,0.1,0.2,0.1c0,0,0,0,0,0c0,0,0,0,0,0
          c0.1,0,0.1,0,0.2,0s0.1,0,0.2,0c0,0,0,0,0,0c0,0,0,0,0,0c0.1,0,0.1-0.1,0.2-0.1L25.9,20.9z"
        ></path>
      </svg>
    </div>
  </header>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue'

export default {
  data() {
    return {
      videoIsReady: false
    }
  },
  components: {
    MainMenu
  },
  mounted() {
    const kes = document.createElement('video')

    kes.src = '/video/kes2-compressed.mp4'
    kes.type = 'video/mp4'
    kes.autoplay = true
    kes.loop = true
    kes.muted = true

    kes.oncanplaythrough = function() {
      this.videoIsReady = true
    }.bind(this)

    // Fix for cached video loading before onplaythrough event is registered
    // See: https://stackoverflow.com/a/26034492
    setTimeout(() => {
      if (kes.readyState > 3) this.videoIsReady = true
    }, 500)
  }
}
</script>

<style lang="scss">
@import '@/sass/_settings.scss';

.fade-in-enter {
  opacity: 0;
}

.fade-in-enter-active {
  transition: opacity 300ms ease;
  transition-delay: 500ms;
}

.fade-in-enter-to {
  opacity: 1;
}

header {
  @media screen and (min-width: 600px) {
    padding: 4vmin 8vmin 2vmin 8vmin;
  }

  width: 100%;
  padding: 6vmin 8vmin;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  video#kes {
    position: absolute;
    left: 50%;
    bottom: 45%;
    width: 65%;
    transform: translate(-50%, 60%);
    max-width: 310px;
  }

  .logotype {
    width: 76px;

    @media screen and (min-width: 1500px) {
      width: 86px;
    }
  }

  .preamble {
    margin: 5em 0 0 0;

    .intro {
      padding: 0 1em;
      font-size: 0.9em;
      margin-left: auto;
      margin-right: auto;
    }

    .breadcrumb {
      margin: 0 0 0.5em 0;
      font-size: 0.8em;
      text-align: center;
      color: #808080;

      @media screen and (min-width: 1366px) {
        font-size: 0.95em;
      }

      a {
        color: $c-deeppink;
        text-decoration: none;
      }
    }
  }

  h1.main {
    margin: auto;
    font-size: 10vw;
    line-height: 1.3em;
    text-align: center;
    font-family: 'CanelaDeck';
    transform: translateY(-65px);
  }

  .with-intro {
    h1.main {
      transform: translateY(0);
    }
  }

  canvas {
    width: 80%;
    position: absolute;
    z-index: -1;
    top: 42%;
    right: 8%;
  }

  .section-title {
    position: absolute;
    bottom: 6vmin;
    left: 8vmin;
    width: calc(100% - 16vmin);
  }

  @media screen and (orientation: landscape) {
    h1.main {
      font-size: 6vw;
      transform: translateY(-18px);
    }

    video#kes {
      left: 56%;
      bottom: 55%;
      width: 53%;
    }
  }

  @media screen and (orientation: landscape) and (min-height: 800px) {
    &.fit-height {
      min-height: 60vh;
    }

    .pad {
      height: auto;
    }
  }

  @media screen and (orientation: portrait) and (min-width: 1024px) {
    h1.main {
      font-size: 9vw;
    }

    video#kes {
      width: 75%;
      max-width: 430px;
    }
  }

  @media screen and (orientation: landscape) and (min-width: 1024px) {
    h1.main {
      font-size: 5vw;
    }

    video#kes {
      left: 75%;
      bottom: 50%;
      width: 75%;
      max-width: 430px;
    }
  }
}
</style>
