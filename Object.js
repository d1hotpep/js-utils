Object.clone = function(obj) {
  var clone = {};
  for (i in obj) {
     clone[i] = obj[i];
  }
  return clone;
}

Object.union = function(obj1, obj2) {
  var res = {};
  for (var i in obj1) {
    res[i] = obj1[i];
  }
  
  for (var i in obj2) {
    res[i] = obj2[i];
  }
  
  return res;
}
