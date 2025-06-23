const { StakingPackage } = require('../db/models');

exports.createPackage = async (req, res, next) => {
  try {
    const pkg = await StakingPackage.create(req.body);
    res.status(201).json(pkg);
  } catch (err) { next(err); }
};

exports.getAllPackages = async (req, res, next) => {
  try {
    const pkgs = await StakingPackage.findAll();
    res.json(pkgs);
  } catch (err) { next(err); }
};

exports.getPackageById = async (req, res, next) => {
  try {
    const pkg = await StakingPackage.findByPk(req.params.id);
    if (!pkg) return res.status(404).json({ error: 'Staking package not found' });
    res.json(pkg);
  } catch (err) { next(err); }
};

exports.updatePackage = async (req, res, next) => {
  try {
    const pkg = await StakingPackage.findByPk(req.params.id);
    if (!pkg) return res.status(404).json({ error: 'Staking package not found' });
    await pkg.update(req.body);
    res.json(pkg);
  } catch (err) { next(err); }
};

exports.deletePackage = async (req, res, next) => {
  try {
    const pkg = await StakingPackage.findByPk(req.params.id);
    if (!pkg) return res.status(404).json({ error: 'Staking package not found' });
    await pkg.destroy();
    res.json({ message: 'Staking package deleted' });
  } catch (err) { next(err); }
};

exports.getPackagesByCondition = async (req, res, next) => {
  try {
    const { condition } = req.body;
    if (!condition || typeof condition !== 'object') {
      return res.status(400).json({ error: 'Invalid or missing condition object' });
    }
    const pkgs = await StakingPackage.findAll({ where: condition });
    res.json(pkgs);
  } catch (err) { next(err); }
}; 