import { feeds } from "../pages/feeds";
import { stories } from "../pages/stories";
import { auth } from "../pages/auth";
import { profile } from '../pages/profile'
import { watchers } from '../pages/watchers'

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
},
{
  path: '/profile',
  component: profile,
  name: 'profile'
},
{
  path: '/watchers',
  component: watchers,
  name: 'watchers'
}]