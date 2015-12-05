
"use strict";

var React = require('react');

var About = React.createClass({
  statics: {
    willTransitionTo: function(transition, params, query, callback){
      if(!confirm('Sure?')) {
        transition.abort();
      } else {
        callback();
      }
    },
    willTransitionFrom: function(transition, component){
      if(!confirm('Leave?')) {
        transition.abort();
      } 
    }  

  },
  render: function() {
    return (
        <div>
            <h1>About</h1>
            <p>
              This is the about page
              <ul>
                <li>Blah</li>
                <li>Blah</li>
                <li>Blah</li>
              </ul>
            </p>
        </div>
      );
  }

});

module.exports = About;