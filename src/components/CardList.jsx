import MealCard from "./MealCards";

export default function CardList({bill}) {
  console.log;
  return (
    <>
      <div className="total text-2xl border w-fit px-5 py-2 rounded-full m-auto mt-10">
        <b>Total: &nbsp;&nbsp;</b>₹
        {bill.reduce((acc, curr) => acc + curr.amount, 0)}
      </div>
      <div className="card-container mt-10">
        {bill
          .filter((food) => food.amount && food.meal)
          .map((item, index) => (
            <MealCard key={index} meal={item.meal} amount={item.amount} />
          ))}
      </div>
    </>
  );
}
