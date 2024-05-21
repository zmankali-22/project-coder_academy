import { useEffect } from "react"
import { useJournalData } from "../contexts/BlogContext"
import Entry from "../components/Entry"
import { useNavigate } from "react-router-dom"

export default function LatestPostRedirector() {

    let {journalEntries} = useJournalData()
    let navigate = useNavigate()

    useEffect(() => {
        let sortedEntries = [...journalEntries].sort(
            (entryA, entryB) => entryB.id - entryA.id
        )

        let latestEntry = sortedEntries[0]
        navigate(`/view/${latestEntry.id}`)
    },[journalEntries, navigate])
  return (
   <div>
    <h1>Loading...</h1>
   </div>
  )
}
