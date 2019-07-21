import React from "react";
import { storiesOf } from "@storybook/react";
// import {
//  withKnobs, text, boolean, number
// } from '@storybook/addon-knobs'

// import {
//   boolean, text, select, withKnobs,
// } from '@storybook/addon-knobs'

import Heading from ".";

storiesOf("Atom/Heading", module)
  .add("Default", () => (
    <Heading variant="default">
      Id tempor duis non esse commodo fugiat excepteur nostrud.
    </Heading>
  ))
  .add("level 2", () => (
    <Heading level={2}>
      Id tempor duis non esse commodo fugiat excepteur nostrud.
    </Heading>
  ))
  .add("level 3", () => (
    <Heading level={3}>
      Id tempor duis non esse commodo fugiat excepteur nostrud.
    </Heading>
  ))

  .add("App Title", () => (
    <Heading level={1} variant="appTitle">
      Id tempor duis non esse commodo fugiat excepteur nostrud.
    </Heading>
  ))
  .add("Item Title", () => (
    <Heading level={2} variant="itemTitle">
      Id tempor duis non esse commodo fugiat excepteur nostrud.
    </Heading>
  ));
