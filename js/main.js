const modal = document.querySelector('.modal');
const modalProduct = document.querySelector('#quick-product');
const notice = document.querySelector('.notice');
const productSelect = document.querySelector('#order-product');
let noticeTimer;

if (modal) {
  document.querySelectorAll('[data-modal-open]').forEach((button) => {
    button.addEventListener('click', () => {
      modalProduct.value = button.dataset.product;
      modal.showModal();
    });
  });

  document.querySelectorAll('[data-modal-close]').forEach((button) => {
    button.addEventListener('click', () => modal.close());
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
}

if (notice) {
  document.querySelectorAll('.form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      if (form.method !== 'dialog') {
        event.preventDefault();
      }

      form.reset();
      notice.hidden = false;
      clearTimeout(noticeTimer);
      noticeTimer = setTimeout(() => {
        notice.hidden = true;
      }, 5000);
    });
  });
}

if (productSelect) {
  const product = new URLSearchParams(window.location.search).get('product');

  if (product) {
    productSelect.value = product;
  }
}
