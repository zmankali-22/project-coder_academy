import { useState } from "react"

export default function EntryForm() {

    const [localTitle, setLocalTitle] = useState({entryData.title})
    const [localAuthor, setLocalAuthor] = useState({entryData.author})
    const [localContent, setLocalContent] = useState({entryData.content})
  return (
    <div>
        <label htmlFor="entryTitle">Title:</label>
        <input type="text" name = "entryTitle" className="entryTitle"  value={null} onChange={(event) => setLocalTitle(event.target.value)}/>

        <label htmlFor="entryAuthor">Author:</label>
        <input type="text" name = "entryAuthor" className="entryAuthor"  value={null} onChange={(event) => setLocalAuthor(event.target.value)}/>

        <label htmlFor="entryContent">Content:</label>
        <input type="text" name = "entryContent" className="entryContent"  value={null} onChange={(event) => setLocalContent(event.target.value)}/>
    </div>
  )
}
