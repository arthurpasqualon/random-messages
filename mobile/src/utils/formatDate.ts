import moment from 'moment'

export default function (timestamp: string) {
	const raw = new Date(Number(timestamp) * 1000)
	const date = moment(raw).format("HH:MM - MM/DD/YY");
	return date
}