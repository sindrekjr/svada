'use strict'; 

/**
 * Package imports
 */
const Sentence = require('sentence-engine');
const csv = require('csv'); 
const fs = require('fs');


/**
 * Constants that will hold parsed data
 */
const Template = '{p0}{p1}{p2}{p3}{p4}{p5}{p6}';
const Vocabularies = {};

/**
 * Text data to piece together
 * Source: http://svadagenerator.no/data/svadagenerator.csv
 */
const csvFile = './data.csv'

/**
 * 
 */
fs.readFile(csvFile, 'utf8', (_, csvText) => {
  csv.parse(csvText, {
    delimiter: ';'
  }, (_, data) => {
    let svadaType = ''; 

    let i = 0;
    data.forEach(element => {
      element = element.filter(Boolean);

      if(element.length === 1) {
        svadaType = element[0];
        Vocabularies[svadaType] = {
          'p0': [],
          'p1': [],
          'p2': [],
          'p3': [],
          'p4': [],
          'p5': [],
          'p6': []
        }
      } else if(element.length > 1) {
        for(let i = 0; i < element.length; i++) {
          Vocabularies[svadaType][i].push(element[i]);
        }
      }
    });
  });
});

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

function svada(svadaType = 'generell') {
  return Sentence(Template, Vocabularies[parseSvadaType(svadaType)]).get();
};

console.log(svada());
