import "./Sidebar.css";
import { Button } from "../button/Button";
import authorImage from "../../images/author.png";
import { featuredPostsList } from "../Data/Data";
import { Post } from "../post/Post";
import facebookLogo from "../../images/facebook.png";
import pinterestLogo from "../../images/pinterest.png";
import twitterLogo from "../../images/twitter.png";
import vimeoLogo from "../../images/vimeo.png";
import dribbbleLogo from "../../images/dribbble.png";
import behanceLogo from "../../images/behance.png";
import instagramLogo from "../../images/instagram.png";
import youtubeLogo from "../../images/youtube.png";
import googlePlusLogo from "../../images/googleplus.png";
import { Tags } from "../tags/tags";
import { title } from "process";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button ButtonText="About the author" ButtonType="WhiteButton" />
      <div className="sidebar-box author-section">
        <img src={authorImage} alt="author image" />
        <div className="box-content">
          <span className="author-name">Kate Willems</span>
          <span className="speciality">Food & cooking bloger</span>
          <p className="author-paragraph">
            Hi, I'm Sonia. Cooking is the way I express my creative side to the
            world. Welcome to my Kitchen Corner on…
          </p>
        </div>
        <Button ButtonText="Continue Reading" ButtonType="ReadingButton" />
      </div>
      <div className="featured-posts">
        <Button ButtonText="Featured posts" ButtonType="WhiteButton" />
        {featuredPostsList.map((post) => (
          <div className="sidebar-box">
            <Post
              category={post.category}
              title={post.title}
              author={post.author}
              date={post.date}
              highlighted={post.highlighted}
              image={post.image}
            />
          </div>
        ))}
      </div>
      <Button ButtonText="Categories" ButtonType="WhiteButton" />
      <div className="categories">
        <div className="category-posts">
          <span>Fashion</span>
          <span>(23)</span>
        </div>
        <div className="category-posts">
          <span>Style & clothes</span>
          <span>(7)</span>
        </div>
        <div className="category-posts">
          <span>Minimalism</span>
          <span>(16)</span>
        </div>
        <div className="category-posts">
          <span>Black & White</span>
          <span>(5)</span>
        </div>
        <div className="category-posts">
          <span>Modern clothes</span>
          <span>(12)</span>
        </div>
      </div>
      <Button ButtonText="Social media" ButtonType="WhiteButton" />
      <div className="social-media">
        <div className="media-tool">
          <img src={facebookLogo} alt="facebook logo" />
          <span>32k likes</span>
        </div>
        <div className="media-tool">
          <img src={pinterestLogo} alt="pinterest logo" />
          <span>814 followers</span>
        </div>
        <div className="media-tool">
          <img src={vimeoLogo} alt="vimeo logo" />
          <span>165 followers</span>
        </div>
        <div className="media-tool">
          <img src={dribbbleLogo} alt="dribbble logo" />
          <span>6k followers</span>
        </div>
        <div className="media-tool">
          <img src={twitterLogo} alt="twitter logo" />
          <span>130k followers</span>
        </div>
        <div className="media-tool">
          <img src={behanceLogo} alt="behance logo" />
          <span>37k followers</span>
        </div>
        <div className="media-tool">
          <img src={instagramLogo} alt="instagram logo" />
          <span>854k followers</span>
        </div>
        <div className="media-tool">
          <img src={youtubeLogo} alt="youtube logo" />
          <span>52k subscribers</span>
        </div>
        <div className="media-tool">
          <img src={googlePlusLogo} alt="google Plus Logo " />
          <span>642 followers</span>
        </div>
      </div>
      <Button ButtonText="Tags" ButtonType="WhiteButton" />
      <Tags />
    </div>
  );
};
