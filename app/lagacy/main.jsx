import "./index.css";

import { Link as RMLink } from "@remix-run/react";
import { Route, Routes } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";

import NotFoundPage from "./404";
import AboutPage from "./about";
import BlogPage from "./blog";
import HomePage from "./home";

export default function Main() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/about">About Page</Link>
          </li>
          <li>
            Blog Page
            <ul>
              <li>
                <Link to="/blog/hello-world">Hello World</Link>
              </li>
              <li>
                <Link to="/blog/another-post">Another Post</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/404">404 Page</Link>
          </li>
          <li>
            <RMLink to="/remix">Remix Page</RMLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
