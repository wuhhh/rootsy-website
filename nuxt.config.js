import axios from "axios";

export default {
  mode: "universal",
  env: {
    API_URL:
      process.env.npm_package_name || "https://wp.rootsy.co.uk/wp-json/wp/v2"
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#000" },

  pageTransition: {
    name: "page",
    duration: 500
  },

  /*
   ** Global CSS
   */
  css: ["normalize.css/normalize.css", "@/assets/scss/main.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/widows.client.js" }],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    //"@nuxtjs/sitemap",
    ["@nuxtjs/google-tag-manager", { id: "" }]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    /* set API_URL environment variable to configure access to the API
     */
    baseURL: process.env.API_URL
  },
  /*
   ** styleResources module configuration
   ** See https://hackernoon.com/how-i-use-scss-variables-mixins-functions-globally-in-nuxt-js-projects-while-compiling-css-utilit-58bb6ff30438
   */
  styleResources: {
    scss: ["@/assets/scss/_settings.scss"]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    //extend(config, ctx) {}
  },
  /*
   ** Generate configuration
   */
  generate: {
    dir: "dist",
    fallback: true,
    interval: 200, // interval in ms; server WILL bail if this is too small!
    routes: [
      "/",
      "/case-study/zen",
      "/case-study/e-international-relations",
      "/case-study/flip",
      "/case-study/serein",
      "/case-study/serein-audiovisual",
      "/case-study/drum-networking"
    ]
    /*
    routes: 
      () => {
      /**
       * WITH PAYLOADS
       */
    // Generate project routes
    /*
      let projects = axios
        .get(this.default.axios.baseURL + '/!/Fetch/collection/work', {
          params: {
            filter: 'published'
          }
        })
        .then(res => {
          return res.data.data.map(project => {
            return {
              route: 'projects/' + project.slug,
              payload: {
                post: project,
                list: res.data.data
              }
            }
          })
        })
      */
    // Generate journal routes (needs users + journals)
    /*
      let users = axios.get(this.default.axios.baseURL + '/!/Fetch/users')
      let journals = axios.get(
        this.default.axios.baseURL + '/!/Fetch/collection/journal',
        {
          params: {
            filter: 'published'
          }
        }
      )

      let users_journals = Promise.all([users, journals]).then(values => {
        let [users, journals] = values

        return journals.data.data.map(journal => {
          return {
            route: 'journal/' + journal.slug,
            payload: {
              post: journal,
              list: journals.data.data,
              users: users.data.data
            }
          }
        })
      })
      */
    // Generate internal routes
    /*
      let internals = axios
        .get(this.default.axios.baseURL + '/!/Fetch/collection/internal', {
          params: {
            filter: 'published'
          }
        })
        .then(res => {
          return res.data.data.map(internal => {
            return {
              route: 'internal/' + internal.slug,
              payload: {
                post: internal,
                list: res.data.data
              }
            }
          })
        })

      return Promise.all([projects, users_journals, internals]).then(values => {
        // Destructuring lets us return a combination of objects and arrays
        const [projects, users_journals, internals] = values
        return [...projects, ...users_journals, ...internals]
      })
      */
    //}
  }
};
