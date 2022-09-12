import sqlite3 from 'sqlite3'


let db = new sqlite3.Database('./db/belay-me-landing-page.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database.');
  });


export default db
