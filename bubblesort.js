function ordenar(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1);
    }
  }
}
function bubbleSort(array) {
  if (array.length === 0) return array;
  for (let i = 0; i < array.length; i++) {
    while (array[i] > array[i + 1]) {
      ordenar(array);
    }
  }
  return array;
}
function swap(arr, index1, index2) {
  let referencia = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = referencia;
  return arr;
}
