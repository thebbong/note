var ladderLength = function(beginWord, endWord, wordList) {
  const wordsSet = new Set(wordList);
  
  if (!wordsSet.has(endWord)) return 0;

  const queue = [];
  queue.push(beginWord);

  const seenWords = new Set()
  seenWords.add(beginWord)

  let changes = 1;
  // for (let j = 97; j < 123; j++) {
  console.log('a', 'a'.charCodeAt(0));
  console.log('z', 'z'.charCodeAt(0));

  while(queue.length !== 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const word = queue.shift()

      // Check if we've found our end word
      if (word === endWord) return changes

      for (let i = 0; i < word.length; i++) {
        for (let j = 'a'.charCodeAt(0); j <= 'z'.charCodeAt(0); j++) {
          const newWord = (
            word.substring(0, i) + String.fromCharCode(j)
          ).concat(word.substring(i + 1))

          if (wordsSet.has(newWord) && !seenWords.has(newWord)) {
            queue.push(newWord)
            seenWords.add(newWord)
          }
        }
      }
    }
    changes++;


  }
  return 0;
};

export {ladderLength}
