/**
 * File: public/javascripts/main.js
 * Student: Nawriz Ibrahim
 * StudentID: 301161181
 * Date: 2025-09-26
 * Notes: Small progressive enhancements; We can add some functions with section headers.
 */

// ===== Footer Year =====
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
