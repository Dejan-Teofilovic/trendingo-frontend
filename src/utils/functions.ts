/**
 * Remove the prefix '@' from a string
 * @param {string} value String that has whether the prefix '@' or not.
 * @returns String that has no prefix '@'
 */
export const removeAtMarkPrefix = (value: string) => {
  if (value[0] === '@') {
    return value.slice(1);
  } else {
    return value;
  }
};