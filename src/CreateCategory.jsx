import { useState, useEffect } from "react";

export default function CreateCategory() {
  const [cname, setName] = useState("");
  const [cdesc, setDesc] = useState("");
  

  const [categories, setCategories] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const newCategory = {
      cname,
      cdesc,
    };

    fetch("http://localhost:3000/category/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategory),
    })
      .then((response) => response.json())
      .then((data) => {

        console.log("Category saved:", data);
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

 

  return (
    <div className="createCategory">
      <form action="" method="post" onSubmit={handleFormSubmit}>
        <label htmlFor="name">name:</label>
        <input
          type="text"
          name="cname"
          id="name"
          minLength="1"
          maxLength="50"
          value={cname}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="desc">description:</label>
        <input
          type="text"
          name="cdesc"
          id="desc"
          value={cdesc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <input type="submit" />
      </form>
    </div>
  );
}
