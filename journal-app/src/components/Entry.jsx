
export default function Entry({entryData}) {
  return (
    <div>
        <h1>{entryData.title}</h1>
        <h4>{entryData.author}</h4>
        <h6>{entryData.date}</h6>
        <p>{entryData.content}</p>
    </div>
  )
}
