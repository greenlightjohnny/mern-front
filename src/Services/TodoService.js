export default {
  getTodos: () => {
    return fetch("https://mern-auth-skeleton.herokuapp.com/user/todo").then(
      (res) => {
        if (res.status != 401) {
          return res.json().then((data) => data);
        } else {
          return { message: { msgBody: "UnAuthorized" }, msgError: true };
        }
      }
    );
  },

  postTodo: (todo) => {
    return fetch("https://mern-auth-skeleton.herokuapp.com/user/todo", {
      method: "post",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status != 401) {
        return res.json().then((data) => data);
      } else {
        return { message: { msgBody: "No auth", msgError: true } };
      }
    });
  },
};
