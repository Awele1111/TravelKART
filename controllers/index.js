const router = require('express').Router();
//const Student = require('../models/student');

// router.get('/', async (req, res) => {
//     try {
//         // const stuList = await Student.findAll();
//         // const students = stuList.map(stu => stu.get({ plain: true }))
//         res.render('homepage', { students })
//         //res.render('homepage');
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

router.get('/', (req, res) => {
    res.render('homepage');
  });

  router.get('/login', (req, res) => {
    res.render('login');
  });


  module.exports = router;