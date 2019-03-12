import Team from './Team'

export interface Player {
	id: number,
	name: string,
	number: number,
	value: number,
	xp: number,
	attributes: {
		ma: number,
		st: number,
		ag: number,
		av: number
	},
	type: string,
	level: number,
	casualties_state_id: string[],
	casualties_state: string[],
	suspended_next_match: boolean,
	skills: string[],
	statistics: {
		carreer: Statistics,
		currentcompetition: Statistics
	},
	team: Team
}

export interface Statistics {
	matchplayed: number,
	mvp: number,
	inflictedpasses: number,
	inflictedcatches: number,
	inflictedinterceptions: number,
	inflictedtouchdowns: number,
	inflictedcasualties: number,
	inflictedtackles: number,
	inflictedko: number,
	inflictedinjuries: number,
	inflicteddead: number,
	inflictedmetersrunning: number,
	inflictedmeterspassing: number,
	inflictedpushouts: number,
	sustainedcasualties: number,
	sustainedko: number,
	sustainedinjuries: number,
	sustaineddead: number
}