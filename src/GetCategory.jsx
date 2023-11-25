import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function GetCategory(){

    const { id } = useParams();
    const [category, setCategory] = useState(null);
    const [items, setItems] = useState(null);


    useEffect(() => {
      
      fetch(`http://localhost:3000/category/${id}`) 
        .then((response) => response.json())
        .then((data) => {
          console.log(data); 
          setCategory(data.category);
          setItems(data.items);
          console.log(data.items);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }, []);
    if (category === null ) {
        return <div>Loading...</div>;
      }

    return (
        <div>
            <h2>Category Detail</h2>
            <p>Name: {category.name}</p>
            <p>Description: {category.description}</p>

            <h2>Category Items</h2>

            <ul>
            {items ? (
            items.map((item) => (
              <a key={item._id} href={`/item/${item._id}`}><li key={item._id}>{item.name} </li></a>  
            ))
            ) : (
            <li>No items available</li>
            )}
            </ul>
           
    </div>
    )
}