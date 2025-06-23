const { AdminSettings } = require('../db/models');

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