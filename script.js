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
      // Validate that at least one offering is selected and required fields are
      // filled. If validation passes, allow the form to submit normally to
      // FormSubmit (configured via the form's action attribute). Otherwise,
      // prevent submission and display an alert.
      const offeringsForm = document.getElementById('offerings-form');
      if (offeringsForm) {
        offeringsForm.addEventListener('submit', function (e) {
          const selected = Array.from(document.querySelectorAll('.offering-checkbox:checked'));
          const name = document.getElementById('name').value.trim();
          const email = document.getElementById('email').value.trim();
          if (selected.length === 0) {
            e.preventDefault();
            alert('Please select at least one offering.');
            return;
          }
          if (!name || !email) {
            e.preventDefault();
            alert('Please fill out the required fields (Name and Email).');
            return;
          }
          // If validation passes, the form will submit normally, sending data to
          // FormSubmit for processing and emailing.
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