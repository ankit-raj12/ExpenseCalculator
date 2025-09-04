import MealCard from "./MealCards";

export default function CardList({ bill }) {
  const totalAmount = bill.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 text-white text-2xl sm:text-3xl font-bold px-8 py-6 rounded-3xl mx-auto mt-8 shadow-2xl text-center border-4 border-white/30 backdrop-blur-lg w-fit">
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
        <div className="card-container mt-12">
          {bill
            .filter((food) => food.amount && food.meal)
            .map((item, index) => (
              <MealCard 
                key={index} 
                meal={item.meal} 
                amount={item.amount} 
                date={item.date}
              />
            ))}
        </div>
      )}
    </div>
  );
}
