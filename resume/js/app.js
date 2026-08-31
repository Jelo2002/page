/**
 * Jeremy Angelo Lim - Portfolio Core Application Script
 * Features: Dynamic rendering, interactive filtering, modal system,
 * search engine, clipboard manager, theme toggle, and print engine.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProfile();
  renderValueProps();
  renderSkillPillars();
  renderProjects();
  renderExperience();
  renderToolsMatrix();
  initNavigation();
  initContactForm();
  initModalListeners();
  initLucideIcons();
});

/* ==========================================================================
   1. Theme Manager (Dark / Light with LocalStorage)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('jal_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('jal_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#theme-toggle i');
  if (!icon) return;
  if (theme === 'dark') {
    icon.setAttribute('data-lucide', 'sun');
  } else {
    icon.setAttribute('data-lucide', 'moon');
  }
  if (window.lucide) lucide.createIcons();
}

/* ==========================================================================
   2. Profile & Hero Section
   ========================================================================== */
function renderProfile() {
  const { profile } = portfolioData;

  // Update dynamic placeholders if present
  document.querySelectorAll('.profile-name').forEach(el => el.textContent = profile.name);
  document.querySelectorAll('.profile-role').forEach(el => el.textContent = profile.role);
  document.querySelectorAll('.profile-tagline').forEach(el => el.textContent = profile.tagline);
  document.querySelectorAll('.profile-location').forEach(el => el.textContent = profile.location);
  document.querySelectorAll('.profile-email').forEach(el => {
    el.textContent = profile.email;
    if (el.tagName === 'A') el.href = `mailto:${profile.email}`;
  });
  document.querySelectorAll('.profile-phone').forEach(el => {
    el.textContent = profile.phone;
    if (el.tagName === 'A') el.href = `tel:${profile.phone.replace(/[^0-9+]/g, '')}`;
  });

  // Metrics Bar
  const metricsContainer = document.getElementById('hero-metrics-container');
  if (metricsContainer && profile.keyMetrics) {
    metricsContainer.innerHTML = profile.keyMetrics.map(m => `
      <div class="metric-card">
        <span class="metric-val">${m.value}</span>
        <span class="metric-lbl">${m.label}</span>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   3. Value Proposition ("What I Bring")
   ========================================================================== */
function renderValueProps() {
  const container = document.getElementById('value-props-container');
  if (!container) return;

  container.innerHTML = portfolioData.valueProps.map(vp => `
    <div class="value-card">
      <div class="value-icon-box">
        <i data-lucide="${vp.icon}"></i>
      </div>
      <h3 class="value-title">${vp.title}</h3>
      <p class="value-desc">${vp.description}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   4. Core Skill Pillars (Interactive Tabs)
   ========================================================================== */
let activePillarId = portfolioData.coreSkillPillars[0].id;

function renderSkillPillars() {
  const tabsContainer = document.getElementById('pillar-tabs');
  const panelContainer = document.getElementById('pillar-panel');
  if (!tabsContainer || !panelContainer) return;

  // Render Tabs
  tabsContainer.innerHTML = portfolioData.coreSkillPillars.map(pillar => `
    <button class="pillar-tab-btn ${pillar.id === activePillarId ? 'active' : ''}" data-pillar="${pillar.id}">
      <i data-lucide="${pillar.icon}"></i>
      <span>${pillar.name}</span>
    </button>
  `).join('');

  // Attach tab click events
  tabsContainer.querySelectorAll('.pillar-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activePillarId = btn.getAttribute('data-pillar');
      renderSkillPillars();
      if (window.lucide) lucide.createIcons();
    });
  });

  // Render Active Panel
  const currentPillar = portfolioData.coreSkillPillars.find(p => p.id === activePillarId) || portfolioData.coreSkillPillars[0];

  panelContainer.innerHTML = `
    <div class="pillar-panel-header">
      <div class="pillar-header-left">
        <div class="pillar-header-icon">
          <i data-lucide="${currentPillar.icon}"></i>
        </div>
        <div class="pillar-header-text">
          <h3>${currentPillar.name}</h3>
          <p>${currentPillar.description}</p>
        </div>
      </div>
      <span class="tag">
        <i data-lucide="check-circle-2"></i> ${currentPillar.skills.length} Competencies
      </span>
    </div>
    <div class="skills-badge-grid">
      ${currentPillar.skills.map(skill => `
        <div class="skill-item-card">
          <div class="skill-name">
            <i data-lucide="check"></i>
            <span>${skill.name}</span>
          </div>
          <span class="skill-level-pill">${skill.level}</span>
        </div>
      `).join('')}
    </div>
  `;
}

/* ==========================================================================
   5. Projects Showcase & Filter System
   ========================================================================== */
let activeProjectFilter = 'all';

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  const filterContainer = document.getElementById('project-filter-bar');
  if (!grid) return;

  const categories = [
    { id: 'all', label: 'All Systems & Projects' },
    { id: 'systems', label: 'Systems & Automation' },
    { id: 'admin', label: 'Admin & Knowledge Base' },
    { id: 'it', label: 'IT & Infrastructure' }
  ];

  if (filterContainer && !filterContainer.hasChildNodes()) {
    filterContainer.innerHTML = categories.map(cat => `
      <button class="filter-btn ${cat.id === activeProjectFilter ? 'active' : ''}" data-filter="${cat.id}">
        ${cat.label}
      </button>
    `).join('');

    filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeProjectFilter = btn.getAttribute('data-filter');
        filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjectsList();
      });
    });
  }

  renderProjectsList();
}

function renderProjectsList() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const filtered = activeProjectFilter === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === activeProjectFilter);

  grid.innerHTML = filtered.map(p => `
    <div class="project-card" data-project-id="${p.id}">
      <div class="project-mockup-wrap">
        <span class="project-category-badge">${p.categoryLabel}</span>
        ${generateProjectMockupSvg(p.mockupType, p.title)}
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        
        <div class="project-impact-box">
          <strong>Key Value Delivered:</strong>
          ${p.impact}
        </div>

        <div class="project-tech-tags">
          ${p.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>

        <div class="project-footer">
          <button class="btn btn-secondary btn-sm open-project-modal-btn" data-project-id="${p.id}">
            <i data-lucide="layers"></i> View System Details
          </button>
          <span class="tag"><i data-lucide="shield-check"></i> ${p.highlight}</span>
        </div>
      </div>
    </div>
  `).join('');

  // Attach modal trigger events
  grid.querySelectorAll('.open-project-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pid = btn.getAttribute('data-project-id');
      openProjectModal(pid);
    });
  });

  if (window.lucide) lucide.createIcons();
}

/* SVG Mockup Generator for Projects */
function generateProjectMockupSvg(type, title) {
  switch (type) {
    case 'dashboard':
      return `
        <svg class="mockup-svg-canvas" viewBox="0 0 340 140" fill="none">
          <rect width="340" height="140" rx="8" fill="#131d33" stroke="#223253" stroke-width="1.5"/>
          <rect x="14" y="14" width="80" height="112" rx="6" fill="#1b2847"/>
          <circle cx="28" cy="28" r="5" fill="#10B981"/>
          <rect x="40" y="24" width="44" height="8" rx="2" fill="#334155"/>
          <rect x="24" y="44" width="60" height="6" rx="2" fill="#475569"/>
          <rect x="24" y="58" width="60" height="6" rx="2" fill="#475569"/>
          <rect x="24" y="72" width="60" height="6" rx="2" fill="#475569"/>
          <rect x="106" y="14" width="68" height="34" rx="6" fill="#1e2d50"/>
          <rect x="184" y="14" width="68" height="34" rx="6" fill="#1e2d50"/>
          <rect x="262" y="14" width="64" height="34" rx="6" fill="#1e2d50"/>
          <rect x="106" y="58" width="220" height="68" rx="6" fill="#17223c"/>
          <path d="M118 106L150 86L190 98L240 76L310 90" stroke="#10B981" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      `;
    case 'portal':
      return `
        <svg class="mockup-svg-canvas" viewBox="0 0 340 140" fill="none">
          <rect width="340" height="140" rx="8" fill="#111c30" stroke="#213454" stroke-width="1.5"/>
          <rect x="16" y="16" width="308" height="24" rx="4" fill="#1d2d4c"/>
          <circle cx="32" cy="28" r="4" fill="#38BDF8"/>
          <rect x="46" y="24" width="120" height="8" rx="2" fill="#475569"/>
          <rect x="16" y="50" width="94" height="74" rx="6" fill="#18253e"/>
          <rect x="120" y="50" width="94" height="74" rx="6" fill="#18253e"/>
          <rect x="224" y="50" width="100" height="74" rx="6" fill="#18253e"/>
          <circle cx="63" cy="74" r="12" fill="#6366F1"/>
          <circle cx="167" cy="74" r="12" fill="#10B981"/>
          <circle cx="274" cy="74" r="12" fill="#F59E0B"/>
        </svg>
      `;
    case 'docs':
      return `
        <svg class="mockup-svg-canvas" viewBox="0 0 340 140" fill="none">
          <rect width="340" height="140" rx="8" fill="#0f192b" stroke="#1e3050" stroke-width="1.5"/>
          <rect x="16" y="16" width="90" height="108" rx="6" fill="#182742"/>
          <rect x="26" y="26" width="70" height="8" rx="2" fill="#10B981"/>
          <rect x="26" y="42" width="60" height="6" rx="2" fill="#334155"/>
          <rect x="26" y="56" width="60" height="6" rx="2" fill="#334155"/>
          <rect x="26" y="70" width="60" height="6" rx="2" fill="#334155"/>
          <rect x="116" y="16" width="208" height="108" rx="6" fill="#142138"/>
          <rect x="130" y="28" width="120" height="10" rx="2" fill="#38BDF8"/>
          <rect x="130" y="48" width="180" height="6" rx="2" fill="#475569"/>
          <rect x="130" y="60" width="160" height="6" rx="2" fill="#475569"/>
          <rect x="130" y="72" width="170" height="6" rx="2" fill="#475569"/>
          <rect x="130" y="90" width="90" height="18" rx="4" fill="#10B981" opacity="0.8"/>
        </svg>
      `;
    case 'workflow':
      return `
        <svg class="mockup-svg-canvas" viewBox="0 0 340 140" fill="none">
          <rect width="340" height="140" rx="8" fill="#10192e" stroke="#1e2e4f" stroke-width="1.5"/>
          <rect x="20" y="45" width="70" height="50" rx="6" fill="#1f2d4e" stroke="#38BDF8"/>
          <rect x="135" y="45" width="70" height="50" rx="6" fill="#1f2d4e" stroke="#10B981"/>
          <rect x="250" y="45" width="70" height="50" rx="6" fill="#1f2d4e" stroke="#6366F1"/>
          <path d="M90 70H135" stroke="#38BDF8" stroke-width="2" stroke-dasharray="4 3"/>
          <path d="M205 70H250" stroke="#10B981" stroke-width="2" stroke-dasharray="4 3"/>
          <circle cx="112" cy="70" r="4" fill="#38BDF8"/>
          <circle cx="227" cy="70" r="4" fill="#10B981"/>
          <text x="35" y="74" fill="#ffffff" font-size="9" font-family="sans-serif" font-weight="bold">TRIGGER</text>
          <text x="148" y="74" fill="#ffffff" font-size="9" font-family="sans-serif" font-weight="bold">PROCESS</text>
          <text x="268" y="74" fill="#ffffff" font-size="9" font-family="sans-serif" font-weight="bold">SYNC</text>
        </svg>
      `;
    default:
      return `
        <svg class="mockup-svg-canvas" viewBox="0 0 340 140" fill="none">
          <rect width="340" height="140" rx="8" fill="#101726" stroke="#22304a" stroke-width="1.5"/>
          <circle cx="170" cy="55" r="24" fill="#1e293b" stroke="#10B981" stroke-width="2"/>
          <rect x="110" y="92" width="120" height="8" rx="2" fill="#475569"/>
          <rect x="130" y="106" width="80" height="6" rx="2" fill="#334155"/>
        </svg>
      `;
  }
}

/* ==========================================================================
   6. Professional Experience
   ========================================================================== */
function renderExperience() {
  const container = document.getElementById('experience-timeline-container');
  if (!container) return;

  container.innerHTML = portfolioData.experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-node"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div>
            <h3 class="role-title">${exp.role}</h3>
            <span class="company-name">${exp.company}</span> • <span class="text-muted" style="font-size:0.85rem;">${exp.location}</span>
          </div>
          <div class="timeline-badge-group">
            <span class="period-pill">${exp.period}</span>
            <span class="tag">${exp.badge}</span>
          </div>
        </div>

        <ul class="timeline-duties">
          ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
        </ul>

        <div class="timeline-tools">
          <span class="timeline-tools-label">Key Systems & Tools:</span>
          ${exp.tools.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   7. Tools & Tech Matrix (Live Search)
   ========================================================================== */
function renderToolsMatrix() {
  const container = document.getElementById('tool-categories-container');
  const searchInput = document.getElementById('tool-search-input');
  if (!container) return;

  function displayCategories(searchTerm = '') {
    const term = searchTerm.toLowerCase().trim();

    container.innerHTML = portfolioData.toolCategories.map(cat => {
      const filteredItems = cat.items.filter(item => item.toLowerCase().includes(term));
      const hasMatch = term === '' || filteredItems.length > 0;

      if (!hasMatch) return '';

      return `
        <div class="tool-category-card">
          <div class="tool-category-header">
            <i data-lucide="${cat.icon}" class="tool-cat-icon"></i>
            <h4 class="tool-cat-title">${cat.name}</h4>
          </div>
          <div class="tool-pills-list">
            ${cat.items.map(item => {
              const isMatch = term !== '' && item.toLowerCase().includes(term);
              return `<span class="tool-pill ${isMatch ? 'highlight' : ''}">${item}</span>`;
            }).join('')}
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) lucide.createIcons();
  }

  displayCategories();

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      displayCategories(e.target.value);
    });
  }
}

/* ==========================================================================
   8. Project Details Modal System
   ========================================================================== */
function openProjectModal(projectId) {
  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!project) return;

  const modalBackdrop = document.getElementById('project-modal');
  const modalBody = document.getElementById('project-modal-body');
  if (!modalBackdrop || !modalBody) return;

  modalBody.innerHTML = `
    <div class="modal-header-section">
      <div class="modal-tag">${project.categoryLabel} • ${project.highlight}</div>
      <h2 class="modal-title">${project.title}</h2>
    </div>

    <p style="color: var(--text-secondary); font-size: 1rem; line-height: 1.7; margin-bottom: 1.5rem;">
      ${project.description}
    </p>

    <div class="project-impact-box" style="margin-bottom: 1.5rem;">
      <strong>Operational Impact:</strong>
      ${project.impact}
    </div>

    <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem; font-weight: 700;">System Architecture Flow</h4>
    <div class="modal-architecture-diagram">
      <div class="arch-boxes-flow">
        <div class="arch-node">
          <div style="font-size:0.7rem; color:var(--accent-emerald);">CLIENT INTERFACE</div>
          Web Portal / Google Auth
        </div>
        <div class="arch-arrow">➔</div>
        <div class="arch-node">
          <div style="font-size:0.7rem; color:var(--accent-cyan);">LOGIC LAYER</div>
          PHP / Automation Scripts
        </div>
        <div class="arch-arrow">➔</div>
        <div class="arch-node">
          <div style="font-size:0.7rem; color:var(--accent-indigo);">STORAGE & DB</div>
          MySQL Database / cPanel
        </div>
        <div class="arch-arrow">➔</div>
        <div class="arch-node">
          <div style="font-size:0.7rem; color:#10B981;">OUTPUT</div>
          Automated Reports / Logs
        </div>
      </div>
    </div>

    <h4 style="font-size: 1.1rem; margin: 1.5rem 0 0.75rem 0; font-weight: 700;">Core Capabilities & Features</h4>
    <ul class="timeline-duties" style="margin-bottom: 1.5rem;">
      ${project.features.map(f => `<li>${f}</li>`).join('')}
    </ul>

    <h4 style="font-size: 1rem; margin-bottom: 0.5rem; font-weight: 700;">Technologies & Protocols:</h4>
    <div class="project-tech-tags">
      ${project.techStack.map(t => `<span class="tech-tag" style="background:var(--bg-secondary); border-color:var(--border-focus); color:var(--text-primary); font-size:0.8rem;">${t}</span>`).join('')}
    </div>

    <div style="margin-top: 2rem; display: flex; justify-content: flex-end; gap: 1rem;">
      <button class="btn btn-secondary btn-sm" onclick="closeProjectModal()">Close Details</button>
      <a href="#contact" class="btn btn-primary btn-sm" onclick="closeProjectModal(); fillInquiryTopic('${project.title}')">
        Inquire About This System
      </a>
    </div>
  `;

  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (window.lucide) lucide.createIcons();
}

function closeProjectModal() {
  const modalBackdrop = document.getElementById('project-modal');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function initModalListeners() {
  const closeBtn = document.getElementById('modal-close-btn');
  const modalBackdrop = document.getElementById('project-modal');

  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeProjectModal();
    });
  }

  // Escape key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });
}

/* ==========================================================================
   9. Clipboard & Feedback Toast
   ========================================================================== */
function copyToClipboard(text, label = 'Copied') {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${label} copied to clipboard!`, 'check');
  }).catch(() => {
    showToast(`Could not copy: ${text}`, 'alert-circle');
  });
}

function showToast(message, icon = 'check') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast show';
  toast.innerHTML = `
    <i data-lucide="${icon}" class="toast-icon"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

/* ==========================================================================
   10. Contact Form & Inquiry Helper
   ========================================================================== */
function fillInquiryTopic(subjectText) {
  const subjectSelect = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  if (subjectSelect) {
    subjectSelect.value = 'systems';
  }
  if (messageInput) {
    messageInput.value = `Hi Jeremy, I would like to discuss your experience regarding "${subjectText}". Let's connect!`;
    messageInput.focus();
  }
}

function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value;

    const mailtoUri = `mailto:${portfolioData.profile.email}?subject=${encodeURIComponent(`[Portfolio Inquiry] ${subject} - ${name}`)}&body=${encodeURIComponent(`Sender: ${name} (${email})\n\nMessage:\n${message}`)}`;

    window.open(mailtoUri, '_blank');
    showToast('Opening email client...', 'send');
    form.reset();
  });
}

/* ==========================================================================
   11. Navigation & Print Actions
   ========================================================================== */
function initNavigation() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const navbar = document.getElementById('navbar');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    mobileDrawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // Scroll effect for navbar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Resume Print Trigger
  document.querySelectorAll('.trigger-resume-print').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  });

  // Global Clipboard triggers
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-copy-label') || 'Text';
      copyToClipboard(val, label);
    });
  });
}

function initLucideIcons() {
  if (window.lucide) {
    lucide.createIcons();
  }
}
