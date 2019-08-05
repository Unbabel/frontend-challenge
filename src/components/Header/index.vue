<template>
  <header>
    <h1>Transcriptions</h1>
    <nav>
      <button>upload</button>
      <button>download</button>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
nav {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  transition: box-shadow 0.5s;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
  h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: var(--medium);
    font-size: 18px;
    color: var(--title-color);
  }
}
</style>
