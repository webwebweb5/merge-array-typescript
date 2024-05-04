export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] {
  const mergedArray: number[] = [];

  for (let i = 0; i < collection1.length; i++) {
    mergedArray.push(collection1[i]);
  }

  for (let i = 0; i < collection2.length; i++) {
    mergedArray.push(collection2[i]);
  }

  for (let i = 0; i < collection3.length; i++) {
    mergedArray.push(collection3[i]);
  }

  for (let i = 0; i < mergedArray.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < mergedArray.length; j++) {
      if (mergedArray[j] < mergedArray[minIndex]) {
        minIndex = j;
      }
    }

    const temp = mergedArray[i];
    mergedArray[i] = mergedArray[minIndex];
    mergedArray[minIndex] = temp;
  }

  return mergedArray;
}