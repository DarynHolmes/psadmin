"use strict";

var React = require('react');
var TextInput = require('../common/textInput');

var AuthorForm = React.createClass({
  
  render: function() {

    return (
        <form className="col-sm-5">
          <h1>Manage Author</h1>

          <TextInput 
              name="firstName" 
              label="First Name" 
              placeHolder="First Name" 
              value={this.props.author.firstName} 
              onChange={this.props.onChange} /> 

          <TextInput 
              name="lastName" 
              label="Last Name" 
              placeHolder="Last Name" 
              value={this.props.author.lastName} 
              onChange={this.props.onChange} /> 

          <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
        </form>
        
      );
  }
});

module.exports = AuthorForm;