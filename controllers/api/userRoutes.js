const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');
const bcrypt = require('bcrypt');

router.get('/', async (req, res)=>{
  try {
    const userData = await User.findAll({
      attributes: ['first_name','last_name','email'],
    });
    
    const users = userData.map((d)=>d.get({plain: true}))
    console.log(users)
    res.json(users);
    // render('homepage', users)
  } catch (error){
    res.status(500).json(error);
  }
});

router.get('/:id',async (req, res)=>{
  try {
    const userData = await User.findByPk(req.params.id, {
      attributes: {exclude: ['password','id']}
    });
    const user = userData.get({plain:true})
    
    console.log(user)
    res.json(user);
    // render('homepage', users)
  } catch (error){
    res.status(500).json(error);
  }
})

// beforeFind: async (findUserData) => {
//   if (findUserData.password) {
//     findUserData.password = await bcrypt.hash(findUserData.password, 10);
//   }
//   return findUserData;
// }


router.post('/', withAuth, async (req, res) => {
  try {
    const userData = await User.create(req.body, {
      individualHooks: true,
    });

    console.log(userData)
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//* User login
// router.post("/login", async (req, res) => {
//   try {
//     const userData = await User.findOne({
//       where: { username: req.body.username },
//     });

//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: "Incorrect email or password, please try again" });
//       return;
//     }

//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: "Incorrect email or password, please try again" });
//       return;
//     }

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.json({ user: userData, message: "You are now logged in!" });
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// //* User logout
// router.post("/logout", withAuth, async (req, res) => {
//   try {
//     if (req.session.logged_in) {
//       req.session.destroy(() => {
//         res.status(204).end();
//       });
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// //* Signup route
// router.post("/signup", async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     //* Create a new user in the database
//     const userData = await User.create({ username, password });

//     //* Set the user's session and send a response
//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;
//       res.status(200).json({ message: "Signup successful" });
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Signup failed" });
//   }
// });


module.exports = router;
