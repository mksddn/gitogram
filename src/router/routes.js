import { feeds } from "../pages/feeds";
import { stories } from "../pages/stories";
import { auth } from "../pages/auth";

export default [{
  path: "/",
  name: 'root',
  component: feeds
},
{
  path: "/auth",
  name: 'auth',
  component: auth
},
{
  path: "/stories",
  name: 'stories',
  component: stories
}]