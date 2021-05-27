const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Genral Route now working'
  });
});

module.exports = router;
