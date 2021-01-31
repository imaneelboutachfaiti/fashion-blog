import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main-content/Main";
// import { Button } from "./components/button/Button";
import { Post } from "./components/post/Post";
import PostImage1 from "./images/post1.png";
import PostImage2 from "./images/post2.png";
import PostImage3 from "./images/post3.png";
import PostImage4 from "./images/post4.png";
import PostImage5 from "./images/post5.png";
import PostImage6 from "./images/post6.png";
import PostImage7 from "./images/post7.png";
import PostImage8 from "./images/post8.png";
import PostImage9 from "./images/post9.png";
import PostImage10 from "./images/post10.png";
import PostImage11 from "./images/post11.png";

export const App = () => {
  return (
    <div className="App container">
      <Header />
      <Main />
      <div className="posts posts-container">
        <Post
          category="tourism"
          title="One of Saturn’s largest rings may be newer than anyone"
          date="June 6, 2019"
          author="Rickie Baroch"
          image={PostImage1}
        />
        <Post
          category="sport"
          title="One of Saturn’s largest rings may be newer than anyone"
          date="June 6, 2019"
          author="Rickie Baroch"
          image={PostImage2}
        />
        <Post
          category="fashion"
          title="One of Saturn’s largest rings may be newer than anyone"
          date="June 6, 2019"
          author="Rickie Baroch"
          image={PostImage3}
        />
        <Post
          category="clothes"
          title="One of Saturn’s largest rings may be newer than anyone"
          date="June 6, 2019"
          author="Rickie Baroch"
          image={PostImage4}
        />
        <Post
          category="clothes"
          title="One of Saturn’s largest rings may be newer than anyone"
          date="June 6, 2019"
          author="Rickie Baroch"
          image={PostImage5}
        />
        <Post
          category="fashion"
          title="One of Saturn’s largest rings may be newer than anyone"
          date="June 6, 2019"
          author="Rickie Baroch"
          image={PostImage6}
        />
        <Post
          category="fashion"
          title="One of Saturn’s largest rings may be newer than anyone"
          date="June 6, 2019"
          author="Rickie Baroch"
          image={PostImage7}
        />
        <Post
          category="fashion"
          title="One of Saturn’s largest rings may be newer than anyone"
          date="June 6, 2019"
          author="Rickie Baroch"
          image={PostImage8}
        />
        <Post
          category="fashion"
          title="One of Saturn’s largest rings may be newer than anyone"
          date="June 6, 2019"
          author="Rickie Baroch"
          image={PostImage9}
        />
        <Post
          category="fashion"
          title="One of Saturn’s largest rings may be newer than anyone"
          date="June 6, 2019"
          author="Rickie Baroch"
          image={PostImage10}
        />
      </div>
    </div>
  );
};
