'use strict';
var util = require('util');
var EventEmitter = require('events').EventEmitter;
var debug = require('debug')('meshblu-lumencache')

var MESSAGE_SCHEMA = {
  type: 'object',
  properties: {
    Action: {
      type: 'string',
      enum: ["Set_Level","Stop_Ramp","Start_Ramp_Up","Start_Ramp_Down","Set_Temporary_Ramp_Duration","Query_Level", "Query_Settings", "Query_Hardware"],
      required: true
    },
    id: {
      type: 'number',
      required: true
    },
    value: {
      type: 'number',
      required: false
    }
  }
};

var OPTIONS_SCHEMA = {
  type: 'object',
  properties: {
    firstExampleOption: {
      type: 'string',
      required: true
    }
  }
};

function Plugin(){
  this.options = {};
  this.messageSchema = MESSAGE_SCHEMA;
  this.optionsSchema = OPTIONS_SCHEMA;
  return this;
}
util.inherits(Plugin, EventEmitter);

Plugin.prototype.onMessage = function(message){
  var payload = message.payload;
 // this.emit('message', {devices: ['*'], topic: 'echo', payload: payload});

 var command;

  switch(payload.Action){
    case "Set_Level":
        command = "[" + payload.id + "," + payload.value + "]";
        break;
    case "Stop_Ramp":
        command = "[" + payload.id + ",260]";
        break;
    case "Start_Ramp_Up":
        command = "[" + payload.id + ",261]";
        break;
    case "Start_Ramp_Down":
        command = "[" + payload.id + ",262]";
        break;
    case "Set_Temporary_Ramp_Duration":
        command = "[" + payload.id + "," + payload.value + "]";
        break;
    case "Query_Level":
        command = "[" + payload.id + ",256]";
        break;
    case "Query_Settings":
        command = "[" + payload.id + ",257]";
        break;
    case "Query_Hardware":
        command = "[" + payload.id + ",258]";
        break;


      }

};

Plugin.prototype.onConfig = function(device){
  this.setOptions(device.options||{});
};

Plugin.prototype.setOptions = function(options){
  this.options = options;
};

module.exports = {
  messageSchema: MESSAGE_SCHEMA,
  optionsSchema: OPTIONS_SCHEMA,
  Plugin: Plugin
};
