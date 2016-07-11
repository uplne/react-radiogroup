import React, {PropTypes} from 'react'; 

export default class RadioGroup extends React.Component {
    getChildContext() {
        const {selectedValue, onChange} = this.props;

        return {
            RadioGroup: {
                selectedValue: selectedValue,
                onChange: onChange
            }
        };
    }

    render () {
        return (
            <radiogroup className="readio-group">
                {this.props.children}
            </radiogroup>
        );
    }
}

RadioGroup.propTypes = {
    selectedValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
    ]),
    onChange: PropTypes.func.isRequired
};

RadioGroup.childContextTypes = {
    RadioGroup: PropTypes.object
};