const makeTitle = string => {
  const words = string.split(/-/);
  let title;

  if (words.length === 1) {
    title = titleCaseWord(words[0]);
  } else {
    title = words.reduce(
      (title, word) => `${titleCaseWord(title)} ${titleCaseWord(word)}`
    );
  }

  return title;
};

const titleCaseWord = word => word.charAt(0).toUpperCase() + word.slice(1);

export { makeTitle };
