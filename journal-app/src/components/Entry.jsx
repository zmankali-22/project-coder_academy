
export default function Entry({title, author, date, content}) {
  return (
    <div>
        <h1>{title}</h1>
        <h4>{author}</h4>
        <h6>{date}</h6>
        <p>{content}</p>
    </div>
  )
}
