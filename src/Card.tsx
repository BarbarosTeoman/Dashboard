export default function Card(props: any) {

  return (
    <div className="card">
      <div className="sectionBackground">
        <img src={`public/icon-${props.title.toLowerCase().split(" ").join("-")}.svg`}/>
      </div>
      <div className={"cardInformation"}>
        <div className="topOfCard">
          <h4>{props.title}</h4>
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
        </div>
        <div className="bottomOfCard">
          <h1>{props.current}hrs</h1>
          <p>{props.timeframe} - {props.previous}hrs</p>
        </div>
      </div>
    </div>
  )
}