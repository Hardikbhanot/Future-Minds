const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'route working' });
});

module.exports = router;
