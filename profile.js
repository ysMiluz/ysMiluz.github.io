const resumeContent = {
  zh: {
    title: "龙春来 | 个人简历",
    description: "龙春来的个人简历网页，展示计算数学、数值算法、高性能计算、科研经历、实习经历与联系方式。",
    photoAlt: "龙春来证件照",
    name: "龙春来",
    role: "计算数学博士候选人 / 数值算法与高性能计算",
    location: "北京 · 海淀",
    availability: "中国科学院数学与系统科学研究院 · 计算数学",
    footer: "最后更新：2026",
    email: "longchunlai@lsec.cc.ac.cn",
    focus: ["计算数学", "电磁散射", "FDTD / ADE-FDTD", "高性能计算"],
    ui: {
      navLabel: "主导航",
      profileLabel: "个人资料",
      languageLabel: "语言切换",
      actions: {
        skip: "跳到正文",
        email: "发邮件",
        projects: "看项目",
      },
      nav: {
        about: "关于",
        experience: "经历",
        projects: "项目",
        publications: "论文",
        skills: "技能",
        contact: "联系",
      },
      sections: {
        contactTitle: "联系",
        aboutKicker: "About",
        aboutTitle: "关于我",
        updatesKicker: "Updates",
        updatesTitle: "近期动态",
        experienceKicker: "Experience",
        experienceTitle: "经历",
        projectsKicker: "Projects",
        projectsTitle: "代表项目",
        publicationsKicker: "Publications",
        publicationsTitle: "论文",
        skillsKicker: "Skills",
        skillsTitle: "技能栈",
        educationKicker: "Education",
        educationTitle: "教育与证书",
      },
      projectLink: "查看项目",
    },
    links: [
      { label: "电话", text: "133-3103-1854", href: "tel:13331031854" },
      { label: "邮箱", text: "longchunlai@lsec.cc.ac.cn", href: "mailto:longchunlai@lsec.cc.ac.cn" },
      { label: "GitHub", text: "github.com/ysMiluz", href: "https://github.com/ysMiluz" },
      { label: "城市", text: "北京 · 海淀", href: "" },
    ],
    about: [
      "我目前是中国科学院数学与系统科学研究院计算数学博士候选人，研究方向集中在电磁散射、电磁波传播、时域有限差分算法以及数值算法的收敛性分析。",
      "我熟悉 C/C++、Python、Linux、MPI 以及 LAPACK/ScaLAPACK、PETSc 等数值计算库，关注把复杂数值方法工程化为可扩展、可验证的高性能计算程序。",
    ],
    highlights: [
      { label: "博士方向", value: "计算数学" },
      { label: "研究重点", value: "FDTD / ADE-FDTD" },
      { label: "工程能力", value: "C/C++ / Python / MPI" },
    ],
    updates: [
      { date: "2026.07", text: "预计完成中国科学院数学与系统科学研究院计算数学博士阶段学习。" },
      { date: "2025.12", text: "完成百度移动生态数据研发部数据策略组策略算法实习，参与 AlphaEvolve 程序进化框架在异常站点识别中的应用。" },
      { date: "2025", text: "准备 Maxwell-Drude、Maxwell-Lorentz 与 HOMO-FDTD 相关收敛性分析和多尺度模拟论文。" },
    ],
    experience: [
      {
        time: "2025.09 - 2025.12",
        title: "策略算法实习生 / 百度",
        meta: "移动生态数据研发部 · 数据策略组",
        points: [
          "深入研读 Google DeepMind 的 AlphaEvolve 程序进化框架，梳理 Program Database、LLM Ensemble、Prompt Sampler、Evaluator Pool 等核心模块。",
          "将程序进化框架应用于域名异常检测和钓鱼站点识别任务，围绕全量站点数据优化检测模型。",
          "最终域名异常检测识别精确率达到 98%。",
        ],
      },
      {
        time: "2021.09 - 2026.07",
        title: "博士研究生 / 中国科学院数学与系统科学研究院",
        meta: "计算数学 · GPA: 3.73",
        points: [
          "研究方向覆盖电磁散射、电磁波传播、FDTD/ADE-FDTD 算法、均匀化方法和收敛性分析。",
          "主修最优化计算方法、偏微分方程、微分方程数值解、有限元方法、数值线性代数、并行计算等课程。",
          "独立开发并验证多个时域有限差分算法，积累系统的收敛性分析和算法调优经验。",
        ],
      },
    ],
    projects: [
      {
        type: "博士科研",
        title: "电磁模型的跨尺度算法研究",
        summary:
          "面向周期复合材料和周期结构的电磁散射问题，开发 HOMO-FDTD 求解框架，将周期单胞、均匀化方程和 FDTD 结合，在保持物理一致性的同时减少网格与计算量。",
        tags: ["HOMO-FDTD", "均匀化", "电磁散射"],
        link: "#",
      },
      {
        type: "博士科研",
        title: "等离子体鞘套的电磁波传播相关问题",
        summary:
          "围绕 Maxwell-Drude 与 Maxwell-Lorentz 系统，分析 ADE-FDTD 下三种算法格式的时空收敛性质，给出误差估计和稳定性相关理论依据。",
        tags: ["ADE-FDTD", "Maxwell-Drude", "收敛性分析"],
        link: "#",
      },
      {
        type: "实习项目",
        title: "AlphaEvolve 异常站点识别应用",
        summary:
          "将程序进化框架应用于域名异常检测和钓鱼站点识别，结合全量站点数据进行模型优化，最终识别精确率达到 98%。",
        tags: ["AlphaEvolve", "LLM", "异常检测"],
        link: "#",
      },
      {
        type: "技术能力",
        title: "数值计算库与并行计算实践",
        summary:
          "掌握 LAPACK/ScaLAPACK、PETSc、BLACS 与 MPI 的接口和核心机制，理解矩阵描述符、进程网格、工作空间查询以及常用并行数值计算模式。",
        tags: ["LAPACK", "PETSc", "MPI"],
        link: "#",
      },
    ],
    publications: [
      "Convergence Analysis of CPDIM1 Scheme for Maxwell-Drude Model, In prep, 2025",
      "Convergence Analysis of CPDIM3 Scheme for Maxwell-Drude Model, In prep, 2025",
      "Convergence Analysis of L-DIM1 Scheme for Maxwell-Lorentz Model, In prep, 2025",
      "Multiscale Electromagnetic Scattering Simulation via HOMO-FDTD: Coupling Unit-Cell Homogenization with Time-Domain FDTD, In prep, 2025",
    ],
    skills: [
      {
        group: "GPU 优化",
        items: ["Flash Attention", "tiling", "register blocking", "warp-specialization", "CUDA kernel", "shared memory"],
      },
      {
        group: "数值计算库",
        items: ["LAPACK/ScaLAPACK", "PETSc", "BLACS", "DGEQRF", "PDGESV", "LWORK/TSIZE"],
      },
      {
        group: "编程与并行",
        items: ["C/C++", "Python", "Linux", "MPI", "CUDA", "Grid-Stride Loop"],
      },
      {
        group: "数值算法",
        items: ["有限元", "FDTD", "ADE-FDTD", "时域有限差分", "收敛性分析", "均匀化方法"],
      },
    ],
    education: [
      {
        time: "2021.09 - 2026.07",
        title: "中国科学院数学与系统科学研究院 / 计算数学博士",
        meta: "GPA: 3.73",
        points: ["主修最优化计算方法、偏微分方程概论、微分方程数值解、有限元方法、凸分析、数值线性代数、并行计算等。"],
      },
      {
        time: "2017.09 - 2021.06",
        title: "石河子大学 / 数学与应用数学本科",
        meta: "GPA: 3.68",
        points: ["主修数学分析、高等代数、解析几何、抽象代数、概率论与数理统计、常微分方程、复变函数、数学建模等。"],
      },
      {
        time: "证书与奖项",
        title: "数学竞赛、英语证书与教师资格",
        meta: "竞赛一等奖 / CET-4 / CET-6 / 教师资格证",
        points: ["第十一届、第十二届全国大学生数学竞赛数学 B 类一等奖，数学建模竞赛校级一等奖，校级奖学金等。"],
      },
    ],
  },
  en: {
    title: "Chunlai Long | Resume",
    description:
      "Resume website of Chunlai Long, covering computational mathematics, numerical algorithms, high-performance computing, research experience, internship experience, and contact information.",
    photoAlt: "Portrait of Chunlai Long",
    name: "Chunlai Long",
    role: "Ph.D. Candidate in Computational Mathematics / Numerical Algorithms and HPC",
    location: "Haidian, Beijing",
    availability: "Academy of Mathematics and Systems Science, CAS",
    footer: "Last updated: 2026",
    email: "longchunlai@lsec.cc.ac.cn",
    focus: ["Computational Mathematics", "Electromagnetic Scattering", "FDTD / ADE-FDTD", "High-Performance Computing"],
    ui: {
      navLabel: "Main navigation",
      profileLabel: "Profile",
      languageLabel: "Language switcher",
      actions: {
        skip: "Skip to content",
        email: "Email me",
        projects: "View projects",
      },
      nav: {
        about: "About",
        experience: "Experience",
        projects: "Projects",
        publications: "Publications",
        skills: "Skills",
        contact: "Contact",
      },
      sections: {
        contactTitle: "Contact",
        aboutKicker: "About",
        aboutTitle: "About Me",
        updatesKicker: "Updates",
        updatesTitle: "Recent Updates",
        experienceKicker: "Experience",
        experienceTitle: "Experience",
        projectsKicker: "Projects",
        projectsTitle: "Selected Projects",
        publicationsKicker: "Publications",
        publicationsTitle: "Publications",
        skillsKicker: "Skills",
        skillsTitle: "Technical Skills",
        educationKicker: "Education",
        educationTitle: "Education & Certificates",
      },
      projectLink: "View project",
    },
    links: [
      { label: "Phone", text: "133-3103-1854", href: "tel:13331031854" },
      { label: "Email", text: "longchunlai@lsec.cc.ac.cn", href: "mailto:longchunlai@lsec.cc.ac.cn" },
      { label: "GitHub", text: "github.com/ysMiluz", href: "https://github.com/ysMiluz" },
      { label: "Location", text: "Haidian, Beijing", href: "" },
    ],
    about: [
      "I am a Ph.D. candidate in Computational Mathematics at the Academy of Mathematics and Systems Science, Chinese Academy of Sciences. My research focuses on electromagnetic scattering, wave propagation, finite-difference time-domain methods, and convergence analysis of numerical algorithms.",
      "I work with C/C++, Python, Linux, MPI, LAPACK/ScaLAPACK, and PETSc, with an emphasis on turning rigorous numerical methods into scalable, verifiable high-performance computing programs.",
    ],
    highlights: [
      { label: "Ph.D. Field", value: "Computational Mathematics" },
      { label: "Research Focus", value: "FDTD / ADE-FDTD" },
      { label: "Engineering", value: "C/C++ / Python / MPI" },
    ],
    updates: [
      { date: "2026.07", text: "Expected to complete the Ph.D. program in Computational Mathematics at AMSS, CAS." },
      { date: "2025.12", text: "Completed a strategy algorithm internship at Baidu, applying the AlphaEvolve program-evolution framework to abnormal-site detection." },
      { date: "2025", text: "Preparing manuscripts on Maxwell-Drude, Maxwell-Lorentz, HOMO-FDTD, convergence analysis, and multiscale simulation." },
    ],
    experience: [
      {
        time: "2025.09 - 2025.12",
        title: "Strategy Algorithm Intern / Baidu",
        meta: "Mobile Ecosystem Data R&D Department · Data Strategy Group",
        points: [
          "Studied Google DeepMind's AlphaEvolve program-evolution framework, including Program Database, LLM Ensemble, Prompt Sampler, and Evaluator Pool.",
          "Applied the program-evolution framework to domain anomaly detection and phishing-site identification, optimizing models on full-site data.",
          "Reached 98% precision in domain anomaly detection.",
        ],
      },
      {
        time: "2021.09 - 2026.07",
        title: "Ph.D. Candidate / Academy of Mathematics and Systems Science, CAS",
        meta: "Computational Mathematics · GPA: 3.73",
        points: [
          "Research covers electromagnetic scattering, wave propagation, FDTD/ADE-FDTD algorithms, homogenization methods, and convergence analysis.",
          "Completed coursework in optimization methods, partial differential equations, numerical solutions of differential equations, finite element methods, numerical linear algebra, and parallel computing.",
          "Developed and validated multiple finite-difference time-domain algorithms with systematic experience in convergence analysis and algorithm tuning.",
        ],
      },
    ],
    projects: [
      {
        type: "Ph.D. Research",
        title: "Multiscale Algorithms for Electromagnetic Models",
        summary:
          "Developed a HOMO-FDTD framework for electromagnetic scattering in periodic composites and structures, coupling unit-cell modeling, homogenized equations, and FDTD to reduce grid size and computational cost while preserving physical consistency.",
        tags: ["HOMO-FDTD", "Homogenization", "Electromagnetic Scattering"],
        link: "#",
      },
      {
        type: "Ph.D. Research",
        title: "Electromagnetic Wave Propagation in Plasma Sheaths",
        summary:
          "Analyzed temporal-spatial convergence for three ADE-FDTD schemes under Maxwell-Drude and Maxwell-Lorentz systems, deriving error estimates and theoretical guidance related to stability.",
        tags: ["ADE-FDTD", "Maxwell-Drude", "Convergence Analysis"],
        link: "#",
      },
      {
        type: "Internship Project",
        title: "AlphaEvolve for Abnormal-Site Detection",
        summary:
          "Applied a program-evolution framework to domain anomaly detection and phishing-site identification, using full-site data to optimize the detection model and reaching 98% precision.",
        tags: ["AlphaEvolve", "LLM", "Anomaly Detection"],
        link: "#",
      },
      {
        type: "Technical Practice",
        title: "Numerical Libraries and Parallel Computing",
        summary:
          "Worked with LAPACK/ScaLAPACK, PETSc, BLACS, and MPI interfaces and mechanisms, including matrix descriptors, process grids, workspace queries, and common patterns in parallel numerical computing.",
        tags: ["LAPACK", "PETSc", "MPI"],
        link: "#",
      },
    ],
    publications: [
      "Convergence Analysis of CPDIM1 Scheme for Maxwell-Drude Model, In prep, 2025",
      "Convergence Analysis of CPDIM3 Scheme for Maxwell-Drude Model, In prep, 2025",
      "Convergence Analysis of L-DIM1 Scheme for Maxwell-Lorentz Model, In prep, 2025",
      "Multiscale Electromagnetic Scattering Simulation via HOMO-FDTD: Coupling Unit-Cell Homogenization with Time-Domain FDTD, In prep, 2025",
    ],
    skills: [
      {
        group: "GPU Optimization",
        items: ["Flash Attention", "tiling", "register blocking", "warp-specialization", "CUDA kernel", "shared memory"],
      },
      {
        group: "Numerical Libraries",
        items: ["LAPACK/ScaLAPACK", "PETSc", "BLACS", "DGEQRF", "PDGESV", "LWORK/TSIZE"],
      },
      {
        group: "Programming & Parallelism",
        items: ["C/C++", "Python", "Linux", "MPI", "CUDA", "Grid-Stride Loop"],
      },
      {
        group: "Numerical Algorithms",
        items: ["Finite element methods", "FDTD", "ADE-FDTD", "finite differences", "convergence analysis", "homogenization"],
      },
    ],
    education: [
      {
        time: "2021.09 - 2026.07",
        title: "Academy of Mathematics and Systems Science, CAS / Ph.D. in Computational Mathematics",
        meta: "GPA: 3.73",
        points: [
          "Coursework includes optimization methods, partial differential equations, numerical solutions of differential equations, finite element methods, convex analysis, numerical linear algebra, and parallel computing.",
        ],
      },
      {
        time: "2017.09 - 2021.06",
        title: "Shihezi University / B.S. in Mathematics and Applied Mathematics",
        meta: "GPA: 3.68",
        points: [
          "Coursework includes mathematical analysis, advanced algebra, analytic geometry, abstract algebra, probability and statistics, ordinary differential equations, complex functions, and mathematical modeling.",
        ],
      },
      {
        time: "Certificates & Awards",
        title: "Mathematics Competitions, English Certificates, and Teacher Qualification",
        meta: "Competition awards / CET-4 / CET-6 / Teacher qualification",
        points: [
          "First prizes in the 11th and 12th National College Student Mathematics Competition, Mathematics B category; university-level first prize in mathematical modeling; university scholarship.",
        ],
      },
    ],
  },
};

const q = (selector) => document.querySelector(selector);
const qa = (selector) => [...document.querySelectorAll(selector)];
const availableLanguages = Object.keys(resumeContent);

let currentLanguage = readInitialLanguage();

function setStaticText(resume) {
  qa("[data-i18n]").forEach((node) => {
    const value = getNestedValue(resume.ui, node.dataset.i18n);
    if (value) {
      node.textContent = value;
    }
  });

  q(".main-nav")?.setAttribute("aria-label", resume.ui.navLabel);
  q(".profile-panel")?.setAttribute("aria-label", resume.ui.profileLabel);
  q(".language-toggle")?.setAttribute("aria-label", resume.ui.languageLabel);
  q(".profile-photo")?.setAttribute("alt", resume.photoAlt);

  const description = q('meta[name="description"]');
  if (description) {
    description.setAttribute("content", resume.description);
  }
}

function setProfileText(resume) {
  qa("[data-profile]").forEach((node) => {
    const key = node.dataset.profile;
    if (key === "emailLink") {
      node.href = `mailto:${resume.email}`;
      return;
    }
    node.textContent = resume[key] ?? "";
  });

  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
  document.title = resume.title;
}

function renderTags(target, items) {
  target.innerHTML = items.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("");
}

function renderLinks(target, links) {
  target.innerHTML = links
    .map((link) => {
      const value = link.href
        ? renderAnchor(link.href, link.text)
        : `<span>${escapeHtml(link.text)}</span>`;

      return `<li><span>${escapeHtml(link.label)}</span>${value}</li>`;
    })
    .join("");
}

function renderAnchor(href, text) {
  const target = externalTarget(href);
  const rel = target === "_blank" ? ' rel="noreferrer"' : "";
  return `<a href="${escapeAttr(href)}" target="${target}"${rel}>${escapeHtml(text)}</a>`;
}

function renderAbout(target, paragraphs) {
  target.innerHTML = paragraphs.map((text) => `<p>${escapeHtml(text)}</p>`).join("");
}

function renderHighlights(target, items) {
  target.innerHTML = items
    .map(
      (item) => `
        <div class="metric-card">
          <dt>${escapeHtml(item.label)}</dt>
          <dd>${escapeHtml(item.value)}</dd>
        </div>
      `
    )
    .join("");
}

function renderUpdates(target, items) {
  target.innerHTML = items
    .map(
      (item) => `
        <li>
          <span class="news-date">${escapeHtml(item.date)}</span>
          <span>${escapeHtml(item.text)}</span>
        </li>
      `
    )
    .join("");
}

function renderTimeline(target, items) {
  target.innerHTML = items
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-time">${escapeHtml(item.time)}</div>
          <div class="timeline-body">
            <h3>${escapeHtml(item.title)}</h3>
            <p class="timeline-meta">${escapeHtml(item.meta)}</p>
            <ul class="timeline-points">
              ${item.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
            </ul>
          </div>
        </article>
      `
    )
    .join("");
}

function renderProjects(target, items, projectLinkText) {
  target.innerHTML = items
    .map(
      (item) => `
        <article class="project-card">
          <header>
            <span class="project-type">${escapeHtml(item.type)}</span>
            <h3>${escapeHtml(item.title)}</h3>
          </header>
          <p>${escapeHtml(item.summary)}</p>
          ${item.link && item.link !== "#" ? renderAnchor(item.link, projectLinkText) : ""}
          <ul class="project-tags">
            ${item.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderPublications(target, items) {
  target.innerHTML = items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderSkills(target, groups) {
  target.innerHTML = groups
    .map(
      (group) => `
        <article class="skill-card">
          <h3>${escapeHtml(group.group)}</h3>
          <ul class="skill-list">
            ${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function externalTarget(href) {
  return href.startsWith("http") ? "_blank" : "_self";
}

function getNestedValue(source, path) {
  return path.split(".").reduce((value, key) => value?.[key], source);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

function readSavedLanguage() {
  try {
    const saved = localStorage.getItem("resumeLanguage");
    return availableLanguages.includes(saved) ? saved : "";
  } catch {
    return "";
  }
}

function readInitialLanguage() {
  const requested = new URLSearchParams(window.location.search).get("lang");
  if (availableLanguages.includes(requested)) {
    return requested;
  }
  return readSavedLanguage() || "zh";
}

function saveLanguage(language) {
  try {
    localStorage.setItem("resumeLanguage", language);
  } catch {
    // Local files can disable storage in some browser settings.
  }
}

function updateLanguageButtons() {
  qa("[data-lang-button]").forEach((button) => {
    const isActive = button.dataset.langButton === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderResume() {
  const resume = resumeContent[currentLanguage];
  setStaticText(resume);
  setProfileText(resume);
  updateLanguageButtons();
  renderTags(q('[data-list="focus"]'), resume.focus);
  renderLinks(q('[data-list="links"]'), resume.links);
  renderAbout(q('[data-list="about"]'), resume.about);
  renderHighlights(q('[data-list="highlights"]'), resume.highlights);
  renderUpdates(q('[data-list="updates"]'), resume.updates);
  renderTimeline(q('[data-list="experience"]'), resume.experience);
  renderProjects(q('[data-list="projects"]'), resume.projects, resume.ui.projectLink);
  renderPublications(q('[data-list="publications"]'), resume.publications);
  renderSkills(q('[data-list="skills"]'), resume.skills);
  renderTimeline(q('[data-list="education"]'), resume.education);
}

qa("[data-lang-button]").forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.dataset.langButton;
    if (!availableLanguages.includes(language) || language === currentLanguage) {
      return;
    }
    currentLanguage = language;
    saveLanguage(language);
    renderResume();
  });
});

renderResume();
