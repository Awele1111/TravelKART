// const router = require('express').Router();
// const { Location } = require('../../models');
// //const withAuth = require('../../utils/auth');

// router.get('/results', (req, res) => {



// })

// module.exports = router;

// const router = require('express').Router();
// const { Location } = require('../../models');

// router.get('/results', async (req, res) => {
//   try {
//     // Retrieve location data from the database
//     const locations = await Location.findAll();

//     // Render the results view and pass the location data to it
//     res.render('results', { locations });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// module.exports = router;



// router.get('/results', async (req, res) => {
//   try {
//     // Retrieve data to display in the view
//     const locations = await Location.findAll(); // replace this with your own data retrieval logic
    
//     // Pass data to the view and render it
//     res.render('results', {
//       locations: locations, // pass data to the view as an object property
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;

const router = require('express').Router();
const { User, Location } = require('../../models');


module.exports = router;

