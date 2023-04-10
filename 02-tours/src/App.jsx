import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };
  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(tours);
      setTours(data);
    } catch {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!tours.length) {
    return (
      <button className="btn" onClick={fetchTours}>
        refetch tours
      </button>
    );
  }
  return (
    <main>
      <section className="container">
        <h2>Tours</h2>
        <Tours tours={tours} removeTour={removeTour} />
      </section>
    </main>
  );
};
export default App;
