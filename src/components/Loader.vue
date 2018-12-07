<template>
  <div class="rootsy-loader">
    <svg
      width="50"
      height="50"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 50 50"
      style="enable-background:new 0 0 50 50;"
      xml:space="preserve"
    >
      <filter id="blur">
        <feGaussianBlur stdDeviation="6"></feGaussianBlur>
      </filter>
      <g>
        <defs>
          <circle id="circ" cx="25" cy="25" r="25"></circle>
        </defs>
        <clipPath id="circ-clip">
          <use xlink:href="#circ" style="overflow:visible;"></use>
        </clipPath>
        <g class="boxmove">
          <rect x="-5" y="-54" fill="#eba7a7" width="60" height="50">
            <animate
              attributeName="y"
              from="-56px"
              to="56px"
              begin="0s"
              dur="1s"
              values="-56px;-50px;-40px;-30px;-15px;0;15px;30px;40px;50px;56px;"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.boxmove {
  clip-path: url(#circ-clip);
  filter: url(#blur);
}

#app.loading {
  overflow: hidden;
}

#app .rootsy-loader {
  position: fixed;
  top: 0;
  left: 0;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  clip-path: inset(100% 0 0 0);
  transition: clip-path 500ms ease-in-out;
  pointer-events: none;
}
#app.loading .rootsy-loader {
  clip-path: inset(0 0 0 0);
}
nav.menu-primary .menu--drawer a {
  opacity: 0;
}
</style>
