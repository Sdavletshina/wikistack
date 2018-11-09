const express = require('express');
const app = express();
const morgan = require('morgan');
const {db, User, Page} = require('./models');
const layout = require('./views/layout');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');


app.use(morgan('dev'));
app.use(express.static(__dirname + '/stylesheets'));
app.use(express.urlencoded({ extended:false }));
app.use('/wiki', wikiRouter)
// app.get('/', (req, res) => {

//   );
//   res.send(postList(data.rows));
// });
app.get('/wiki', (req, res)=>{
  res.redirect('/wiki');
})
app.get('/', (req, res)=>{
  res.send(layout('something here'));
})
db.authenticate().
  then(() => {
    console.log('connected to the database');
  });

// { db, User, Page }db.sync({ force: true })

  const init = async()=>{
    await { db, User, Page }.User.sync();
    await { db, User, Page }.Page.sync();

    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`App listening in port ${PORT}`);
    });
    }

  init();
