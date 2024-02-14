function Every(array, predicate) {

  return !array.some(element=>!predicate(element))
}

  console.log(Every([1, 2, 3], n => n >0));
