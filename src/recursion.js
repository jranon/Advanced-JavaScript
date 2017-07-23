// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) return 1;
  return nFibonacci(n - 2) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n <= 1) return 1;
  return n * nFactorial(n - 1);
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const obs = [obj];
  let flag = true;
  let check;
  const checkLeaves = (o) => {
    const leaves = Object.values(o);
    for (let i = 0; i < leaves.length; i++) {
      if (typeof leaves[i] !== 'object' && !check) check = leaves[i];
      else if (typeof leaves[i] !== 'object' && check !== leaves[i]) return flag = false;
      else if (typeof leaves[i] === 'object') obs.push(leaves[i]);
    }
  };
  for (let j = 0; j < obs.length; j++) {
    checkLeaves(obs[j]);
  }
  return flag;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
