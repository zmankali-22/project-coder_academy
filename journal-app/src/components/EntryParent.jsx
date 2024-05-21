import { useEffect, useState } from "react";
import Entry from "./Entry";
import EntryForm from "./EntryForm";
import { useJournalData } from "../contexts/BlogContext";

export default function EntryParent({id}) {
  const [editMode, setEditMode] = useState(false);


  let [journalEntry, setJournalEntry] = useState({})

  let {journalEntries} = useJournalData()

  useEffect(() => {
    let foundEntry = journalEntries.find(entry => entry.id === parseInt(id))

    if (foundEntry) {

      setJournalEntry(foundEntry)
      setEditMode(false)
    }
  },[journalEntries, id])

  return (
    <section>
      {editMode ? (
        <EntryForm entryData = {journalEntry}/>
      ) : (
        <Entry entryData = {journalEntry} />
      )}
      <button onClick={() => setEditMode(!editMode)}>Edit</button>
    </section>
  );
}
