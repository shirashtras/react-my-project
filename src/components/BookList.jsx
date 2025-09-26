import React from "react";

const BookList = () => {
  const books = [
    {
      Id: "111",
      Author: "Havraam",
      Characters: "sara",
      Type: "frightening",
      Price: 100,
    },
    {
      Id: "222",
      Author: "Yitzchak",
      Characters: "Rivka",
      Type: "exciting",
      Price: 200,
    },
    {
      Id: "333",
      Author: "Yaakov",
      Characters: "Rachel",
      Type: "boring",
      Price: 300,
    },
    {
      Id: "444",
      Author: "Moshe",
      Characters: "Leah",
      Type: "romantic",
      Price: 400,
    },
    {
      Id: "555",
      Author: "Haaron",
      Characters: "Miryam",
      Type: "Jewish",
      Price: 500,
    },
  ];
  const keys = ["Id", "Author", "Characters", "Type", "Price"];
  return (
   <>
      <h2>Books</h2>
      <table border="1" cellPadding="5">
        <tr>
          {keys.map((h) => (
            <th key={h}>{h}</th>
          ))}
        </tr>
        {books.map((book) => (
          <tr key={book.Id}>
            {keys.map((h) => (
              <td key={h}>{book[h]}</td>
            ))}
          </tr>
        ))}
      </table>
    </>
  )
};

export default BookList;
