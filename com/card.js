let React = require('react');

module.exports = React.createClass({
    displayName:'Card',
    render: function() {
        return (
            <div {...this.props} className={"card " + this.props.className}></div>
        );
    }
})