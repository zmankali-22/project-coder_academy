
export default function Entry({title, author, date, content}) {
  return (
    <div>
        <h2>{title}</h2>
        <h4>{author}</h4>
        <h6>{date}</h6>
        <p>{content}</p>
    </div>
  )
}
