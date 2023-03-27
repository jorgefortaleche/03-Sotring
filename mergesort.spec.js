describe("Split Array function", function () {
  it("es capaz de dividir el arreglo en dos partes", function () {
    var array = [2, 5, 7, 9, 10];
    expect(split(array)).toEqual([
      [2, 5, 7],
      [9, 10],
    ]);
  });
});
