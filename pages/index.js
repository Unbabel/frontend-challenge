import React, { useEffect } from "react";
import App from "../components/App";
import FontFaceObserver from "fontfaceobserver";
const Index = () => {
  return (
    <>
      <App />
      <style jsx global>
        {`
          body {
            margin: 0;
          }
          /* open-sans-regular - latin */
          @font-face {
            font-family: "Open Sans";
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url("/static/fonts/open-sans-v16-latin-regular.eot"); /* IE9 Compat Modes */
            src: local("Open Sans Regular"), local("OpenSans-Regular"),
              url("/static/fonts/open-sans-v16-latin-regular.eot?#iefix")
                format("embedded-opentype"),
              /* IE6-IE8 */
                url("/static/fonts/open-sans-v16-latin-regular.woff2")
                format("woff2"),
              /* Super Modern Browsers */
                url("/static/fonts/open-sans-v16-latin-regular.woff")
                format("woff"),
              /* Modern Browsers */
                url("/static/fonts/open-sans-v16-latin-regular.ttf")
                format("truetype"),
              /* Safari, Android, iOS */
                url("/static/fonts/open-sans-v16-latin-regular.svg#OpenSans")
                format("svg"); /* Legacy iOS */
          }

          /* montserrat-500 - latin */
          @font-face {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url("/static/fonts/montserrat-v13-latin-500.eot"); /* IE9 Compat Modes */
            src: local("Montserrat Medium"), local("Montserrat-Medium"),
              url("/static/fonts/montserrat-v13-latin-500.eot?#iefix")
                format("embedded-opentype"),
              /* IE6-IE8 */ url("/static/fonts/montserrat-v13-latin-500.woff2")
                format("woff2"),
              /* Super Modern Browsers */
                url("/static/fonts/montserrat-v13-latin-500.woff")
                format("woff"),
              /* Modern Browsers */
                url("/static/fonts/montserrat-v13-latin-500.ttf")
                format("truetype"),
              /* Safari, Android, iOS */
                url("/static/fonts/montserrat-v13-latin-500.svg#Montserrat")
                format("svg"); /* Legacy iOS */
          }
          /* montserrat-600 - latin */
          @font-face {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url("/static/fonts/montserrat-v13-latin-600.eot"); /* IE9 Compat Modes */
            src: local("Montserrat SemiBold"), local("Montserrat-SemiBold"),
              url("/static/fonts/montserrat-v13-latin-600.eot?#iefix")
                format("embedded-opentype"),
              /* IE6-IE8 */ url("/static/fonts/montserrat-v13-latin-600.woff2")
                format("woff2"),
              /* Super Modern Browsers */
                url("/static/fonts/montserrat-v13-latin-600.woff")
                format("woff"),
              /* Modern Browsers */
                url("/static/fonts/montserrat-v13-latin-600.ttf")
                format("truetype"),
              /* Safari, Android, iOS */
                url("/static/fonts/montserrat-v13-latin-600.svg#Montserrat")
                format("svg"); /* Legacy iOS */
          }
        `}
      </style>
    </>
  );
};

export default Index;
