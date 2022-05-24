import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Card from "../ui/Card";
ChartJS.register(ArcElement, Tooltip, Legend);

function AllTimeStats(props) {
  const data = {
    labels: ["1 звезда", "2 звезды", "3 звезды", "4 звезды", "5 звезд"],
    datasets: [
      {
        label: "# of Votes",
        data: props.stats.ratings,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  if (props.stats.total === 0) {
    return (
      <Card>
        <h1>Ваша статистика чтения:</h1>
        <h2>Вы не прочли еще ни одной книги</h2>
      </Card>
    );
  }
  return (
    <Card>
      <h1>Ваша статистика чтения:</h1>
      <h2>Всего книг прочитано: {props.stats.total}</h2>
      <h2>Ваши лучшие книги:</h2>
      {props.stats.bestBooks.map((book) => {
        return <h4>{book}</h4>;
      })}
      <h2>Ваши худшие книги:</h2>
      {props.stats.worstBooks.map((book) => {
        return <h4>{book}</h4>;
      })}
      <h2>Распределение оценок:</h2>
      <Pie data={data} />
    </Card>
  );
}

export default AllTimeStats;
