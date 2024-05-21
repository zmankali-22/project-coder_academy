import { useState } from "react"
import { useJournalDispatch } from "../contexts/BlogContext"
import { useNavigate } from "react-router-dom"

export default function EntryForm(entryData) {

    const [localTitle, setLocalTitle] = useState(entryData.title || "Deafult Title")
    const [localAuthor, setLocalAuthor] = useState(entryData.author || "Deafult Author")
    const [localContent, setLocalContent] = useState(entryData.content || "Deafult Content")


    let {addEntryToJournal }= useJournalDispatch()
    let navigate = useNavigate()

    const submitEntry = () => {
      addEntryToJournal(localTitle, localAuthor, localContent, Date.now(), entryData?.id) 
    }


  return (
    <div>
        <label htmlFor="entryTitle">Title:</label>
        <input type="text" name = "entryTitle" className="entryTitle"  value={localTitle} onChange={(event) => setLocalTitle(event.target.value)}/>

        <label htmlFor="entryAuthor">Author:</label>
        <input type="text" name = "entryAuthor" className="entryAuthor"  value={localAuthor} onChange={(event) => setLocalAuthor(event.target.value)}/>

        <label htmlFor="entryContent">Content:</label>
        <input type="text" name = "entryContent" className="entryContent"  value={localContent} onChange={(event) => setLocalContent(event.target.value)}/>

        <button onClick ={submitEntry} >submit</button>
    </div>
  )
}
