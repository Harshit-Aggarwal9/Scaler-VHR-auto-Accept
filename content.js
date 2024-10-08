window.addEventListener('load', function() {
  setTimeout(() => {
      let hr = document.querySelector('.chr-doubt-item-v2__btn--accept-request');
      if (hr) {
          hr.click();
          let label = document.querySelector('.chr-open-request-accept-modal__label');
          if (label) {
              label.click();
              let bookSlotBtn = document.querySelector('.chr-open-request-accept-modal__book-slot-btn');
              if (bookSlotBtn) {
                  bookSlotBtn.click();
              }
          }
      }
  }, 8000);
});
