// routes/index.js
var express = require('express');
var router = express.Router();

/**
 * File: routes/index.js
 * Student: Nawriz Ibrahim
 * StudentID: 301161181
 * Date: 2025-09-26
 */

// Home
router.get('/', function(req, res) {
  // Show a success toast if redirected after contact form submit
  const success = req.query.success === '1';
  res.render('home', { title: 'Home', page: 'home', success });
});

// About
router.get('/about', function(req, res) {
  res.render('about', { title: 'About Me', page: 'about' });
});

// Projects
router.get('/projects', function(req, res) {
  // Simple hardcoded projects to start; you can move this to a JSON later
  const projects = [
    {
      title: 'Pizza Store Project',
      img: '/images/p1.png',
      description: 'A responsive Express/EJS portfolio site.'
    },
    {
      title: 'Online Grocery Store Project',
      img: '/images/p2.png',
      description: 'A small REST API built with Node and Express.'
    },
    {
      title: 'Weather App Project',
      img: '/images/p3.png',
      description: 'A front-end SPA bootstrapped with Vite + React.'
    }
  ];
  res.render('projects', { title: 'Projects', page: 'projects', projects });
});

// Services
router.get('/services', function(req, res) {
  const services = [
    'Web Development (Express, React, EJS)',
    'Mobile-Friendly UI Implementation',
    'Database Integration (MongoDB / SQL)'
  ];
  res.render('services', { title: 'Services', page: 'services', services });
});

// Contact (GET)
router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact', page: 'contact' });
});

// Contact (POST) – capture, log, redirect home with success
router.post('/contact', function(req, res) {
  const { fname, lname, phone, email, message } = req.body || {};
  // For now, just log to server console; later you could email/store it.
  console.log('Contact form submission:', { fname, lname, phone, email, message });

  // Requirement: capture info and redirect back to the Home page. :contentReference[oaicite:14]{index=14}
  res.redirect('/?success=1');
});

module.exports = router;
