let isLogin = true;

function toggleMode() {
  isLogin = !isLogin;
  document.getElementById("form-title").innerText = isLogin ? "Giriş Yap" : "Kayıt Ol";
  document.querySelector(".toggle").innerText = isLogin ? "Hesabın yok mu? Kayıt Ol" : "Zaten hesabın var mı? Giriş Yap";
}