"use client";
import { axios } from "../api/axios";
import { useEffect } from "react";
import Button from "./components/Buttons/Button.jsx";
import ButtonGoogle from "./components/Buttons/ButtonGoogle.jsx";
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

  return (
    <main className="flex flex-col gap-6">
      {/* <h1 className="text-7xl font-bold">Home</h1> */}
      <Button variant="primary-short" text="Button" />
      <Button variant="primary-long" text="Button" />
      <Button variant="secondary" text="Button" />
      <Button variant="secondary-short" text="Button" />
      <Button variant="secondary-outlined" text="Button" />
      <Button variant="secondary-bg-color" text="Button" />
    </main>
  );
}
