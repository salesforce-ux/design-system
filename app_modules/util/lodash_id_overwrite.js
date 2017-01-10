let idCounter = 0;

// SHIM Lodash because it caches in node_modules and generates id's that are always incrementing
import _ from 'lodash';

function uniqueId(prefix) {
  var id = ++idCounter;
  return prefix ? prefix + id : id;
}
_.uniqueId = uniqueId;
