import React, { Component, Fragment } from 'react'
import { Route, RouteComponentProps, Switch } from 'react-router'
import PlayerHallOfFame from './components/PlayerHallOfFame'

interface MatchParams {
	league?: string,
}

interface Props extends RouteComponentProps<MatchParams> {}

class HallOfFamePage extends Component<Props> {
	league = orDefault(this.props.match.params.league, () => 'New Ogham')

	render() {
		return (
			<Fragment>
				<h1>Hall Of Fame - { this.league }</h1>
				<PlayerHallOfFame league={ this.league } stat='experience'/>
				<PlayerHallOfFame league={ this.league } stat='inflictedtouchdowns'/>
				<PlayerHallOfFame league={ this.league } stat='inflicteddead'/>
				<PlayerHallOfFame league={ this.league } stat='inflictedcasualties'/>
				<PlayerHallOfFame league={ this.league } stat='inflictedko'/>
				<PlayerHallOfFame league={ this.league } stat='inflictedmeterspassing'/>
				<PlayerHallOfFame league={ this.league } stat='inflictedmetersrunning'/>
				<PlayerHallOfFame league={ this.league } stat='inflictedpasses'/>
				<PlayerHallOfFame league={ this.league } stat='inflictedcatches'/>
				<PlayerHallOfFame league={ this.league } stat='inflictedinterceptions'/>
				<PlayerHallOfFame league={ this.league } stat='matchplayed'/>
				<PlayerHallOfFame league={ this.league } stat='sustainedko'/>
			</Fragment>
		)
	}
}

function orDefault(value: undefined | string, defaultValue: () => string): string {
	return (value === null || value === undefined) ? defaultValue() : value!
}

export class PlayerHallOfFameContainer extends Component {
	render() {
		return (
			<Fragment>
				<Switch>
					<Route exact path='/hall-of-fame/players' component={ HallOfFamePage }/>
					<Route path='/hall-of-fame/players/:league' component={ HallOfFamePage }/>
				</Switch>
			</Fragment>
		)
	}
}