import { useState } from "react";

export default function Input({ setBill }) {
  const [meal, setMeal] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (price, meal) => {
    const date = new Date().toLocaleDateString("en-IN");
    if (!meal || !price) return;
    setBill((prev) => [...prev, { meal, amount: +price, date }]);
    setMeal("");
    setPrice("");
  };

  return (
    <div className="mb-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(price, meal);
        }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-2xl mx-auto px-4"
      >
        <div className="relative w-full sm:w-auto">
          <input
            onChange={(e) => {
              setMeal(e.target.value);
            }}
            value={meal}
            className="w-full sm:w-64 px-8 py-4 rounded-2xl outline-none bg-white/20 backdrop-blur-md text-white placeholder-white/70 text-center font-medium transition-all duration-300 focus:bg-white/30 focus:scale-105 border-2 border-white/30 focus:border-white/60 shadow-lg"
            type="text"
            placeholder="🍕 Enter the food"
            autoComplete="off"
          />
        </div>
        <div className="relative w-full sm:w-auto">
          <input
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            value={price}
            className="w-full sm:w-64 px-6 py-4 rounded-2xl outline-none bg-white/20 backdrop-blur-md text-white placeholder-white/70 text-center font-medium transition-all duration-300 focus:bg-white/30 focus:scale-105 border-2 border-white/30 focus:border-white/60 shadow-lg"
            type="number"
            placeholder="💰 Enter the amount"
            autoComplete="off"
            inputMode="decimal"
          />
        </div>
        <button 
          type="submit"
          className="w-full sm:w-auto px-8 py-4 text-white font-bold rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 shadow-xl border-2 border-white/30 min-h-[56px]"
        >
          ✨ Add Expense
        </button>
      </form>
    </div>
  );
}
