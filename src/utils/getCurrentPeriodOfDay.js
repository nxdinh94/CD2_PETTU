export default function getCurrentPeriodOfDay() {
    const hour = new Date().getHours();
  
    if (hour >= 5 && hour < 11) {
      return "sáng";
    } else if (hour >= 11 && hour < 13) {
      return "trưa";
    } else if (hour >= 13 && hour < 17) {
      return "chiều";
    } else if (hour >= 17 && hour < 21) {
      return "tối";
    } else {
      return "đêm";
    }
  }
  