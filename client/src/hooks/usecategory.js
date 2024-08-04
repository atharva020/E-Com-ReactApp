import { useState, useEffect } from "react";
import axios from "axios";

export default function useCatergory() {
  const [categories, setCategory] = useState([]);

  const getCaterory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCaterory();
  }, []);
}
