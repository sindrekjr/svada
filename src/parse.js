'use strict';

/**
 * Dependencies
 */
const parse = require('csv-parse/lib/sync');
const fs = require('fs');

/**
 * Array that holds all the gathered svada types
 */
const SvadaTypes = [];

module.exports = {
  /**
   * Parse specific .csv and return text data as accessible js object
   */
  loadSvada() {
    const raw = fs.readFileSync('./src/svadagenerator.csv').toString();
    const data = parse(raw, {
      delimiter: ';',
      skip_empty_lines: true,
      trim: true,
      on_record: r => r.map(c => c.replace(/\r?\n|\r/g, ''))
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

    SvadaTypes.push(...Object.keys(parsed));
    return parsed;
  },

  /**
   * Resolve a string to a particular type of svada, if possible
   * If the string does not match any defined type, return default type
   * 
   * @param {svadaType} string - the string input to resolve
   */
  parseSvadaType(svadaType) {
    for(let type of SvadaTypes) {
      if(type.toLowerCase().includes(svadaType.toLowerCase())) {
        return type;
      }
    }

    return SvadaTypes[0];
  }
}