import { useState } from "react";
import Entry from "./Entry";
import EntryForm from "./EntryForm";

export default function EntryParent({entryData}) {
  const [editMode, setEditMode] = useState(false);
  return (
    <section>
      {editMode ? (
        <EntryForm {...entryData}/>
      ) : (
        <Entry {...entryData} />
      )}
      <button onClick={() => setEditMode(!editMode)}>Edit</button>
    </section>
  );
}
