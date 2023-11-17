import React, { useContext } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import Posts from "../pages/Posts";
import { Error } from "../pages/Error";
import { PostIdPage } from "../pages/PostIdPage";
import { publicRoutes, privateRoutes } from "../router/routes";
import { AuthContext } from "../context";
import { Login } from "../pages/Login";

export const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          index={route.index}
          key={route.path}
          exact={route.exact}
          path={route.path}
          element={route.element}
        ></Route>
      ))}

      {/* <Route path="/*" element={<Error></Error>}></Route> */}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => {
        return (
          <Route
            index={route.index}
            key={route.path}
            exact={route.exact}
            path={route.path}
            element={route.element}
          ></Route>
        );
      })}

      {/* <Route path="/*" element={<Error></Error>}></Route> */}
    </Routes>
  );
};
