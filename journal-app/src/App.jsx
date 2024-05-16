import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import "./App.css";
import EntryParent from "./components/EntryParent";
import EntryForm from "./components/EntryForm";

function App() {
  const [journalEntries, setJournalEntries] = useState([]);
  const [storedEntries, setStoredEntries] =
    useLocalStorage("journalEntries", []);

  const addEntryToJournal = (
    title,
    author,
    content,
    date = Date.now(),
    id = null,
  ) => {

    if (id) {
      let existingEntry = journalEntries.find(entry => entry.id === id);
      let currentJournalEntries= journalEntries.filter(entry => entry.id !== id)
      // update the found object
      existingEntry = {
        id: id,
        title: title,
        author: author,
        content: content,
        date: date,
      }

      // add the found object back in the array

      let updatedJournalEntries = [...currentJournalEntries, existingEntry];

      // write the state to state and localStorage
      setJournalEntries(updatedJournalEntries);
      setStoredEntries(updatedJournalEntries);
    }else {

      // create a new entry

      setJournalEntries([
        ...journalEntries,
        { id: journalEntries.length, title, author, content, date },
      ]);
      setStoredEntries([
        ...journalEntries,
        { id: journalEntries.length, title, author, content, date },
      ]);
    }
    }

 

  useEffect(() => {
    setJournalEntries(storedEntries);

    // return () => {
    //   setStoredEntries(journalEntries);
    // };
  }, []);
  return (
    <>
      {journalEntries?.length > 0 && (
        <p>{JSON.stringify(journalEntries)}</p>
      )}
      <EntryForm entry={{}} addEntry={addEntryToJournal} />

      {journalEntries.map((entry) => (
        <EntryParent
          key={entry.id}
          entryData={entry}
          addEntry={addEntryToJournal}
        />
      ))}
    </>
  );
}

export default App;
