// src/components/Sidebar.jsx
import React from 'react';

/**
 * SIDEBAR COMPONENT
 * 
 * Props:
 * - onNavigate: Menü öğesine tıklandığında sayfa geçişi yapar
 * - onLogout: Çıkış yap butonuna tıklandığında çağrılır
 * - currentPage: Hangi sayfada olduğumuzu gösterir (active class için)
 */
const Sidebar = ({ onNavigate, onLogout, currentPage = 'dashboard' }) => {
  
  // Tanımlı route'lar - bunlar App.jsx'de var
  const availableRoutes = ['dashboard', 'courses', 'exams'];
  
  const handleNavClick = (event, page) => {
    event.preventDefault();
    
    // Eğer route tanımlıysa git
    if (availableRoutes.includes(page)) {
      if (onNavigate) {
        onNavigate(page);
      }
    } else {
      // Henüz hazır değilse bilgilendir
      alert(`"${page}" sayfası henüz hazır değil. Yakında eklenecek! 🚀`);
    }
  };

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">✏️</div>
        <div className="brand-text">
          <div className="title">Learny</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="sidebar-section-label">Main</div>
        <ul className="nav-list">
          <li className="nav-item">
            <a 
              className={`nav-link ${currentPage === 'dashboard' ? 'active' : ''}`}
              href="#" 
              onClick={(e) => handleNavClick(e, 'dashboard')}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M3 13h8V3H3zM13 21h8v-8h-8zM13 3v8h8V3zM3 21h8v-4H3z" />
              </svg>
              <span>Dashboard</span>
            </a>
          </li>

          <li className="nav-item">
            <a 
              className={`nav-link ${currentPage === 'courses' ? 'active' : ''}`}
              href="#" 
              onClick={(e) => handleNavClick(e, 'courses')}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 004 22h16v-7H6.5A2.5 2.5 0 004 17.5v2z" />
                <path d="M4 4.5A2.5 2.5 0 016.5 2H20v15H6.5A2.5 2.5 0 014 14.5v-10z" />
              </svg>
              <span>Derslerim</span>
            </a>
          </li>

          {/* SINAVLAR - YENİ EKLENEN */}
          <li className="nav-item">
            <a 
              className={`nav-link ${currentPage === 'exams' ? 'active' : ''}`}
              href="#" 
              onClick={(e) => handleNavClick(e, 'exams')}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <span>Sınavlar</span>
            </a>
          </li>

          <li className="nav-item">
            <a 
              className="nav-link" 
              href="#" 
              onClick={(e) => handleNavClick(e, 'tasks')}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <span>Görevler</span>
            </a>
          </li>

          <li className="nav-item">
            <a 
              className="nav-link" 
              href="#" 
              onClick={(e) => handleNavClick(e, 'progress')}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              </svg>
              <span>İlerleme</span>
            </a>
          </li>
        </ul>

        <div className="sidebar-section-label">Diğer</div>
        <ul className="nav-list">
          <li className="nav-item">
            <a 
              className="nav-link" 
              href="#" 
              onClick={(e) => handleNavClick(e, 'messages')}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              <span>Mesajlar</span>
            </a>
          </li>

          <li className="nav-item">
            <a 
              className="nav-link" 
              href="#" 
              onClick={(e) => handleNavClick(e, 'settings')}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
              </svg>
              <span>Ayarlar</span>
            </a>
          </li>
          
          {/* Çıkış Yap Butonu */}
          <li className="nav-item">
            <a 
              className="nav-link" 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                if (onLogout) onLogout();
              }}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
              </svg>
              <span>Çıkış Yap</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;