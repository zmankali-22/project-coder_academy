
import "./App.css";
import EntryParent from "./components/EntryParent";
import EntryForm from "./components/EntryForm";
import { useJournalData } from "./contexts/BlogContext";

function App() {

  let {journalEntries} = useJournalData()


 

  return (
    <>
  
      <EntryForm entryData={{}}  />

      {journalEntries.map((entry) => (
        <EntryParent
          key={entry.id}
          entryData={entry}
          
        />
      ))}
    </>
  );
}

export default App;
