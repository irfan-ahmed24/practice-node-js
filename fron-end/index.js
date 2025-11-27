var Element = document.getElementById("elem");

fetch("http://localhost:3000/book")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.map((book) => {
      console.log(book);
      var child = document.createElement("li");
      child.innerHTML = book.BookName;
      child.innerHTML = book.author;
      Element.appendChild(child);
    });
  });
