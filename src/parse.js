'use strict';

/**
 * Package imports 
 */
const parse = require('csv-parse/lib/sync');
const fs = require('fs');

/**
 * Function export
 */
module.exports = function(path) {
  const raw = fs.readFileSync(path).toString();
  const data = parse(raw, {
    delimiter: ';',
    skip_empty_lines: true
  });

  let parsed = {};
  let svadaType = '';
  data.forEach(element => {
    element = element.filter(Boolean);

    if(element.length === 1) {
      svadaType = element[0];
      parsed[svadaType] = {
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
        parsed[svadaType][i].push(element[i]);
      }
    }
  });

  return parsed;
}