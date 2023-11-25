import { useState, useEffect } from "react";

export default function CreateItem() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");

  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      name,
      desc,
      category,
      author,
    };

    fetch("http://localhost:3000/item/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then((data) => {

        console.log("Item saved:", data);
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetch("http://localhost:3000/item/create") 
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItems(data.item);
        setCategories(data.category);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="createItem">
      <form action="" method="post" onSubmit={handleFormSubmit}>
        <label htmlFor="name">name:</label>
        <input
          type="text"
          name="name"
          id="name"
          minLength="1"
          maxLength="50"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="desc">description:</label>
        <input
          type="text"
          name="desc"
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <label htmlFor="category">Category</label>
        <select
          id="category"
          type="select"
          placeholder="Select category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => {
            return (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            );
          })}
        </select>

        <label htmlFor="author">author:</label>
        <input
          type="text"
          name="author"
          id="author"
          required
          minLength="1"
          maxLength="50"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <input type="submit" />
      </form>
    </div>
  );
}
