import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function GetItem(){

    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
      
      fetch(`http://localhost:3000/item/${id}`) 
        .then((response) => response.json())
        .then((data) => {
          console.log(data); 
          setItem(data.itemInstance);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }, []);
    if (item === null) {
        return <div>Loading...</div>;
      }

    return (
        <div>
            <h2>Item Detail</h2>
            <p>Name: {item.name}</p>
            <p>Category: {item.category.name}</p>
            <p>Description: {item.description}</p>
            <p>Author: {item.author}</p>

            <br />
            <br />
            <a href={`/item/${item._id}/delete`}>Delete item</a> <br />
            <a href={`/item/${item._id}/update`}>Update item</a>
    </div>
    )
}