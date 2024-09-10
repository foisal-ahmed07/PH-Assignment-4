function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }

  const part = email.split("@");
  const userName = part[0];
  const domainName = part[1];
  const notification = userName + " sent you an email from " + domainName;
  return notification;
}
console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com"));
