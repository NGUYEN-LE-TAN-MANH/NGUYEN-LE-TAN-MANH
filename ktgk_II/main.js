function showDetail(title, author, price) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-author').textContent = author;
  document.getElementById('modal-price').textContent = price;
  document.getElementById('book-modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('book-modal').style.display = 'none';
}