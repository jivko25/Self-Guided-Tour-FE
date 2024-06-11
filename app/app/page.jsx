"use client";
import variables from "./styles/_variables.module.scss";
import { axios } from "../api/axios";
import { useEffect } from "react";
import InputField from "./components/InputField";
export default function Home() {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get();
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
      } catch (error) {
        if (error.response) {
          // Not in the 200 response range
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
        } else {
          // No response from the server
          console.error("Error", error.message);
        }
      }
    }
    fetchData();
  }, []);

  const handleCHange = (e) => {
    console.log(e.target.value);
  }

  return (
    <main>
      <h1 className="text-7xl font-bold">Home</h1>
    </main>
  );
}
