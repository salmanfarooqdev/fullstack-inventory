import { useParams } from "react-router-dom";

export default function DeleteItem()
{
    const { id } = useParams();

    const handleFormSubmit = async (e) => {
        e.preventDefault();

    fetch(`http://localhost:3000/item/${id}/delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
  
          console.log("Item Deleted:", data);
          window.location.href = "/";
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
        return(
            <div className="deleteItem">
    
                <form action="" method="post" onSubmit={handleFormSubmit}>
                <input type="submit" value="delete"/>
               </form>
            </div>
        )
    }

   
