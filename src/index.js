'use strict';

/**
 * Dependencies
 */
const Sentence = require('sentence-engine');
const { loadSvada, parseSvadaType } = require('./parse.js');

/**
 * Constants that hold parsed data
 * Data source: http://svadagenerator.no/data/svadagenerator.csv
 */
const Template = '{0} {1} {2} {3} {4} {5} {6}.';
const Vocabularies = loadSvada();


/**
 * Main function
 * @param {string} svadaType - the type of svada to generate
 */
function svada(svadaType = 'generell') {
  return Sentence(Template, Vocabularies[parseSvadaType(svadaType)]).get();
};

module.exports = svada;
