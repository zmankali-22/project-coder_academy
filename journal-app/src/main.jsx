import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BlogProvider } from "./contexts/BlogContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EntryForm from "./components/EntryForm.jsx";
import EntryParent from "./components/EntryParent.jsx";
import Template from "./pages/_template.jsx";
import HomePage from "./pages/HomePage.jsx";
import EntryViewPage from "./pages/EntryViewPage.jsx";
import NewEntryPage from "./pages/NewEntryPage.jsx";
import LatestPostRedirector from "./pages/LatestPostRedirector.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BlogProvider>

      <BrowserRouter>
      <Routes>
        <Route  path="/" element = {<Template />}/>
        <Route index element= {<HomePage />} />
        <Route  path="/view/:id" element = {<EntryViewPage />}/> 
        <Route  path="/create" element = {<NewEntryPage/>}/>
        <Route  path="/latest" element = {<LatestPostRedirector/>}/>
      </Routes>
      </BrowserRouter>
    </BlogProvider>
  </React.StrictMode>
);
