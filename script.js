// Utility to toggle the visibility of offering details
document.addEventListener('DOMContentLoaded', function () {
  // Toggle 'Learn more' sections
  const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
  learnMoreButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const fullDesc = this.nextElementSibling;
      if (!fullDesc) return;
      const isHidden = fullDesc.style.display === '' || fullDesc.style.display === 'none';
      fullDesc.style.display = isHidden ? 'block' : 'none';
      this.textContent = isHidden ? 'Show less' : 'Learn more';
    });
  });

  // Offerings form submission handler for one-page layout
  const offeringsForm = document.getElementById('offerings-form');
  if (offeringsForm) {
    offeringsForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // Collect selected offerings from checkboxes
      const selected = Array.from(document.querySelectorAll('.offering-checkbox:checked')).map(cb => cb.value);
      if (selected.length === 0) {
        alert('Please select at least one offering.');
        return;
      }
      // Gather contact information (Name and Email)
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !email) {
        alert('Please fill out the required fields (Name and Email).');
        return;
      }
      // Construct email body
      let body = 'Name: ' + name + '\n';
      body += 'Email: ' + email + '\n';
      body += 'Selected offerings: ' + selected.join(', ') + '\n';
      if (message) {
        body += '\nMessage:\n' + message;
      }
      const mailtoLink = 'mailto:lenakut@gmail.com?subject=' + encodeURIComponent('New Inquiry from Your Website') + '&body=' + encodeURIComponent(body);
      window.location.href = mailtoLink;
    });
  }

  // Contact page form submission handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('contact-name').value.trim();
      const org = document.getElementById('contact-org').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const message = document.getElementById('contact-message').value.trim();
      // Selected offerings from multi-select
      const offeringsSelect = document.getElementById('contact-offerings');
      const selectedOptions = Array.from(offeringsSelect.options).filter(opt => opt.selected).map(opt => opt.value);
      if (!name || !org || !email) {
        alert('Please fill out the required fields (Name, Organization, Email).');
        return;
      }
      let body = 'Name: ' + name + '\n';
      body += 'Organization: ' + org + '\n';
      body += 'Email: ' + email + '\n';
      if (selectedOptions.length > 0) {
        body += 'Selected offerings: ' + selectedOptions.join(', ') + '\n';
      }
      if (message) {
        body += '\nMessage:\n' + message;
      }
      const mailtoLink = 'mailto:lenakut@gmail.com?subject=' + encodeURIComponent('New Inquiry from Your Website') + '&body=' + encodeURIComponent(body);
      window.location.href = mailtoLink;
    });
  }
});