import React, {PropTypes} from 'react'; 

export default class Radio extends React.Component {
    render () {
    	const {selectedValue, onChange} = this.context.RadioGroup;
    	const isSelected = this.props.value === selectedValue;
    	const classes = isSelected ? 'radio--button is-active' : 'radio--button';
    	const id = 'radio' + this.props.id;

        return (
        	<label className={classes} htmlFor={id}>
        		{this.props.value}
        		<input id={id} type="radio" name={id} className="radio" defaultChecked={isSelected} onChange={onChange.bind(null, this.props.value)} />
        	</label>
        );
    }
}

Radio.propTypes = {
	id: PropTypes.number.isRequired,
	value: PropTypes.string.isRequired
};

Radio.contextTypes = {
	RadioGroup: PropTypes.object
};