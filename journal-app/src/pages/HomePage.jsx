import EntryParent from "../components/EntryParent";
import { useJournalData } from "../contexts/BlogContext";

export default function HomePage() {


  let { journalEntries } = useJournalData();


  return (
    <div>
      {journalEntries.map((entry) => (
        <EntryParent key={entry.id} id = {entry.id}/>
      ))}
    </div>
  );
}
