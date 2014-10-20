function query(conn, sql) {
  var results = conn.createStatement().executeQuery(sql);
  return parseDBResults(results);
}

function parseDBResults(results) {
  var metadata = results.getMetaData();
  
  var column_data = [];
  for (var i = 0; i < metadata.getColumnCount(); i++) {
    column_data[i] = {
      'name' : metadata.getColumnLabel(i + 1),
      'type' : metadata.getColumnType(i + 1),
    };
  }

  var rows = [];
  while (results.next()) {
    var row = {};
    for (var i = 0; i < metadata.getColumnCount(); i++) {
      var val;
      if (4 == column_data[i]['type']) {
        val = results.getInt(i + 1);
      } else {
        val = results.getString(i + 1);
      }
      row[column_data[i]['name']] = val;
    }
    
    rows[rows.length] = row;
  }
  
  return rows;
}

/*
function getDBConn() {
  var address = '';
  var user = '';
  var userPwd = '';
  var db = '';

  var dbUrl = 'jdbc:mysql://' + address + '/' + db;
  
  return Jdbc.getConnection(dbUrl, user, userPwd);
}
*/
