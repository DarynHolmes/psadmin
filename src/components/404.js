"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFoundPage = React.createClass({

  render: function() {
    return (
        <div>
          <h1>Oo-oops</h1>
          <p>Nothing to see here</p>
          <p><Link to="app">Back to home</Link></p>
        </div>
      );
  }

});

module.exports = NotFoundPage;