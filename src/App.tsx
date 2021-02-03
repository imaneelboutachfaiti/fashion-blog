import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main-content/Main";
import { Post } from "./components/post/Post";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Pagination } from "./components/pagination/Pagination";
import { InstagramPhotos } from "./components/instagramPhotos/InstagramPhotos";
import { Footer } from "./components/footer/Footer";
import { postsList } from "./components/Data/Data";

export const App = () => {
  return (
    <div className="App container">
      <Header />
      <Main />
      <div className="posts-container">
        <div className="posts">
          {postsList.map((post) => (
            <Post
              highlighted={post.highlighted}
              category={post.category}
              title={post.title}
              date={post.date}
              author={post.author}
              image={post.image}
              comments={post.comments}
              paragraph={post.paragraph}
            ></Post>
          ))}
          <Pagination count={8}></Pagination>
        </div>
        <Sidebar />
      </div>
      <InstagramPhotos />
      <Footer />
    </div>
  );
};
