import MonthButton from "./MonthButton";

function MonthButtons() {
  var months = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  const current = new Date();
  var currentMonth = current.getMonth() + 1;
  console.log(currentMonth);
  months = months.concat(months.splice(0, months.length - currentMonth));
  return (
    <section>
      {months.map((month) => {
        return <MonthButton month={month} />;
      })}
    </section>
  );
}

export default MonthButtons;
