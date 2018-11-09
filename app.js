const express = require('express');
const app = express();
const morgan = require('morgan');
const { db } = require('./models');
const layout = require('./views/layout');


app.use(morgan('dev'));
app.use(express.static(__dirname + '/stylesheets'));
app.use(express.urlencoded({ extended:false }));

// app.get('/', (req, res) => {

//   );
//   res.send(postList(data.rows));
// });
app.get('/', (req, res)=>{
  res.send(layout('something here'));
})
db.authenticate().
  then(() => {
    console.log('connected to the database');
  })

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
