import { useState, useEffect } from "react";

export default function Home()
{
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      
      fetch('http://localhost:3000/') // Replace with the correct URL
        .then((response) => response.json())
        .then((data) => {
          console.log(data); 
          setItems(data.item);
          setCategories(data.category);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }, []);
  
    return (
        <div className="container">
             <h1>Inventory System</h1>


            <h2>Categories</h2>
            <ul>
            {categories ? (
            categories.map((category) => (

                <a key={category._id} href={`/category/${category._id}`}><li key={category._id}>{category.name}</li></a> 
            ))
            ) : (
            <li>No categories available</li>
            )}
            </ul>

            <h2>Items</h2>
            <ul>
            {items ? (
            items.map((item) => (
              <a key={item._id} href={`/item/${item._id}`}><li key={item._id}>{item.name} ({item.category.name})</li></a>  
            ))
            ) : (
            <li>No items available</li>
            )}
            </ul>
        </div>
    )
}