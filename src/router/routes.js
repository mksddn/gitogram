import { feeds } from "../pages/feeds";
import { stories } from "../pages/stories";

export default [{
  path: "/",
  name: 'root',
  component: feeds
},
{
  path: "/stories",
  name: 'stories',
  component: stories
}]