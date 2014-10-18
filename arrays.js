function array_pull(list, grip, key) {
  var results;
  if (key) {
    results = {};
  } else {
    results = [];
  }
  
  for (var i in list) {
    var record;
    if (grip) {
      record = list[i][grip];
    } else {
      record = list[i];
    }
    
    if (key) {
      results[list[i][key]] = record;
    } else {
      results[results.length] = record;
    }
  }
  
  return results;
}
