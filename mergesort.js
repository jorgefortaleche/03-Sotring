function split(wholeArray) {
  let mitad = Math.round(wholeArray.length + 1) / 2;
  let firstHalf = wholeArray.splice(0, mitad);
  let secondHalf = wholeArray; //Devuelvo la otra mitad del array original
  return [firstHalf, secondHalf];
}
