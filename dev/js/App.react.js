import React from 'react';

import RadioGroup from './components/RadioGroup.react';
import Radio      from './components/Radio.react';

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			selectedValue: '£',
			currency: ['None', '£', '€', '₩', '$']
		};
	}

	changeHandler(e) {
		this.setState({
			selectedValue: e
		});
	}

    render () {
        return (
        	<RadioGroup
                selectedValue={this.state.selectedValue}
                onChange={this.changeHandler.bind(this)}>
                { this.state.currency.map((item, i) => {
                    return (
                        <Radio key={i} id={i} value={item}>{item}</Radio>
                    );
                })}
            </RadioGroup>
        );
    }
}