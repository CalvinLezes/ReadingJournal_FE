import { useNavigate } from "react-router-dom";


function MonthButton(props) {
    const navigate = useNavigate();
    const monthNames = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ];
  function MonthStatsHandler() {
    navigate("/stats/" + props.month, { replace: true });
  }
  return <button onClick={MonthStatsHandler}>{monthNames[props.month-1]}</button>;
}

export default MonthButton;
