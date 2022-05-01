import React from 'react';

import AdminOutlet from '../adminDash/AdminOutlet';
import { Route } from 'react-router-dom';
import AdminIndex from '../adminDash/AdminIndex';
import Profile from '../adminDash/main/profile/single/Profile';
import UserSingle from '../adminDash/main/users/Single';
import ProfileEdit from '../adminDash/main/profile/new/ProfileEdit';
import UserList from '../adminDash/main/users/List';
import UserEdit from '../adminDash/main/users/UserEdit';
import UserNew from '../adminDash/main/users/New';
import List from '../adminDash/pages/list/List';
import Single from '../adminDash/pages/single/Single';
import New from '../adminDash/pages/new/New';
import { productInputs, userInputs } from '../../formSource';
import MsgContactList from '../adminDash/main/msgContact/List';
import MsgSingle from '../adminDash/main/msgContact/Single';
import NewsList from '../adminDash/main/new/pages/List';
import NewsSingle from '../adminDash/main/new/pages/Single';
import NewsAdd from '../adminDash/main/new/pages/New';
import Notfoundpage from '../404/NotFoundpage';


const AdminRoutes = () => {
  return (
    <Route path="/admin/*" element={<AdminOutlet />}>
      <Route index element={<AdminIndex />} />
      <Route path="profile">
        <Route index element={<Profile />} />
        <Route path=":userId" element={<UserSingle />} />
        <Route
          path="edit"
          element={<ProfileEdit />}
        />
      </Route>
      <Route path="users">
        <Route index element={<UserList />} />
        <Route path=":userId" element={<UserSingle />} />
        <Route path="edit" element={<UserEdit />} />
        <Route
          path="new"
          element={<UserNew title="Add New User" />}
        />
      </Route>
      <Route path="teachers">
        <Route index element={<List />} />
        <Route path=":teachersId" element={<Single />} />
        <Route
          path="new"
          element={<New inputs={productInputs} title="Add New Product" />}
        />
      </Route>
      <Route path="msgContact">
        <Route index element={<MsgContactList />} />
        <Route path=":id" element={<MsgSingle />} />
      </Route>
      <Route path="news">
        <Route index element={<NewsList />} />
        <Route path=":newsId" element={<NewsSingle />} />
        <Route
          path="new"
          element={<NewsAdd inputs={userInputs} title="Add New User" />}
        />
      </Route>
      <Route path="*" element={<Notfoundpage />} />
    </Route>
  );
};

export default AdminRoutes;