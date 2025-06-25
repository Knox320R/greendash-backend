const { Testimonial } = require('../db/models');

exports.getAllTestimonials = async (req, res, next) => {
  try {
    const testimonials = await Testimonial.findAll();
    res.json(testimonials);
  } catch (err) { next(err); }
};

exports.getTestimonialById = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findByPk(req.params.id);
    if (!testimonial) return res.status(404).json({ error: 'Testimonial not found' });
    res.json(testimonial);
  } catch (err) { next(err); }
};

exports.createTestimonial = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.create(req.body);
    res.status(201).json(testimonial);
  } catch (err) { next(err); }
};

exports.updateTestimonial = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findByPk(req.params.id);
    if (!testimonial) return res.status(404).json({ error: 'Testimonial not found' });
    await testimonial.update(req.body);
    res.json(testimonial);
  } catch (err) { next(err); }
};

exports.deleteTestimonial = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findByPk(req.params.id);
    if (!testimonial) return res.status(404).json({ error: 'Testimonial not found' });
    await testimonial.destroy();
    res.json({ message: 'Testimonial deleted' });
  } catch (err) { next(err); }
};

exports.getTestimonialsByCondition = async (req, res, next) => {
  try {
    const { condition } = req.body;
    if (!condition || typeof condition !== 'object') {
      return res.status(400).json({ error: 'Invalid or missing condition object' });
    }
    const testimonials = await Testimonial.findAll({ where: condition });
    res.json(testimonials);
  } catch (err) { next(err); }
}; 