import { useState } from "react";

export default function Input({ setBill }) {
  const [meal, setMeal] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (price, meal) => {
    const date = new Date().toLocaleDateString("en-IN");
    if(!meal || !price) return
    setBill((prev) => [...prev, { meal, amount: +price, date }]);
    setMeal("");
    setPrice("");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(price, meal);
      }}
      className="flex gap-3 justify-center items-center mt-10 w-fit m-auto"
    >
      <input
        onChange={(e) => {
          setMeal(e.target.value);
        }}
        value={meal}
        className="food border px-[1.5rem] rounded-full py-3 outline-none bg-[rgba(255,255,255,0.2)]"
        type="text"
        placeholder="Enter the food"
      />
      <input
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
        className="amount border px-[1.5rem] w-[max(30vw ,100%)] rounded-full py-3 outline-none bg-[rgba(255,255,255,0.2)]"
        type="number"
        placeholder="Enter the amount"
      />
      <button className="px-6 text-black rounded-full py-3 bg-[#14f79c]  cursor-pointer  transition delay-50 ease-in hover:shadow-[0px_0px_10px_rgba(0,0,0,0.3)] hover:scale-105 shadow-white w-full">
        Add
      </button>
    </form>
  );
}
