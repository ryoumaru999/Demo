if (document.querySelector('.product-page')) {

  const params = new URLSearchParams(window.location.search);
  const model = params.get('model');

  const data = {
    "iphone-16-pro-max": {
      name: "iPhone 16 Pro Max",
      price: "เริ่ม 1,399 / ด.",
      img: "https://images.apple.com/v/iphone-16-pro-max/a/images/overview/design/finish_titanium__b9l4z0a0d2oi_large.jpg"
    },
    "iphone-17-pro-max": {
      name: "iPhone 17 Pro Max",
      price: "เริ่ม 1,499 / ด.",
      img: "https://images.apple.com/v/iphone-16-pro-max/a/images/overview/design/finish_titanium__b9l4z0a0d2oi_large.jpg"
    }
  };

  if (data[model]) {
    document.getElementById('modelName').innerText = data[model].name;
    document.getElementById('priceText').innerText = data[model].price;
    document.getElementById('phoneImage').src = data[model].img;
  }

  // เลือกสี (mock)
  document.querySelectorAll('.colors button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.colors button')
        .forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

}
