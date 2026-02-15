function maxfrequency(str) {
  let freq = {};
  let max = 0;

  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;

    if (freq[ch] > max) {
      max = freq[ch];
    }
  }

  return max;
}

console.log(maxfrequency("abbccc"));
