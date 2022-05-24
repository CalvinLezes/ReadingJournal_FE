import { useEffect, useState } from "react";
import bookApi from "../../Components/services/BookService";
import AllTimeStats from "../../Components/stats/AllTimeStats";
import MonthButtons from "../../Components/stats/MonthButtons";
import Card from "../../Components/ui/Card";
import Loading from "../Loading";


function StatsPage() {
  const [stats, setStats] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    bookApi.getAllTimeStats().then((resp) => {
      console.log(resp);
      setIsLoading(false);
      setStats(resp.data);
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Card>
      <MonthButtons/>
      <AllTimeStats stats={stats} />
    </Card>
  );
}

export default StatsPage;
