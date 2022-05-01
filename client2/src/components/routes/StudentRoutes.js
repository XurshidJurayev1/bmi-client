import React from 'react';
import { Route } from 'react-router-dom';

const StudentRoutes = () => {
  return (
    <>
      <Route path="/student/*">
        <Route index element={<h1>USER PAGE</h1>} />
      </Route>
    </>
  );
};

export default StudentRoutes;