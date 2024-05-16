import { useState } from "react";

export default function EntryParent() {
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
