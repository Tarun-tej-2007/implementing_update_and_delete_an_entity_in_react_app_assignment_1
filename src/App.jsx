import { useState, useEffect } from "react";
import UpdateItem from "./components/UpdateItem";

// use the following link to get the data
// `/doors` will give you all the doors, to get a specific door use `/doors/1`.
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [item, setItem] = useState(null);

  // Fetch the existing item from the server
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`${API_URI}/1`); // Fetch door with ID 1
        if (response.ok) {
          const data = await response.json();
          setItem(data);
        } else {
          console.error("Failed to fetch the item");
        }
      } catch (error) {
        console.error("Error fetching the item:", error);
      }
    };

    fetchItem();
  }, []);

  return <UpdateItem item={item} />;
}

export default App;