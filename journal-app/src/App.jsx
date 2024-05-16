import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import "./App.css";

function App() {
  const [journalEntries, setJournalEntries] = useState([]);
  const [storedEntries, setStoredEntries] = useLocalStorage("journalEntries");

  useEffect(() => {
    setJournalEntries(storedEntries);

    return () => {
      setStoredEntries(journalEntries);
    };
  }, []);
  return (
    <>
      {journalEntries.length > 0 && (
        <p>{JSON.stringify(journalEntries)}</p>
      )}
    </>
  );
}

export default App;
