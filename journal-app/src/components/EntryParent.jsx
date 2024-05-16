import { useState } from "react";
import Entry from "./Entry";

export default function EntryParent({entryData}) {
  const [editMode, setEditMode] = useState(false);
  return (
    <section>
      {editMode ? (
        <EntryForm entryData={entryData} />
      ) : (
        <Entry entryData={entryData} />
      )}
      <button onClick={() => setEditMode(!editMode)}>Edit</button>
    </section>
  );
}
