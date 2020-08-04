<template>
  <div>
    <slot :inRange="inRange"></slot>
  </div>
</template>

<script>
export default {
  name: "ScrolledIntoView",
  props: {
    // Use position of parent El instead of this.$el
    useParent: {
      type: Boolean,
      required: false,
      default: false
    },
    observerOptions: {
      type: Object,
      required: false,
      default: () => {
        return {
          root: null,
          rootMargin: "0px 0px 0px 0px",
          threshold: 0.1
        };
      }
    }
  },
  data() {
    return {
      inRange: false,
      observer: null
    };
  },
  mounted() {
    if (
      window &&
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
      // Minimal polyfil of `isIntersecting`
      // See: https://github.com/w3c/IntersectionObserver/issues/211
      if (!("isIntersecting" in window.IntersectionObserverEntry.prototype)) {
        Object.defineProperty(
          window.IntersectionObserverEntry.prototype,
          "isIntersecting",
          {
            get: function() {
              return this.intersectionRatio > 0;
            }
          }
        );
      }

      // Observer callback
      const observerCallback = entries => {
        if (entries[0].isIntersecting) this.inRange = true;
      };

      // Create the observer
      this.observer = new IntersectionObserver(
        observerCallback,
        this.observerOptions
      );

      // Watch
      let target = this.useParent ? this.$parent.$el : this.$el;
      this.observer.observe(target);
    }
  }
};
</script>

<style></style>
