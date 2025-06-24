const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/testimonial.controller');

// Get all testimonials
router.get('/', testimonialController.getAllTestimonials);

// Get testimonial by ID
router.get('/:id', testimonialController.getTestimonialById);

// Create a new testimonial
router.post('/', testimonialController.createTestimonial);

// Update a testimonial by ID
router.put('/:id', testimonialController.updateTestimonial);

// Delete a testimonial by ID
router.delete('/:id', testimonialController.deleteTestimonial);

// Get testimonials by condition
router.post('/condition', testimonialController.getTestimonialsByCondition);

module.exports = router; 