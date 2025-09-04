export default function MealCard({amount , meal}) {

  return (
    <div className="border flex gap-3 flex-col px-10 rounded-2xl ">
      <h1 className="bg-[rgba(255,255,255,0.2)] text-white py-1 rounded-full text-2xl backdrop-blur-lg mt-5 w-fit mx-auto px-10">
        {meal}
      </h1>
      <div>
        <h2><b>Price:</b> {amount}</h2>
        <h2 className="mb-3"><b>Date:</b> 12-04-2026</h2>
      </div>
    </div>
  );
}
