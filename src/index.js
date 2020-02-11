'use strict';

/**
 * Package imports
 */
const Sentence = require('sentence-engine');
const parse = require('./parse.js');


/**
 * Constants that will hold parsed data
 * Data source: http://svadagenerator.no/data/svadagenerator.csv
 */
const Template = '{0} {1} {2} {3} {4} {5} {6}.';
const Vocabularies = parse('./src/svadagenerator.csv');

function svada(svadaType = 'generell') {
  return Sentence(Template, Vocabularies[parseSvadaType(svadaType)]).get();
};

function parseSvadaType(input) {
  switch(input.toLowerCase()) {
    default: 
    case 'generell':
        return 'Generell svada';
    case 'arkiv':
        return 'Arkivsvada';
    case 'bistand':
        return 'Bistandssvada';
    case 'forsikring':
        return 'Forsikringssvada';
    case 'forsvar': 
        return 'Forsvarssvada';
    case 'helse': 
        return 'Helseadministrativ svada';
    case 'klima': 
        return 'Klimasvada';
    case 'plan':
    case 'bygge': 
        return 'Plan- og byggesvada';
    case 'mat': 
        return 'Svada for Mattilsynet';
    case 'universitet': 
    case 'høgskole': 
    case 'skole':
        return 'Universitets- og høgskolesvada';
  }
}

module.exports = svada;
