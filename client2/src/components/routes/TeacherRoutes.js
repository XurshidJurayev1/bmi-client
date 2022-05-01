import React from 'react';
import { Route } from 'react-router-dom';

const TeacherRoutes = () => {
  return (
    <>
      <Route path="/teacher/*">
        <Route index element={<h1>TEACHER PAGE</h1>} />
      </Route>
    </>
  );
};

export default TeacherRoutes;