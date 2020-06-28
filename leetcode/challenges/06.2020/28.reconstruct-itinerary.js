// Problem: https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/542/week-4-june-22nd-june-28th/3374/

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
const findItinerary = function (tickets) {
  function comparator([aFrom, aTo], [bFrom, bTo]) {
    if (aFrom === bFrom) return aTo.localeCompare(bTo);
    return aFrom.localeCompare(bFrom);
  }

  const ticketsList = tickets.sort(comparator).reduce(
    (acc, [from, to]) => ({
      ...acc,
      [from]: (acc[from] || []).concat(to),
    }),
    {}
  );

  const itinerary = [];

  function dfs(from) {
    while (ticketsList[from] && ticketsList[from].length) {
      dfs(ticketsList[from].shift());
    }
    itinerary.unshift(from);
  }

  dfs('JFK');

  return itinerary;
};

console.log(
  findItinerary([
    ['MUC', 'LHR'],
    ['JFK', 'MUC'],
    ['SFO', 'SJC'],
    ['LHR', 'SFO'],
  ]).toString() === ['JFK', 'MUC', 'LHR', 'SFO', 'SJC'].toString()
);
console.log(
  findItinerary([
    ['JFK', 'SFO'],
    ['JFK', 'ATL'],
    ['SFO', 'ATL'],
    ['ATL', 'JFK'],
    ['ATL', 'SFO'],
  ]).toString() === ['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO'].toString()
);
console.log(
  findItinerary([
    ['JFK', 'KUL'],
    ['JFK', 'NRT'],
    ['NRT', 'JFK'],
  ]).toString() === ['JFK', 'NRT', 'JFK', 'KUL'].toString()
);
console.log(
  findItinerary([
    ['EZE', 'AXA'],
    ['TIA', 'ANU'],
    ['ANU', 'JFK'],
    ['JFK', 'ANU'],
    ['ANU', 'EZE'],
    ['TIA', 'ANU'],
    ['AXA', 'TIA'],
    ['TIA', 'JFK'],
    ['ANU', 'TIA'],
    ['JFK', 'TIA'],
  ]).toString() ===
    [
      'JFK',
      'ANU',
      'EZE',
      'AXA',
      'TIA',
      'ANU',
      'JFK',
      'TIA',
      'ANU',
      'TIA',
      'JFK',
    ].toString()
);
