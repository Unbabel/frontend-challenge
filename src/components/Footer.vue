<template>
  <footer>
    <Container>
      <nav>
        <ul>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
    </Container>
  </footer>
</template>

<script>
import Container from "@/components/ui/Container";
export default {
  name: "Footer",

  components: {
    Container
  }
};
</script>

<style scoped lang="scss">
footer {
  width: 100%;
  padding: $rules-gutter;
  box-sizing: border-box;
  bottom: 0;
  display: flex;
  align-items: center;

  &:hover {
    a {
      opacity: 1;
    }
  }

  a {
    opacity: 0;
    text-decoration: none;
    font-family: $font-open-sans;
    color: $color-transcription-body;
    font-size: 0.85rem;
    transition: all $time-default $easing-default;
  }
}
</style>
