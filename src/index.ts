export function PersianTime(time: string | Date | number): string {
    const date = new Date(time);
  
    if (isNaN(date.getTime())) {
      return "تاریخ نامعتبر است";
    }
  
    const formattedDate = date.toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  
    const formattedTime = date.toLocaleTimeString("fa-IR", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "Asia/Tehran",
    });
  
    return `${formattedDate} - ${formattedTime}`;
  }
  