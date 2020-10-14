/// Sends requests yay! To clean up components.

export default {
  login: (user) => {
    return fetch("https://mern-auth-skeleton.herokuapp.com/user/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 401) {
        return res.json().then((data) => data);
      } else {
        return { isAuthenticated: false, user: { username: "", role: "" } };
      }
    });
  },

  register: (user) => {
    return fetch("https://mern-auth-skeleton.herokuapp.com/user/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },

  logout: () => {
    return fetch("https://mern-auth-skeleton.herokuapp.com/user/logout")
      .then((res) => res.json())
      .then((data) => data);
  },

  ///Sync back and front end together
  isAuthenticated: () => {
    return fetch("https://mern-auth-skeleton.herokuapp.com/user/auth").then(
      (res) => {
        if (res.status !== 401) {
          return res.json().then((data) => data);
        } else {
          return { isAuthenticated: false, user: { username: "", role: "" } };
        }
      }
    );
  },
};
