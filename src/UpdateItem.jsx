import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";

export default function UpdateItem()
{
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");

    const [item, setItems] = useState({
        name: "",
        description: "",
        category: "",
        author: "",
      });    
    const [categories, setCategories] = useState([]);

   

    const {id} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:3000/item/${id}/update`) 
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItems(data.item);
        setCategories(data.categories);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }, [])

    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        const newItem = {
            name: item.name,
            desc: item.description,
            category: item.category,
            author: item.author,
          };
    
        fetch(`http://localhost:3000/item/${id}/update`, {
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

      const handleInputChange = (e) => {
        const name = e.target.name;
    const value = e.target.value;
    setItems({
      ...item,
      [name]: value,
    });
      };
    

   

    return(
        <div className="updateItem">
        <form action="" method="post" onSubmit={handleFormSubmit}>
        <label htmlFor="name">name:</label>
        <input
          type="text"
          name="name"
          id="name"
          minLength="1"
          maxLength="50"
          value={item.name}
          onChange={handleInputChange}
        />

        <label htmlFor="desc">description:</label>
        <input
          type="text"
          name="desc"
          id="desc"
          value={item.description}
          onChange={ (e)=>setItems({
            ...item,
            description: e.target.value,
          })}
          />

        <label htmlFor="category">Category</label>
        <select
          id="category"
          type="select"
          placeholder="Select category"
          name="category"
          value={item.category}
          onChange={handleInputChange}

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
          value={item.author}
          onChange={handleInputChange}
     
            />

        <input type="submit" />
      </form>
            
        </div>
    )
}