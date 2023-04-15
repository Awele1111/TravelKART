// const router = require('express').Router();
// const { User, Location } = require('../models');
// //const withAuth = require('../utils/auth');

// //withAuth,
// router.get('/',  async (req, res) => {
//   try {
//     // const userData = await User.findAll({
//     //   attributes: { exclude: ['password'] },
//     //   order: [['name', 'ASC']],
//     // });
//     // const users = userData.map((location) => location.get({ plain: true }));
//     //const users = userData.map((project) => project.get({ plain: true }));

//     res.render('landingpage', {
//       // users,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/homepage'); //this line is redirecting user to home page
//     return;
//   }

//   res.render('login');
// });



// router.get('/results', async (req, res) => {
//   try {
//     // Retrieve data to display in the view
//     const resultsData = await fetchResultsFromDatabase(); // replace this with your own data retrieval logic
    
//     // Pass data to the view and render it
//     res.render('results', {
//       resultsData: resultsData, // pass data to the view as an object property
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



// module.exports = router;

const router = require('express').Router();
const { User, Location } = require('../models');

router.get('/', async (req, res) => {
  try {
    res.render('landingpage', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});




router.get('/results', async (req, res) => {
  try {
    res.render('results', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
