import { useState } from "react";
import MealCard from "./MealCards";

export default function CardList({ bill, setBill }) {
  const [sortOrder, setSortOrder] = useState('newest'); // 'newest', 'oldest'
  
  const totalAmount = bill.reduce((acc, curr) => acc + curr.amount, 0);

  const handleDeleteExpense = (indexToDelete) => {
    setBill((prevBill) => prevBill.filter((_, index) => index !== indexToDelete));
  };

  const handleSort = () => {
    const newSortOrder = sortOrder === 'newest' ? 'oldest' : 'newest';
    setSortOrder(newSortOrder);
  };

  // Sort the bills by date
  const sortedBill = [...bill].map((item, originalIndex) => ({
    ...item,
    originalIndex
  })).sort((a, b) => {
    if (!a.date || !b.date) return 0;
    
    // Convert date strings to Date objects for comparison
    let dateA, dateB;
    
    // Handle both DD/MM/YYYY and YYYY-MM-DD formats
    if (a.date.includes('/')) {
      const [day, month, year] = a.date.split('/');
      dateA = new Date(year, month - 1, day);
    } else {
      dateA = new Date(a.date);
    }
    
    if (b.date.includes('/')) {
      const [day, month, year] = b.date.split('/');
      dateB = new Date(year, month - 1, day);
    } else {
      dateB = new Date(b.date);
    }
    
    if (sortOrder === 'newest') {
      return dateB - dateA; // Newest first
    } else {
      return dateA - dateB; // Oldest first
    }
  });

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="glass-total text-2xl sm:text-3xl font-bold px-8 py-6 rounded-3xl mx-auto mt-8 text-center w-fit">
        <span className="drop-shadow-lg">
          💰 Total: ₹{totalAmount}
        </span>
      </div>
      
      {bill.length === 0 ? (
        <div className="text-center mt-16 p-8">
          <div className="text-6xl mb-4">🍽️</div>
          <p className="text-2xl font-semibold text-white mb-2">No expenses added yet!</p>
          <p className="text-lg text-white/80">Start tracking your delicious expenses above ✨</p>
        </div>
      ) : (
        <>
          {/* Sort Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={handleSort}
              className="glass-button px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 active:scale-95 bg-gradient-to-r from-blue-500/80 to-purple-600/80 text-white border-2 border-white/30"
            >
              📅 Sort by Date: {sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}
            </button>
          </div>

          <div className="card-container mt-8">
            {sortedBill.map((item, index) => {
              // Only render if item has both amount and meal
              if (!item.amount || !item.meal) return null;
              
              return (
                <MealCard 
                  key={`${item.originalIndex}-${item.meal}-${item.date}`}
                  meal={item.meal} 
                  amount={item.amount} 
                  date={item.date}
                  onDelete={handleDeleteExpense}
                  index={item.originalIndex}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
