<template>
  <main>
    <vue-headful
      title="ABOUT // Unbabel Frontend Challenge"
      description="Unbabel Frontend Challenge"
    />
    <Container>
      <h3>Unbabel Frontend Challenge</h3>
      <h6>by Miguel Carvalho</h6>
      <p>Here is a preview of what is expected:</p>
      <img src="@/assets/img/sample.png" alt="" />
      <h4>
        Important information to complete the challenge
      </h4>
      <p>
        Data source Fetch the data from this
        <a href="http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c">endpoint</a>.
      </p>
      <h4>
        Functionality
      </h4>
      <p>
        The app should let the user do the following:
      </p>
      <ol>
        <li>
          Get data button. When the user clicks on this button, your app will
          get the data from the URL in [Data source](#Data source) and fill the
          list
        </li>
        <li>
          Upload data button. When the user clicks on this button, your app will
          make a POST request to the same url as the Get data button. You should
          send the latest information on the list using the same structure as
          you have received it.
        </li>
        <li>
          Custom checkbox. When the user clicks on the checkbox, it will become
          checked. It will not have any other functionality.
        </li>
        <li>
          Add line button. When the user clicks on this button, a new row will
          be added to the list and the user should be able to write text in both
          fields.
        </li>
        <li>
          Delete row button. This button should be visible only when hovering
          each row item. When the user clicks on this button, your app will
          remove that row from the list.
        </li>
        <li>
          List item title This title should be editable
        </li>
        <li>
          List item content. This content should be editable.
        </li>
        <li>App title. No functionality.</li>
        <li>Person icon linked to each row. No functionality.</li>
      </ol>
      <h4>
        Style Attributes
      </h4>

      <p>
        These are some and useful details about some of the elements:
      </p>

      <ul>
        <li>
          <b>3</b> - The checkbox is 16px wide and 16px high. The purple color
          is #859EFF
        </li>
        <li>
          <b>6</b> - The font-family of the item title is Montserrat, the weight
          is SemiBold, the size is 16px, and the color is #566074
        </li>
        <li>
          <b>7</b> - The font-family of the item content is Open Sans, the
          weight is Regular, the size is 16px, and the color is #778195
        </li>
        <li>
          <b>8</b> - The font-family of the app title is Montserrat, the weight
          is Medium, the size is 18px, and the color is #414C5E The data above
          is enough to complete challenge. We also include the source Sketch
          file in the repository, in case you want to check the original file.
          You can find it in _README_assets/Challenge.sketch
        </li>
      </ul>
      <h4>
        Typography
      </h4>
      <p>
        You can find Montserrat on Google Fonts You can find Open Sans on Google
        Fonts
      </p>
      <h4>
        Bonus points:
      </h4>
      <ul>
        <li>
          Keeping in mind accessibility.
        </li>
        <li>
          Adding tests to your components and app.
        </li>
        <li>
          Using a store (Vuex) to manage the application data
        </li>
        <li>
          Using vue-router to prepare the app for a future where it would have
          multiple routes
        </li>
      </ul>
    </Container>
  </main>
</template>
<script>
import Container from "@/components/ui/Container";
export default {
  components: {
    Container
  }
};
</script>
<style scoped lang="scss">
main {
  padding: $rules-gutter;

  > div {
    background-color: $color-white;
    padding: 48px;
    box-sizing: border-box;

    h3,
    h6,
    h4 {
      font-weight: 600;
      color: $color-transcription-title;
    }

    h6 {
      margin-bottom: 2rem;
    }

    h4 {
      margin-top: 4rem;
    }

    h4,
    p,
    ol,
    img {
      margin-bottom: 1rem;
    }

    p,
    li {
      color: $color-transcription-body;
    }

    ul,
    ol {
      padding-left: 1.2rem;
    }

    ol {
      list-style: decimal;
    }

    ul {
      list-style: square;
    }

    li {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
