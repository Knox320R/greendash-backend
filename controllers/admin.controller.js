const { AdminSettings } = require('../db/models');
const nodemailer = require('nodemailer');
const { User } = require('../db/models');
const { ADMIN_EMAIL } = require('../config/constants');

exports.createSetting = async (req, res, next) => {
  try {
    const setting = await AdminSettings.create(req.body);
    res.status(201).json(setting);
  } catch (err) { next(err); }
};

exports.getAllSettings = async (req, res, next) => {
  try {
    const settings = await AdminSettings.findAll();
    res.json(settings);
  } catch (err) { next(err); }
};

exports.getSettingById = async (req, res, next) => {
  try {
    const setting = await AdminSettings.findByPk(req.params.id);
    if (!setting) return res.status(404).json({ error: 'Setting not found' });
    res.json(setting);
  } catch (err) { next(err); }
};

exports.updateSetting = async (req, res, next) => {
  try {
    const setting = await AdminSettings.findByPk(req.params.id);
    if (!setting) return res.status(404).json({ error: 'Setting not found' });
    await setting.update(req.body);
    res.json(setting);
  } catch (err) { next(err); }
};

exports.deleteSetting = async (req, res, next) => {
  try {
    const setting = await AdminSettings.findByPk(req.params.id);
    if (!setting) return res.status(404).json({ error: 'Setting not found' });
    await setting.destroy();
    res.json({ message: 'Setting deleted' });
  } catch (err) { next(err); }
};

// Send a message from user to admin via email
exports.sendMessageToAdmin = async (req, res, next) => {
  try {
    const { user_id, message } = req.body;
    if (!user_id || !message) {
      return res.status(400).json({ error: 'user_id and message are required' });
    }
    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Configure nodemailer transporter (example uses Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER, // your email
        pass: process.env.SMTP_PASS, // your email password or app password
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: ADMIN_EMAIL,
      subject: `New message from user #${user.id} (${user.name || user.email})`,
      text: `User ID: ${user.id}\nName: ${user.name}\nEmail: ${user.email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent to admin email.' });
  } catch (err) {
    next(err);
  }
}; 