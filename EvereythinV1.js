function Every(array, predicate) {
    for (let element of array) {
      if (!predicate(element)) return false;
    }
    return true;
  }

  console.log(Every([1, 2, 3], n => n >0));
