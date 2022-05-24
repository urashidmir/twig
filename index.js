function groupArrayElements(array, n) {
  let newArray = [];
  let chunks = [];
  let i = 0;
  if (!Number.isInteger(n)) {
    return array;
  }
  if (Number.isInteger(n) && n <= 1) {
    return array;
  }
  if (Array.isArray(array)) {
    if (array.length <= n) {
      return array;
    } else {
      const remainder = array.length % n;
      //console.log("remainder=" + remainder);
      if (remainder === 0) {
        const chunckSize = array.length / n;
        while (i < array.length) {
          chunks.push(array.slice(i, (i += chunckSize)));
        }
      } else {
        while (i < array.length) {
          size = Math.ceil((array.length - i) / n--);
          chunks.push(array.slice(i, (i += size)));
        }
      }
      return chunks;
    }
  }

  return chunks;
}

const array1 = [1, 2, 3, 4, 5];
const n1 = 3;
const newArray1 = groupArrayElements(array1, n1);

const array2 = [1, 2, 3, 4, 5, 6];
const n2 = 4;
const newArray2 = groupArrayElements(array2, n2);

console.log(newArray1);
console.log(newArray2);
