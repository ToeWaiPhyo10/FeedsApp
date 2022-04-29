import React from "react";
import { Route, Routes } from "react-router-dom";
import Article from "./Article";
import Authentication from "./authentication";
import GlobalFeed from "./Globalfeed";

export default function Routess() {
  return (
    <Routes>
      <Route path="/" element={<GlobalFeed />} exact="true" />
      <Route path="/articles/:slug" element={<Article />} />
      <Route path="/login" element={<Authentication />} />
      <Route path="/register" element={<Authentication />} />
    </Routes>
  );
}
