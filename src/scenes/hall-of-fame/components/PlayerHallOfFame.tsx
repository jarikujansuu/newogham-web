import React, { Component, Fragment } from 'react'
import { Table } from 'semantic-ui-react'
import RankedPlayer from './RankedPlayer'
import { Player } from '../../../bb/Player'
import Team from '../../../bb/Team'

interface Props {
	league: string
	stat: string
}

export default class PlayerHallOfFame extends Component<Props> {
	rankings = rankings(this.props.league, this.props.stat).map(toRankingRow)

	render() {
		return (
			<div>
				<Table celled>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell colSpan='3'>Most stats TODO</Table.HeaderCell>
						</Table.Row>
						<Table.Row>
							<Table.HeaderCell>#</Table.HeaderCell>
							<Table.HeaderCell>Name</Table.HeaderCell>
							<Table.HeaderCell>Team</Table.HeaderCell>
							<Table.HeaderCell>TODO stat name</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body children={this.rankings} />
				</Table>
			</div>
		)
	}
}

function toRankingRow(ranking: RankedPlayer) {
	return (
		<Fragment>
			<Table.Row>
				<Table.Cell>{ranking.rank}</Table.Cell>
				<Table.Cell>{ranking.player.name}</Table.Cell>
				<Table.Cell>{ranking.player.team.name}</Table.Cell>
				<Table.Cell>{ranking.value}</Table.Cell>
			</Table.Row>
		</Fragment>
	)
}

function rankings(league: string, stat: string): RankedPlayer[] {
	return [
		{
			player: {
				name: 'Big Bob',
				team: { name: '112th Brute Brigade' } as Team
			} as Player,
			rank: 1,
			value: 10
		} as RankedPlayer,
		{
			player: {
				name: 'Harlon Prando',
				team: { name: '112th Brute Brigade' } as Team
			} as Player,
			rank: 2,
			value: 5
		} as RankedPlayer

	]
}

