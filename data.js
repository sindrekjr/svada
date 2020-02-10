'use strict';

/**
 * Package imports
 */
const csv = require('csv'); 
const fs = require('fs');

/**
 * File that holds text data
 * Source: http://svadagenerator.no/data/svadagenerator.csv
 */
const csvFile = './data.csv'

const Vocabularies = {}

// Parse CSV into javascript object
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
          0: [],
          1: [],
          2: [],
          3: [],
          4: [],
          5: [],
          6: []
        }
      } else if(element.length > 1) {
        for(let i = 0; i < element.length; i++) {
          Vocabularies[svadaType][i].push(element[i]);
        }
      }
    });
  });
});


