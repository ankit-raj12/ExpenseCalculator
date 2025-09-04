export default function MealCard({ amount, meal, date }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105 hover:bg-white/15 active:scale-95 group">
      <div className="text-center">
        <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-white py-3 px-6 rounded-2xl text-xl font-bold mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
          <span className="capitalize">{meal}</span>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="text-emerald-300 text-lg font-semibold">💰 Price:</span>
            <span className="text-2xl font-bold text-green-300">₹{amount}</span>
          </div>
          
          {date && (
            <div className="flex items-center justify-center gap-2">
              <span className="text-blue-300 font-medium">📅</span>
              <span className="text-white/80">{date}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
