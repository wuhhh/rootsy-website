<template>
   <section class="fit-height clients">
    <div class="pad">
      <div class="section-title">Clients</div>
      <div class="layout-outer">
        <div class="layout">
          <div class="heading">Selected work &nbsp;2008&nbsp;&mdash;&nbsp;2018</div>
          <div id="client-list" class="cols client-list">
            <div class="client-list--item" v-for="(client, key) in clients" :key="client.id">
              <a v-if="!client.defunct" @click.prevent="switchClientTo(key)" :class="{'cli--defunct': client.defunct}" :data-image-src="client.image" href="#">
                <span class="cli--year">{{ client.year }}</span>&nbsp;
                <span class="cli--title">{{ client.title }}</span>
              </a>
              <span v-else>
                <span class="cli--year">{{ client.year }}</span>&nbsp;
                <span class="cli--title">{{ client.title }}</span>
              </span>
            </div>
          </div>
        </div>
        <div class="browser-window">
          <div class="browser-window--chrome">
            <img src="/img/icon/browser-chrome-icons.svg" alt="Browser Window Mockup Icons" />
          </div>
          <div class="browser-window--viewport">
            <img :src="clientAtIndex.image" :alt="'Client: ' + clientAtIndex.title" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      playing: true,
      counter: 0,
      clientIndex: 0,
      clients: [
        {
          id: 1,
          title: 'Cardiff University',
          image: '/img/clients/arpp.jpg',
          year: '2014'
        },
        {
          id: 2,
          title: 'WorldPay',
          image: '/img/clients/smallbusinessheroes.jpg',
          year: '2011'
        },
        {
          id: 3,
          title: 'Super Furry Animals',
          image: '/img/clients/sfa.jpg',
          year: '2008'
        },
        {
          id: 4,
          title: 'EMI',
          year: '2008',
          defunct: true
        },
        {
          id: 5,
          title: 'HEMYCA',
          image: '/img/clients/hemyca.jpg',
          year: '2012'
        },
        {
          id: 6,
          title: 'Bait',
          image: '/img/clients/bait.jpg',
          year: '2009'
        },
        {
          id: 7,
          title: 'Chill Or Thrill',
          image: '/img/clients/chillorthrill.jpg',
          year: '2010'
        },
        {
          id: 8,
          title: 'Eco Bohemia',
          image: '/img/clients/ecobohemia.jpg',
          year: '2011'
        },
        {
          id: 9,
          title: 'Eco Finland',
          image: '/img/clients/ecofinland.jpg',
          year: '2013'
        },
        {
          id: 10,
          title: 'Voices From Care',
          image: '/img/clients/voicesfromcare.jpg',
          year: '2013'
        },
        {
          id: 11,
          title: 'Minna Hepburn',
          image: '/img/clients/minna.jpg',
          year: '2014'
        },
        {
          id: 12,
          title: 'Silk Street Jazz',
          image: '/img/clients/ssj.jpg',
          year: '2015'
        }
      ]
    }
  },
  computed: {
    // Return client at current index
    clientAtIndex() {
      return this.clients[this.clientIndex]
    },
    // Filter
    clientsNotDefunct() {
      return this.clients.filter(this.notDefunct)
    }
  },
  mounted() {
    // Preload images and store them in the client data array
    for (let i = 0; i < this.clientsNotDefunct.length; i++) {
      let thisImage = document.createElement('img')
      thisImage.src = this.clientsNotDefunct[i].image
      this.clients[i].imageElement = thisImage
    }

    // Begin rotation
    this.rotate()
  },
  methods: {
    // Return clients that aren't defunct
    notDefunct(client) {
      return client.defunct === true ? false : true
    },
    // Rotate index
    rotate() {
      if (!this.playing) return

      this.counter += 1

      if (this.counter >= this.clients.length) {
        this.counter = 0
      }

      while (this.clients[this.counter].defunct) {
        this.counter += 1
      }

      this.clientIndex = this.counter

      setTimeout(() => {
        this.rotate()
      }, 500)
    },
    switchClientTo(index) {
      this.playing = false
      this.clientIndex = index
    }
  }
}
</script>

<style lang="scss">
@import '@/sass/_settings.scss';

section.clients {
  .pad {
    padding: 6vmin 8vmin;
    box-sizing: border-box;
    height: 100vh;
  }

  .layout-outer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  .layout {
    margin: 1em 0;
  }

  .heading {
    font-size: 3em;
    margin: 0 0 0.5em 0;
  }

  .cols {
    font-size: 0.85em;
    column-count: 2;
    margin: 0;
  }

  .client-list {
    .client-list--item {
      a {
        color: black;
        text-decoration: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }

      a:hover,
      a:active {
        border-bottom: 2px solid lighten($c-pink, 15%);
        text-decoration: none;
        color: black;
      }

      a:focus {
        outline: none;
      }

      .cli--year {
        font-family: 'Monaco';
        font-size: 0.8em;
        /*vertical-align: text-bottom;*/
        color: #909090;
      }

      .cli--title {
        color: black;
      }
    }
  }

  .browser-window {
    position: relative;
    width: 100%;
    height: calc(38vmax + 1vw);
    max-height: 359px;
    margin: 1em 0;
    max-width: 1000px;

    &:before {
      content: ' ';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: calc(100% - 16px);
      box-shadow: 0px 12px 11px 4px #00000026;
    }

    .browser-window--chrome {
      height: 1vw;
      min-height: 9px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background-color: #535353;
      border-radius: 3px 3px 0 0;
      padding: 0 0.5em;

      img {
        width: 1.2vw;
        min-width: 17px;
      }
    }

    .browser-window--viewport {
      width: 100%;
      height: 38vmax;
      max-height: 350px;
      overflow: auto;
      position: relative;
    }
  }

  @media screen and (min-width: 650px) {
    .heading {
      font-size: 13vw;
    }

    .cols {
      font-size: 1em;
      line-height: 1.7em;
      column-count: 3;
      margin: 3em 0;
    }
  }

  @media screen and (orientation: landscape), screen and (min-width: 812px) {
    &.fit-height {
      min-height: initial;
    }

    .pad {
      height: auto;
    }
  }

  @media screen and (min-width: 812px) {
    .layout-outer {
      display: flex;
      flex-direction: row;
      justify-content: center;
      height: 100%;
    }

    .layout {
      display: flex;
      flex-direction: column;
      width: 50%;
    }

    .heading {
      font-size: 3.4em;
    }

    .browser-window {
      width: 48%;
    }

    .cols {
      column-count: 2;
      margin: 0;
      max-width: 400px;
    }
  }

  @media screen and (min-width: 1280px) {
    .heading {
      font-size: 4em;
    }

    .layout {
      width: auto;
      flex-basis: 40%;
    }

    .layout-outer {
      justify-content: center;
      align-items: center;
    }

    .browser-window {
      margin: 2em 0 1em 0;
    }
  }

  @media screen and (min-width: 1400px) {
    .browser-window {
      max-height: calc(421px + 1vw);

      .browser-window--viewport {
        max-height: 421px;
      }
    }

    .cols {
      max-width: 900px;
    }
  }

  @media screen and (min-width: 1720px) {
    .heading {
      font-size: 5em;
    }
  }

  @media screen and (min-width: 2000px) {
    .browser-window {
      max-height: 700px;

      .browser-window--viewport {
        max-height: 691px;
      }
    }
  }
}
</style>
