import Home from '../container/Home';
// import FilteredPosts from './container/';
// import RegisterUser from './container/';
// import AllUsers from './container/';
import UserDetail from '../components/user/UserDetail';
// import PostDetail from './container/';

export const ROUTES = {
  HOME:{
    path:'/',
    Component: Home,
    linkTo:() => '/'
  },
  // FILTERED_POSTS:{
  //   path:'/',
  //   Component: FilteredPosts,
  //   linkTo:() => '/filteredPosts'
  // },
  // REGISTERED_USER:{
  //   path:'/',
  //   Component: RegisterUser,
  //   linkTo:() => '/register'
  // }, 
  // ALL_USERS:{
  //   path:'/',
  //   Component: AllUsers,
  //   linkTo:() => '/users/allUsers'
  // }, 
  USER_DETAIL:{
    path:'/user/:id',
    Component: UserDetail,
    linkTo: (id) => `/user/${id}`
  },
  // POST_DETAIL:{
  //   path:'/',
  //   Component: PostDetail,
  //   linkTo:() => '/post/postDetail'
  // }


};
