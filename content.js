window.addEventListener('load', function() {
  setTimeout(() => {
      let hr = document.querySelector('.chr-doubt-item-v2__btn--accept-request');
      if (hr) {
        let audio = new Audio(chrome.runtime.getURL('assets/alert.mp3'));
        audio.play();
        chrome.storage.sync.get('acceptRequest', (data) => {
          if(data.acceptRequest){
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
        });
      }
  }, 8000);
});
