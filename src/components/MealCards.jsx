export default function MealCard({ amount, meal, date }) {
  return (
    <div className="glass-card rounded-3xl p-6 transition-all duration-300 hover:scale-105 active:scale-95 group">
      <div className="text-center">
        <div className="bg-gradient-to-r from-pink-400/80 via-purple-500/80 to-indigo-500/80 text-white py-3 px-6 rounded-2xl text-xl font-bold mb-4 backdrop-blur-sm group-hover:shadow-xl transition-all duration-300">
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
