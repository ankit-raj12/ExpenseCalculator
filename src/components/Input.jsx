import { useState } from "react";

export default function Input({ setBill }) {
  const [meal, setMeal] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (price, meal) => {
    if (!meal || !price) return;
    
    // Use input date if provided, otherwise use today's date
    const finalDate = date || new Date().toLocaleDateString("en-IN");
    
    setBill((prev) => [...prev, { meal, amount: +price, date: finalDate }]);
    setMeal("");
    setPrice("");
    setDate(""); // Clear the date field too
  };

  return (
    <div className="mb-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(price, meal);
        }}
        className="flex flex-col lg:flex-row gap-4 justify-center items-center w-full max-w-2xl mx-auto px-4"
      >
        <div className="relative w-full sm:w-auto">
          <input
            onChange={(e) => {
              setMeal(e.target.value);
            }}
            value={meal}
            className="w-full sm:w-64 px-8 py-4 rounded-2xl outline-none glass-input text-white placeholder-white/70 text-center font-medium transition-all duration-300 focus:scale-105"
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
            className="w-full sm:w-64 px-6 py-4 rounded-2xl outline-none glass-input text-white placeholder-white/70 text-center font-medium transition-all duration-300 focus:scale-105"
            type="number"
            placeholder="💰 Enter the amount"
            autoComplete="off"
            inputMode="decimal"
          />
        </div>
        <div className="relative w-full sm:w-auto">
          <input
            onChange={(e) => {
              setDate(e.target.value);
            }}
            value={date}
            className="w-full sm:w-64 px-6 py-4 rounded-2xl outline-none glass-input text-white placeholder-white/70 text-center font-medium transition-all duration-300 focus:scale-105"
            type="date"
            placeholder="💰 Enter the amount"
            autoComplete="off"
            inputMode="decimal"
          />
        </div>
        <button 
          type="submit"
          className="w-full sm:w-auto px-8 py-4 text-white font-bold rounded-2xl glass-button transition-all duration-300 hover:scale-105 active:scale-95 min-h-[56px] bg-gradient-to-r from-pink-500/80 to-purple-600/80"
        >
          Add
        </button>
      </form>
    </div>
  );
}
