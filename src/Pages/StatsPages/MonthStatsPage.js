import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bookApi from "../../Components/services/BookService";
import MonthStats from "../../Components/stats/MonthStats";

import Card from "../../Components/ui/Card";
import Loading from "../Loading";

function MonthStatsPage() {
  const [stats, setStats] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const {month} = useParams();
  useEffect(() => {
    setIsLoading(true);
    bookApi.getMonthStats(month).then((resp) => {
      console.log(resp);
      setIsLoading(false);
      setStats(resp.data);
    });
  }, [month]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Card>
      <MonthStats stats={stats} month={month}/>
    </Card>
  );
}

export default MonthStatsPage;
