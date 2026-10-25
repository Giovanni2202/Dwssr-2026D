import express from 'express';

const router = express.Router();

/* GET home page. */
// eslint-disable-next-line
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    counter: 10,
    numbers: [1, 2, 3, 4],
  });
});

//module.exports = router;
export default router;
