const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'student route' });
});

module.exports = router;
