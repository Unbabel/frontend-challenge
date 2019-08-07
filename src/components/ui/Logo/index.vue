<template>
  <a href="/">
    <h1>
      <span>T</span>
      <span>r</span>
      <span>a</span>
      <span>n</span>
      <span>s</span>
      <span>c</span>
      <span>r</span>
      <span>i</span>
      <span>p</span>
      <span>t</span>
      <span>i</span>
      <span>o</span>
      <span>n</span>
      <span>s</span>
    </h1>
  </a>
</template>
<script>
export default {
  name: "Logo",
};
</script>
<style scoped lang="scss">
h1 {
  color: $color-header-title;
  font-family: $font-montserrat;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  overflow: hidden;
  outline: none;
  text-decoration: none;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    transform: translate3d(-101%, 0, 0);
    transition: transform 0.5s;
  }
  &:hover::before {
    transform: translate3d(0, 0, 0);
  }
  span {
    display: inline-block;
    position: relative;
    transform: perspective(1000px) rotate3d(0, 1, 0, 0deg);
    transition: transform 0.5s, color 0.5s;
  }
  &:hover span {
    color: $color-purple;
    transform: perspective(1000px) rotate3d(0, 1, 0, 360deg);
  }
  span:nth-child(14),
  &:hover span:first-child {
    transition-delay: 0s;
  }
  span:nth-child(13),
  &:hover span:nth-child(2) {
    transition-delay: 0.05s;
  }
  span:nth-child(12),
  &:hover span:nth-child(3) {
    transition-delay: 0.1s;
  }
  span:nth-child(11),
  &:hover span:nth-child(4) {
    transition-delay: 0.15s;
  }
  span:nth-child(10),
  &:hover span:nth-child(5) {
    transition-delay: 0.2s;
  }
  span:nth-child(9),
  &:hover span:nth-child(6) {
    transition-delay: 0.25s;
  }
  span:nth-child(8),
  &:hover span:nth-child(7) {
    transition-delay: 0.3s;
  }
  span:nth-child(7),
  &:hover span:nth-child(8) {
    transition-delay: 0.35s;
  }
  span:nth-child(6),
  &:hover span:nth-child(9) {
    transition-delay: 0.4s;
  }
  span:nth-child(5),
  &:hover span:nth-child(10) {
    transition-delay: 0.45s;
  }
  span:nth-child(4),
  &:hover span:nth-child(11) {
    transition-delay: 0.5s;
  }
  span:nth-child(3),
  &:hover span:nth-child(12) {
    transition-delay: 0.55s;
  }
  span:nth-child(2),
  &:hover span:nth-child(13) {
    transition-delay: 0.6s;
  }
  span:first-child,
  &:hover span:nth-child(14) {
    transition-delay: 0.65s;
  }
}
</style>
