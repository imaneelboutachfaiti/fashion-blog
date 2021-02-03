import facebookIcon from "../../images/facebook-icon.png";
import twitterIcon from "../../images/twitter-icon.png";
import pinterestIcon from "../../images/pinterest-icon.png";
import behanceIcon from "../../images/behance-icon.png";
import googleplusIcon from "../../images/googleplus-icon.png";
import instagramIcon from "../../images/instagram-icon.png";
import PostImage1 from "../../images/post1.png";
import PostImage2 from "../../images/post2.png";
import PostImage3 from "../../images/post3.png";
import PostImage4 from "../../images/post4.png";
import PostImage5 from "../../images/post5.png";
import PostImage6 from "../../images/post6.png";
import PostImage7 from "../../images/post7.png";
import PostImage8 from "../../images/post8.png";
import PostImage9 from "../../images/post9.png";
import PostImage10 from "../../images/post10.png";
import PostImage11 from "../../images/main-post.png";

export const navigationList = [
  "Home",
  "Recipes",
  "Article",
  "Contact",
  "Purchase",
];

interface Post {
  category: string;
  title: string;
  date: string;
  author: string;
  image: string;
  highlighted: boolean;
  comments?: string;
  paragraph?: string;
}

export const postsList: Post[] = [
  {
    category: "tourism",
    title: "One of Saturn’s largest rings may be newer than anyone",
    author: "Rickie Baroch",
    image: PostImage1,
    date: "June 6, 2019",
    highlighted: false,
  },
  {
    highlighted: false,
    category: "sport",
    title: "One of Saturn’s largest rings may be newer than anyone",
    date: "June 6, 2019",
    author: "Rickie Baroch",
    image: PostImage2,
  },
  {
    highlighted: false,
    category: "fashion",
    title: "One of Saturn’s largest rings may be newer than anyone",
    date: "June 6, 2019",
    author: "Rickie Baroch",
    image: PostImage3,
  },
  {
    highlighted: false,
    category: "clothes",
    title: "One of Saturn’s largest rings may be newer than anyone",
    date: "June 6, 2019",
    author: "Rickie Baroch",
    image: PostImage4,
  },
  {
    highlighted: false,
    category: "clothes",
    title: "One of Saturn’s largest rings may be newer than anyone",
    date: "June 6, 2019",
    author: "Rickie Baroch",
    image: PostImage5,
  },
  {
    highlighted: false,
    category: "fashion",
    title: "One of Saturn’s largest rings may be newer than anyone",
    date: "June 6, 2019",
    author: "Rickie Baroch",
    image: PostImage6,
  },
  {
    highlighted: true,
    category: "summer",
    title: "One of Saturn’s largest rings may be newer than anyone",
    date: "June 6, 2019",
    author: "Rickie Baroch",
    image: PostImage11,
    comments: "6 comments",
    paragraph:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem",
  },
  {
    highlighted: false,
    category: "autumn",
    title: "One of Saturn’s largest rings may be newer than anyone",
    date: "June 6, 2019",
    author: "Rickie Baroch",
    image: PostImage7,
  },
  {
    highlighted: false,
    category: "clothes",
    title: "One of Saturn’s largest rings may be newer than anyone",
    date: "June 6, 2019",
    author: "Rickie Baroch",
    image: PostImage8,
  },
  {
    highlighted: false,
    category: "summer",
    title: "One of Saturn’s largest rings may be newer than anyone",
    date: "June 6, 2019",
    author: "Rickie Baroch",
    image: PostImage9,
  },
  {
    highlighted: false,
    category: "summer",
    title: "One of Saturn’s largest rings may be newer than anyone",
    date: "June 6, 2019",
    author: "Rickie Baroch",
    image: PostImage10,
  },
];

export const iconsList = [
  facebookIcon.toString(),
  twitterIcon.toString(),
  pinterestIcon.toString(),
  behanceIcon.toString(),
  googleplusIcon.toString(),
  instagramIcon.toString(),
];
