/**
 * ==================================================================
 * Vue directive for parallaxificating
 * ==================================================================
 *
 * Include it in your project:
 *
 * import Parallax from "./ClassyParallax.js";
 * Vue.use(Parallax, {
 *   addClass: "--parallax" // Optionally add a class
 * });
 *
 * Most basic usage:
 *
 * <div v-parallax="{ target='-100' }"></div>
 *
 * Will transform the element's translateY property by -100 as you
 * scroll, and only once the element is within the viewport. By
 * default, that means as soon as any part of the element is within
 * the viewport.
 *
 * ==================================================================
 *
 * There are some extra settings:
 *
 * The default transform target is translateY, change it with
 * attribute, e.g. v-parallax="{ attribute: 'translateX', ... }"
 *
 * The default unit is px, change it with unit, e.g.
 * v-parallax="{ unit: '%', ... }"
 *
 * If you would prefer to start the parallax effect once the bottom
 * edge of the element is inside the viewport, you can set
 * bottomFeeder, e.g. v-parallax="{ bottomFeeder: true, ... }"
 *
 * NOTE: bottomFeeder will cause weird things to happen if your
 * element is taller than window height.
 *
 * * ================================================================
 *
 * Get silky smooth eased parallaxification by using a transition on
 * your parallax class, e.g.
 *
 * .--parallax {
 *   will-change: transform;
 *   transition: transform 2s cubic-bezier(0.125, 0.885, 0.32, 1);
 * }
 */

export default {
  install(Vue, options) {
    let parallaxEls = []

    /**
     *
     * @param {*} n
     * @param {*} inMin
     * @param {*} inMax
     * @param {*} outMin
     * @param {*} outMax
     */
    const map = (n, inMin, inMax, outMin, outMax) => {
      return ((n - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
    }

    /**
     * Add el
     */
    const addEl = (el, config) => {
      // Add class if specified in options
      if (options.addClass) {
        el.classList.add(options.addClass)
      }

      // Push to array
      parallaxEls.push({
        el,
        config
      })
    }

    /**
     * Remove el
     */
    const removeEl = el => {
      const index = parallaxEls.indexOf(el)
      if (index > -1) {
        parallaxEls.splice(index, 1)
      }
    }

    /**
     * Parallaxify
     */
    const parallaxify = () => {
      if (parallaxEls) {
        parallaxEls.forEach(el => {
          const { target } = el.config
          let { attribute, unit, bottomFeeder } = el.config

          bottomFeeder = bottomFeeder || false

          let offsetTop =
            el.el.offsetTop === 0
              ? el.el.offsetParent.offsetTop
              : el.el.offsetTop

          let fromTop = offsetTop - window.scrollY
          let fromBottom =
            offsetTop <= window.innerHeight
              ? window.scrollY
              : window.innerHeight -
                fromTop -
                (bottomFeeder ? el.el.clientHeight : 0)

          let mapped = map(fromBottom, 0, window.innerHeight, 0, target)
          mapped = Math.abs(mapped) > Math.abs(target) ? target : mapped

          attribute = attribute || 'translateY'
          unit = unit || 'px'

          el.el.setAttribute(
            'style',
            `transform: ${attribute}(${mapped}${unit})`
          )
        })
      }

      window.requestAnimationFrame(parallaxify)
    }

    // Init
    window.requestAnimationFrame(parallaxify)

    // Add a directive
    Vue.directive('parallax', {
      bind(el, binding) {
        addEl(el, binding.value)
      },
      unbind(el) {
        removeEl(el)
      }
    })
  }
}
