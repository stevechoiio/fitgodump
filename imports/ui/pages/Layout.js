import React from "react";
import Profile from "./Profile";
import Chat from "./Chat";
import Welcome from "./Welcome";
import Map from "./Map";

const Layout = () => {
  return (
    <div>
      <Profile />
      <Chat />
      <Welcome />
      <Map />
    </div>
  );
};

export default Layout;
