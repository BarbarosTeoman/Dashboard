import "./App.css"
import data from "./data.json"
import Card from "./Card"
import { useState } from "react"

function App() {
	const [timeFrame, setTimeFrame] = useState<string>("daily")

	let cardTimeFrame

	if (timeFrame === "daily") {
		const timeText = "Yesterday"
		cardTimeFrame = data.map((item: any) => (
			<Card
				title={item.title}
				timeframe={timeText}
				current={item.timeframes.daily.current}
				previous={item.timeframes.daily.previous}
			/>
		))
	} else if (timeFrame === "weekly") {
		const timeText = "Last Week"
		cardTimeFrame = data.map((item: any) => (
			<Card
				title={item.title}
				timeframe={timeText}
				current={item.timeframes.weekly.current}
				previous={item.timeframes.weekly.previous}
			/>
		))
	} else if (timeFrame === "monthly") {
		const timeText = "Last Month"
		cardTimeFrame = data.map((item: any) => (
			<Card
				title={item.title}
				timeframe={timeText}
				current={item.timeframes.monthly.current}
				previous={item.timeframes.monthly.previous}
			/>
		))
	}

	return (
		<div className="main">
			<div className="container">
				<div className="personCard">
					<div className="person">
						<img src="/image-jeremy.png" alt="photo" />
						<div className="personInformation">
							<p>Report for</p>
							<h1>Jeremy</h1>
							<h1>Robson</h1>
						</div>
					</div>
					<div className="timeFrames">
						<button onClick={(_e) => setTimeFrame("daily")}>Daily</button>
						<button onClick={(_e) => setTimeFrame("weekly")}>Weekly</button>
						<button onClick={(_e) => setTimeFrame("monthly")}>Monthly</button>
					</div>
				</div>
				{cardTimeFrame}
			</div>
		</div>
	)
}

export default App
