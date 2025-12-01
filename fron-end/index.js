const data = {
  name: "irfan",
  email: "irfanahmed99989@gmail.com",
};

fetch("http://localhost:3001/user", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
