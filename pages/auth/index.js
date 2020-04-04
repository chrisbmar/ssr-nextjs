import React from "react";
import User from "../../components/User/index";

const authIndexPage = (props) => (
  <div>
    <h1>The Auth Index Page - {props.appName}</h1>
    <User name="Chris" age="25" />
  </div>
);

authIndexPage.getInitialProps = (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "Super App (Auth page)" });
    }, 1000);
  });
  return promise;
};

export default authIndexPage;
