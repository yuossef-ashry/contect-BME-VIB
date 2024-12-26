document.querySelector("form").addEventListener("submit", function (event) {
    const username = document.querySelector("input[placeholder='Username']");
    const number = document.querySelector("input[placeholder='number']");
    const email = document.querySelector("input[placeholder='email']");
    const password = document.querySelector("input[placeholder='Password']");
    const textField = document.querySelector("input[placeholder='text']");
    
    if (!username.value.trim()) {
      alert("برجاء ملء اسم المستخدم");
      event.preventDefault();
      return;
    }
  
    if (!number.value.trim() || number.value.length !== 11) {
      alert("يجب أن يكون رقم الهاتف 11 رقم");
      event.preventDefault();
      return;
    }
  
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.value.trim() || !emailPattern.test(email.value)) {
      alert("يجب أن يكون البريد الإلكتروني مثل الحقيقي");
      event.preventDefault();
      return;
    }
  
    if (!password.value.trim()) {
      alert("برجاء ملء كلمة المرور");
      event.preventDefault();
      return;
    }
  
    if (!textField.value.trim()) {
      alert("برجاء ملء الحقل");
      event.preventDefault();
      return;
    }
  });
  