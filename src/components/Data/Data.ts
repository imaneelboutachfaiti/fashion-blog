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
import photo1 from "../../images/photo1.png";
import photo2 from "../../images/photo2.png";
import photo3 from "../../images/photo3.png";
import photo4 from "../../images/photo4.png";
import photo5 from "../../images/photo5.png";
import photo6 from "../../images/photo6.png";
import featuredPost1 from "../../images/featured-post1.png";
import featuredPost2 from "../../images/featured-post2.png";
import featuredPost3 from "../../images/featured-post3.png";

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

export const navigationList = [
  "Home",
  "Recipes",
  "Article",
  "Contact",
  "Purchase",
];

export const tagsList = [
  "Business",
  "Freelance",
  "Money",
  "Experience",
  "Lifestyle",
  "SEO",
  "Wordpress",
  "Marketing",
  "UX",
  "Modern",
  "Success",
  "Nature",
];

export const featuredPostsList: Post[] = [
  {
    highlighted: false,
    category: "jeans",
    title: "One of Saturn’s largest rings may be newer than anyone",
    date: "June 6, 2019",
    author: "Rickie Baroch",
    image: featuredPost1,
  },
  {
    highlighted: false,
    category: "city",
    title: "One of Saturn’s largest rings may be newer than anyone",
    date: "June 6, 2019",
    author: "Rickie Baroch",
    image: featuredPost2,
  },
  {
    highlighted: false,
    category: "Photography",
    title: "One of Saturn’s largest rings may be newer than anyone",
    date: "June 6, 2019",
    author: "Rickie Baroch",
    image: featuredPost3,
  },
];
export const instagramPothos = [photo1, photo2, photo3, photo4, photo5, photo6];

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
