import { useState } from "react"
import { useJournalDispatch } from "../contexts/BlogContext"

export default function EntryForm({title, author, content, id}) {

    const [localTitle, setLocalTitle] = useState(title || "Deafult Title")
    const [localAuthor, setLocalAuthor] = useState(author || "Deafult Author")
    const [localContent, setLocalContent] = useState(content || "Deafult Content")


    let {addEntryToJournal }= useJournalDispatch()


  return (
    <div>
        <label htmlFor="entryTitle">Title:</label>
        <input type="text" name = "entryTitle" className="entryTitle"  value={localTitle} onChange={(event) => setLocalTitle(event.target.value)}/>

        <label htmlFor="entryAuthor">Author:</label>
        <input type="text" name = "entryAuthor" className="entryAuthor"  value={localAuthor} onChange={(event) => setLocalAuthor(event.target.value)}/>

        <label htmlFor="entryContent">Content:</label>
        <input type="text" name = "entryContent" className="entryContent"  value={localContent} onChange={(event) => setLocalContent(event.target.value)}/>

        <button onClick ={() => addEntryToJournal(localTitle, localAuthor, localContent, Date.now(), id) } >submit</button>
    </div>
  )
}
