import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./i18n";
import { Center, Loader, Text } from "@mantine/core";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <React.Suspense
      fallback={
        <Center w="100%" h="99vh">
          <Loader c="red" />
        </Center>
      }
    >
      <App />
    </React.Suspense>
  </React.StrictMode>
);
