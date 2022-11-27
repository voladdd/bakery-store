import { observer } from "mobx-react-lite";
import React, { useContext, useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import "./App.css";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { checkRoles } from "./http/userApi";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkRoles()
      .then((data) => {
        user?.setUser(user);
        user?.setIsAuth(true);
        user?.setUserRoles(data);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
