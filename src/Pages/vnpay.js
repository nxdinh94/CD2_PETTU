import { useState } from 'react';
import axios from 'axios';
import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { myVnpayPaymentApi } from '~/axios_node';

export default function VNPayPayment() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    console.log("Calling payment API..."); // Log thêm ở bước gọi API
    try {
      const response = await myVnpayPaymentApi();
      console.log("API Response:", response); // Log API response
  
      if (response.data?.paymentUrl) {
        console.log("Redirecting to payment URL:", response.data.paymentUrl);
        window.location.href = response.data.paymentUrl; // Redirect tới VNPAY
      } else {
        alert('Không tạo được link thanh toán!');
      }
    } catch (error) {
      console.error('Lỗi khi tạo link thanh toán:', error);
      alert('Có lỗi xảy ra, vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 text-center">
        <CardBody>
          <CardTitle tag="h2">Thanh toán VNPAY</CardTitle>
          <CardText className="mb-4">
            Nhấn nút bên dưới để tiến hành thanh toán thử với VNPAY.
          </CardText>
          <Button color="primary" onClick={handlePayment} disabled={loading}>
            {loading ? 'Đang tạo link thanh toán...' : 'Thanh toán ngay'}
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}