import { useEffect, useState } from "react";

function App() {
  const [radius, setRadius] = useState();
  const [data, setData] = useState({});
  const handlechange = (e) => {
    setRadius(e.target.value);
  };

  const dataPost = () => {
    fetch("http://localhost:3001/circle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ radius: radius }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dataPost();
  };
  return (
    <>
      <div>
        <h1>Circle Area</h1>
        <form action="" onSubmit={handleSubmit} method="POST">
          <label htmlFor="radius">Enter Radius:</label>
          <br />
          <input type="number" name="radius" onChange={handlechange} />
          <button type="submit">submit</button>
        </form>
        <h1>radius of this circle:{data.radius}</h1>
        <h1>Area or this Circle:{data.area}</h1>
      </div>
    </>
  );
}

export default App;
