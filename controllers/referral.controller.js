const { AffiliateRelationship } = require('../db/models');

exports.createAffiliate = async (req, res, next) => {
  try {
    const rel = await AffiliateRelationship.create(req.body);
    res.status(201).json(rel);
  } catch (err) { next(err); }
};

exports.getAllAffiliates = async (req, res, next) => {
  try {
    const rels = await AffiliateRelationship.findAll();
    res.json(rels);
  } catch (err) { next(err); }
};

exports.getAffiliateById = async (req, res, next) => {
  try {
    const rel = await AffiliateRelationship.findByPk(req.params.id);
    if (!rel) return res.status(404).json({ error: 'Affiliate relationship not found' });
    res.json(rel);
  } catch (err) { next(err); }
};

exports.updateAffiliate = async (req, res, next) => {
  try {
    const rel = await AffiliateRelationship.findByPk(req.params.id);
    if (!rel) return res.status(404).json({ error: 'Affiliate relationship not found' });
    await rel.update(req.body);
    res.json(rel);
  } catch (err) { next(err); }
};

exports.deleteAffiliate = async (req, res, next) => {
  try {
    const rel = await AffiliateRelationship.findByPk(req.params.id);
    if (!rel) return res.status(404).json({ error: 'Affiliate relationship not found' });
    await rel.destroy();
    res.json({ message: 'Affiliate relationship deleted' });
  } catch (err) { next(err); }
};

exports.getAffiliatesByCondition = async (req, res, next) => {
  try {
    const { condition } = req.body;
    if (!condition || typeof condition !== 'object') {
      return res.status(400).json({ error: 'Invalid or missing condition object' });
    }
    const rels = await AffiliateRelationship.findAll({ where: condition });
    res.json(rels);
  } catch (err) { next(err); }
}; 