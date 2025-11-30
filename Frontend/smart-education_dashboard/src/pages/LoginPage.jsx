import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email.trim() || !form.password.trim()) {
      setError("Lütfen e-posta ve şifre alanlarını doldur.");
      return;
    }

    // TODO: Burada Spring Boot login API çağrısı yapacaksın
    // örnek:
    // await login(form.email, form.password, form.rememberMe);

    console.log("Giriş formu:", form);
  };

  const togglePassword = () => setShowPassword((prev) => !prev);

  // Kayıt sayfasına yönlendirme fonksiyonu
  const handleGoToRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        {/* LEFT SIDE: FORM */}
        <section className="login-left">
          {/* Brand */}
          <div className="brand-header">
            <div className="brand-icon">✏️</div>
            <div className="brand-text">
              <div className="title">smart education</div>
              <div className="subtitle">your best slogan here</div>
            </div>
          </div>

          {/* Welcome text */}
          <div className="welcome-block">
            <div className="welcome-title">Tekrar hoş geldin 👋</div>
            <div className="welcome-desc">
              Hesabına giriş yap ve kaldığın yerden devam et.
            </div>
          </div>

          {/* FORM CARD */}
          <div className="form-card">
            {error && (
              <div className="error-box">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <label className="form-label" htmlFor="emailInput">
                  <span>E-posta adresi</span>
                </label>
                <div className="input-wrapper">
                  <input
                    className="input-field"
                    id="emailInput"
                    name="email"
                    type="email"
                    placeholder="ornek@site.com"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <label className="form-label" htmlFor="passwordInput">
                  <span>Şifre</span>
                  <a className="forgot-link" href="#">
                    Şifremi unuttum
                  </a>
                </label>

                <div className="input-wrapper">
                  <input
                    className="input-field"
                    id="passwordInput"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    required
                    value={form.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={togglePassword}
                    aria-label="Şifreyi göster/gizle"
                  >
                    {showPassword ? "Gizle" : "Göster"}
                  </button>
                </div>
              </div>

              <div className="remember-row">
                <label className="remember-left">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={form.rememberMe}
                    onChange={handleChange}
                  />
                  <span>Beni hatırla</span>
                </label>

                <span
                  style={{
                    color: "var(--text-light)",
                    fontSize: ".7rem",
                  }}
                >
                  Misafir giriş aktif değil
                </span>
              </div>

              <button className="login-btn" type="submit">
                <span>Giriş Yap</span>
              </button>
            </form>

            <div className="divider-row">veya</div>

            <div className="social-row">
              <button className="social-btn" type="button">
                <span>📱</span>
                <span>Google ile devam et</span>
              </button>
              <button className="social-btn" type="button">
                <span>💼</span>
                <span>GitHub ile devam et</span>
              </button>
            </div>

            <div className="signup-row">
              Hesabın yok mu?{" "}
              <a href="#" onClick={handleGoToRegister}>
                Kayıt ol
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;