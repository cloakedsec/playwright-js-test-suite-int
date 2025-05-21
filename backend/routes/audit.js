const express = require('express');
const router = express.Router();
const { runAudit } = require('../audits/audit');

router.post('/', async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    const reportHtml = await runAudit(url);
    res.set('Content-Type', 'text/html').send(reportHtml);
  } catch (err) {
    res.status(500).json({ error: 'Audit failed', details: err.message });
  }
});

module.exports = router;
