import React, { useState } from "react";
import './form.css'

const ServiceSurvey = () => {


  const urlParam = new URLSearchParams(window.location.search)

  const [formData, setFormData] = useState({
    email: urlParam.get('email'),
    satisfaction: "",
    timing: "",
    service_quality: "",
    staff_feedback: "",
    comfort: "",
    price_feedback: "",
    recommend: "",
    return_intent: "",
    equipment: "",
    activity: "",
    consultation: "",
    safety: "",
    suggestions: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  function toSnakeCase(obj) {
    if (Array.isArray(obj)) {
      return obj.map(toSnakeCase);
    } else if (obj !== null && typeof obj === "object") {
      return Object.keys(obj).reduce((acc, key) => {
        const snakeKey = key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
        acc[snakeKey] = toSnakeCase(obj[key]);
        return acc;
      }, {});
    }
    return obj;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    try {
      const snakeFormData = toSnakeCase(formData);
      console.log("afgf",formData)
      const res = await fetch("http://localhost:80/backend_pettu/api/services/createUserServiceSurvey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(snakeFormData)
      });

      if (res.status) {

        console.log("aaa",formData);
        alert("✅ Cảm ơn bạn đã phản hồi!");
        setFormData({
          email: urlParam.get('email'),
          satisfaction: "",
          timing: "",
          service_quality: "",
          staff_feedback: "",
          comfort: "",
          price_feedback: "",
          recommend: "",
          return_intent: "",
          equipment: "",
          activity: "",
          consultation: "",
          safety: "",
          suggestions: ""
        });
      } else {
        alert("❌ Gửi khảo sát thất bại!");
      }
    } catch (error) {
      console.error("Lỗi gửi khảo sát:", error);
    }
  };

  return (
    <div className="survey-container">
      <h2 className="survey_title">📝 Khảo sát dịch vụ chăm sóc thú cưng</h2>
      <form onSubmit={handleSubmit}>
        <label className="survey_label">Email của bạn:</label>
        <input
          className="survey_input"
          type="email"
          name="email"
          required
          value={formData.email}
          disabled
          style={{marginBottom:30}}
        />

        <div className="survey-question-wrapper">
          <label className="survey_label">1. Bạn đánh giá mức độ hài lòng chung về dịch vụ chăm sóc thú cưng của chúng tôi?</label>
          <select
            className="survey_select"
            name="satisfaction"
            value={formData.satisfaction}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="5">5 - Rất hài lòng</option>
            <option value="4">4 - Hài lòng</option>
            <option value="3">3 - Bình thường</option>
            <option value="2">2 - Không hài lòng</option>
            <option value="1">1 - Rất không hài lòng</option>
          </select>
        </div>

        <div className="survey-question-wrapper">
          <label className="survey_label">2. Thời gian nhận thú cưng của bạn có đúng như cam kết không?</label>
          <select
            className="survey_select"
            name="timing"
            value={formData.timing}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="Có">Có</option>
            <option value="Không">Không</option>
          </select>
        </div>
        
        <div className="survey-question-wrapper">
          <label className="survey_label">3. Chất lượng dịch vụ chăm sóc (tắm, cắt tỉa lông, v.v.) có đáp ứng được mong đợi của bạn không?</label>
          <select
            className="survey_select"
            name="service_quality"
            value={formData.service_quality}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="5">5 - Rất tốt</option>
            <option value="4">4 - Tốt</option>
            <option value="3">3 - Bình thường</option>
            <option value="2">2 - Kém</option>
            <option value="1">1 - Rất kém</option>
          </select>
        </div>
        
        <div className="survey-question-wrapper">
          <label className="survey_label">4. Nhân viên có thân thiện và chuyên nghiệp không?</label>
          <select
            className="survey_select"
            name="staff_feedback"
            value={formData.staff_feedback}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="5">5 - Rất thân thiện và chuyên nghiệp</option>
            <option value="4">4 - Thân thiện</option>
            <option value="3">3 - Bình thường</option>
            <option value="2">2 - Không thân thiện</option>
            <option value="1">1 - Rất không thân thiện</option>
          </select>
        </div>
        
        <div className="survey-question-wrapper">
          <label className="survey_label">5. Bạn có cảm thấy thoải mái khi để thú cưng của mình sử dụng dịch vụ tại đây không?</label>
          <select
            className="survey_select"
            name="comfort"
            value={formData.comfort}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="Có">Có</option>
            <option value="Không">Không</option>
          </select>
        </div>
        
        <div className="survey-question-wrapper">
          <label className="survey_label">6. Giá dịch vụ có hợp lý với chất lượng không?</label>
          <select
            className="survey_select"
            name="price_feedback"
            value={formData.price_feedback}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="5">5 - Rất hợp lý</option>
            <option value="4">4 - Hợp lý</option>
            <option value="3">3 - Bình thường</option>
            <option value="2">2 - Cao</option>
            <option value="1">1 - Rất cao</option>
          </select>
        </div>
        
        <div className="survey-question-wrapper">
          <label className="survey_label">7. Bạn có giới thiệu dịch vụ này cho bạn bè hoặc người thân không?</label>
          <select
            className="survey_select"
            name="recommend"
            value={formData.recommend}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="Có">Có</option>
            <option value="Không">Không</option>
          </select>
        </div>
        
        <div className="survey-question-wrapper">
          <label className="survey_label">8. Bạn có sẵn sàng quay lại sử dụng dịch vụ trong tương lai không?</label>
          <select
            className="survey_select"
            name="return_intent"
            value={formData.return_intent}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="Chắc chắn quay lại">Chắc chắn quay lại</option>
            <option value="Có thể quay lại">Có thể quay lại</option>
            <option value="Không chắc">Không chắc</option>
            <option value="Không quay lại">Không quay lại</option>
          </select>
        </div>
        
        <div className="survey-question-wrapper">
          <label className="survey_label">9. Trang thiết bị và cơ sở vật chất tại cửa hàng có đầy đủ và sạch sẽ không?</label>
          <select
            className="survey_select"
            name="equipment"
            value={formData.equipment}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="5">5 - Rất sạch và đầy đủ</option>
            <option value="4">4 - Sạch sẽ</option>
            <option value="3">3 - Bình thường</option>
            <option value="2">2 - Cần cải thiện</option>
            <option value="1">1 - Rất không sạch</option>
          </select>
        </div>
        

        <div className="survey-question-wrapper">
          <label className="survey_label">10. Thú cưng của bạn có cảm thấy vui vẻ và năng động sau khi sử dụng dịch vụ?</label>
          <select
            className="survey_select"
            name="activity"
            value={formData.activity}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="Có">Có</option>
            <option value="Không">Không</option>
          </select>
        </div>
        
        <div className="survey-question-wrapper">
          <label className="survey_label">11. Bạn có hài lòng với mức độ tư vấn và hỗ trợ từ nhân viên khi bạn có thắc mắc?</label>
          <select
            className="survey_select"
            name="consultation"
            value={formData.consultation}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="5">5 - Rất hài lòng</option>
            <option value="4">4 - Hài lòng</option>
            <option value="3">3 - Bình thường</option>
            <option value="2">2 - Không hài lòng</option>
            <option value="1">1 - Rất không hài lòng</option>
          </select>
        </div>
        
        <div className="survey-question-wrapper">
          <label className="survey_label">12. Dịch vụ có đáp ứng được kỳ vọng của bạn về sự an toàn và chăm sóc cho thú cưng không?</label>
          <select
            className="survey_select"
            name="safety"
            value={formData.safety}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="5">5 - Rất đáp ứng</option>
            <option value="4">4 - Đáp ứng</option>
            <option value="3">3 - Bình thường</option>
            <option value="2">2 - Không đáp ứng</option>
            <option value="1">1 - Rất không đáp ứng</option>
          </select>
        </div>
         
        <div className="survey-question-wrapper">
          <label className="survey_select">13. Bạn có đề xuất cải thiện dịch vụ nào không?</label>
          <textarea
            className="survey_textarea"
            name="suggestions"
            value={formData.suggestions}
            onChange={handleChange}
          />
        </div>
        
        <button className="servay_button" type="submit">Gửi khảo sát</button>
      </form>
    </div>
  );
};

export default ServiceSurvey;