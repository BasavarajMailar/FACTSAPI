import { useEffect, useState } from "react";

function App() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/facts/")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setFacts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>📘 Fun Facts</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {facts.map((item) => (
            <li key={item.id}>{item.fact}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
