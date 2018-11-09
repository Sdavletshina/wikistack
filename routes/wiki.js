const router = require('express').Router();
// const addPage = require('../views/addPage');
const {addPage, editPage, main, userList, userPages, wikiPage} = require('../views/index.js')

router.get('/', (req,res, next) => {
  try{

    res.send(main());
  }
  catch(err){
    res.status(404).send(`Something went wrong: ${err}`);
  }


});
router.post('/', (req, res, next) => {
  res.send('got to POST /wiki/')

})
router.get('/add', (req, res, next)=>{
  try{
    res.send(addPage());
  }
  catch(err){
    res.status(500).send(`Something went wrong: ${err}`);
    next(err);
  }


})

module.exports = router;
