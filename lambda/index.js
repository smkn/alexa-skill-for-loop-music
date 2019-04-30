/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bbxx45e6-xxxx-4xx3-xxxx-72xx3cxxxxf1';
const APP_ID = 'amzn1.ask.skill.xxxxx';
const SKILL_NAME = "xxxxx";
const audioUrl = 'https://path/to/file.mp3';

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'playKafuka': function () {
        this.response.audioPlayerPlay('REPLACE_ALL', audioUrl, audioUrl, null, 0);
        this.emit(':responseReady');
    },
    'LaunchRequest': function () {
        this.emit('playKafuka');
    },
    'PlayAudioIntent': function () {
        this.emit('playKafuka');
    },
    'AMAZON.ResumeIntent': function () {
        this.emit('playKafuka');
    },
    'PlaybackNearlyFinished': function () {
        this.response.audioPlayerPlay('ENQUEUE', audioUrl, audioUrl, audioUrl, 0);
        this.emit(':responseReady');
    },

    'AMAZON.StopIntent': function() {
        this.response.audioPlayerStop();
        this.emit(':responseReady');
    },
    'AMAZON.PauseIntent': function () {
        this.emit('AMAZON.StopIntent');
    },
    'AMAZON.CancelIntent': function () {
        this.emit('AMAZON.StopIntent');
    },

    'AMAZON.HelpIntent': function () {
        this.emit(':ask', 'はい');
    },
    'Unhandled': function () {
        this.emit('AMAZON.HelpIntent');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
