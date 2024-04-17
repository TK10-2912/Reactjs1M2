export const translate = (key) => {
  switch (key) {
    case 'shop':
      return 'Cửa hàng';
    case 'about':
      return 'Giới thiệu';
    case 'contact':
      return 'Liên hệ';
    case 'introduction':
      return 'Giới thiệu';
    case 'journal':
      return 'Nhật ký';
    case 'category':
      return 'Danh mục';
    case 'product':
      return 'Sản phẩm';
    case 'cart':
      return 'Giỏ hàng';
    case 'paymentgateway':
      return 'Cổng thanh toán';
    case 'account':
      return 'Tài khoản';
    case 'paymentQR':
      return 'Thanh toán qua mã QR';
    case 'paymentSuccess':
      return 'Thanh toán thành công';
    case 'news':
      return 'Tin tức';
    case 'forgetpassword':
      return 'Quên mật khẩu';
    case 'instruction':
      return 'Hướng dẫn';
    case 'signup':
      return 'Đăng ký';
    case 'signin':
      return 'Đăng nhập';
    default:
      return key; // Trả về key ban đầu nếu không có sự phù hợp
  }
}
