import { useNavigate, useParams } from "react-router-dom"
import EntryParent from "../components/EntryParent"

export default function EntryViewPage() {

    let {id} = useParams()
    let navigate = useNavigate()
  return (
    <div>
        <EntryParent id = {id} />
        <button onClick={() => navigate(-1)}>GO back</button>
    </div>
  )
}
