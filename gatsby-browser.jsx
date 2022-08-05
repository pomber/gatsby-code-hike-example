import React from "react";
import { Layout } from "./src/components/layout";
import "@code-hike/mdx/dist/index.css";

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
