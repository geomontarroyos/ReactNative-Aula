import db from "./connectDb.js";

db.transaction((tx) => {

  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS artistas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome_artistico TEXT, genero TEXT);"
  );
  
});

const create = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "INSERT INTO artistas (nome_artistico, genero) values (?, ?);",
        [obj.nomeArtistico, obj.genero],
        //-----------------------
        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) resolve(insertId);
          else reject("Error inserting obj: " + JSON.stringify(obj)); 
        },
        (_, error) => reject(error) 
      );
    });
  });
};
const findAll = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "SELECT * FROM artistas;",
        [],
        //-----------------------
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

const removeAll = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "DELETE FROM produtos",
        //-----------------------
        (_, { rowsAffected }) => {
          resolve(rowsAffected);
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

export default{
    create,
    findAll,
    removeAll
};