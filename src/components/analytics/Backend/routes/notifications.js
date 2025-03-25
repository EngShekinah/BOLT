const { Notification } = require('../models');

// Get all notifications
router.get('/', async (req, res) => {
  try {
    const notifications = await Notification.findAll();
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notifications', error: error.message });
  }
});

// Create a new notification
router.post('/', async (req, res) => {
  const { type, message } = req.body;
  if (!type || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newNotification = await Notification.create({ type, message });
    res.status(201).json({ message: 'Notification created successfully', notification: newNotification });
  } catch (error) {
    res.status(500).json({ message: 'Error creating notification', error: error.message });
  }
});

module.exports = router;