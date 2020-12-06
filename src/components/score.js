import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Score extends React.Component {

    render() {

        const score = this.props.score;
        const numberStars = this.props.numberStars;
        var listStars = []
 
        for (let i = 0; i < numberStars; i++) {
            listStars.push(
                <FontAwesomeIcon
                    className="icon"
                    icon={score >= i ? ['fas', 'star'] : ['far', 'star']}
                    key={i} />
            )
        }

        return (
            <div>
                {listStars}
            </div>
        )
    }
}
 