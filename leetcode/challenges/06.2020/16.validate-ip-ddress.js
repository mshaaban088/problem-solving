// Problem: https://leetcode.com/explore/featured/card/june-leetcoding-challenge/541/week-3-june-15th-june-21st/3362/

const IP_V4_GROUP_REGEX = '([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
const IP_V4_REGEX = `^(${IP_V4_GROUP_REGEX}\.){3}(${IP_V4_GROUP_REGEX})$`;
const IP_V6_GROUP_REGEX = '([0-9]|[0-9a-fA-F]{1,4})';
const IP_V6_REGEX = `^(${IP_V6_GROUP_REGEX}\:){7}${IP_V6_GROUP_REGEX}$`;

/**
 * @param {string} IP
 * @return {string}
 */
const validIPAddress = function (IP) {
  if (IP.match(IP_V4_REGEX)) return 'IPv4';
  if (IP.match(IP_V6_REGEX)) return 'IPv6';
  return 'Neither';
};

console.log(validIPAddress('172.16.254.1') === 'IPv4');
console.log(validIPAddress('2001:0db8:85a3:0:0:8A2E:0370:7334') === 'IPv6');
console.log(validIPAddress('2001:0db8:85a3:0000:0000:8a2e:0370:7334') === 'IPv6');
console.log(validIPAddress('2001:db8:85a3:0:0:8A2E:0370:7334') === 'IPv6');
console.log(validIPAddress('f:f:f:f:f:f:f:f') === 'IPv6');
console.log(validIPAddress('256.256.256.256') === 'Neither');
console.log(validIPAddress('172.16.254.01') === 'Neither');
console.log(validIPAddress('2001:0db8:85a3::8A2E:0370:7334') === 'Neither');
console.log(validIPAddress('02001:0db8:85a3:0000:0000:8a2e:0370:7334') === 'Neither');
