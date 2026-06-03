const resume = {
  name: "你的姓名",
  role: "软件开发工程师 / 数据分析 / AI 应用方向",
  location: "中国 · 城市",
  availability: "正在寻找新的机会",
  footer: "最后更新：2026",
  email: "you@example.com",
  focus: ["Web 开发", "数据分析", "AI 应用", "产品工程"],
  links: [
    { label: "邮箱", text: "you@example.com", href: "mailto:you@example.com" },
    { label: "GitHub", text: "github.com/yourname", href: "https://github.com/yourname" },
    { label: "LinkedIn", text: "linkedin.com/in/yourname", href: "https://linkedin.com/in/yourname" },
    { label: "城市", text: "中国 · 城市", href: "" },
  ],
  about: [
    "我是一名关注工程质量、业务理解和交付效率的技术从业者。这里可以写 2 到 3 句话，说明你的专业方向、正在做的事情，以及你希望别人从这个页面快速了解到什么。",
    "你可以把这段替换成更具体的版本：例如熟悉前端工程化、后端接口、数据分析、机器学习应用、自动化工具或某个行业场景。重点放在你能解决什么问题，而不只是罗列技术名词。",
  ],
  highlights: [
    { label: "核心方向", value: "工程 + 产品" },
    { label: "代表项目", value: "3+" },
    { label: "常用语言", value: "JS / Python" },
  ],
  updates: [
    { date: "2026.06", text: "上线个人简历网页，整理经历、项目与联系方式。" },
    { date: "2026.05", text: "完善代表项目文档，补充项目背景、职责与结果。" },
    { date: "2026.04", text: "持续学习和实践 AI 应用、自动化工作流与数据分析。" },
  ],
  experience: [
    {
      time: "2024 - 至今",
      title: "职位名称 / 公司或组织",
      meta: "城市 · 团队或业务方向",
      points: [
        "负责某个产品、系统或业务模块的设计与实现，描述你的角色和影响范围。",
        "优化某个流程或指标，例如性能、稳定性、转化率、交付周期或用户体验。",
        "与产品、设计、运营或研究团队协作，把需求转化为可落地的技术方案。",
      ],
    },
    {
      time: "2022 - 2024",
      title: "职位名称 / 公司或组织",
      meta: "城市 · 项目方向",
      points: [
        "参与多个项目从 0 到 1 的实现，沉淀组件、脚本或规范以提高复用效率。",
        "使用数据分析或用户反馈定位问题，并推动迭代。",
      ],
    },
  ],
  projects: [
    {
      type: "个人项目",
      title: "项目名称 A",
      summary: "一句话说明项目解决的问题。再补充你负责的部分，例如前端页面、接口设计、数据处理、部署或性能优化。",
      tags: ["React", "TypeScript", "API"],
      link: "#",
    },
    {
      type: "课程 / 实习项目",
      title: "项目名称 B",
      summary: "描述项目背景、技术方案和最终结果。尽量写出可验证的成果，例如提升了什么、节省了多少时间，或支持了哪些用户流程。",
      tags: ["Python", "Data", "Automation"],
      link: "#",
    },
    {
      type: "开源 / 工具",
      title: "项目名称 C",
      summary: "展示一个工具型或开源型项目。这里适合放 GitHub 链接、在线演示和项目亮点。",
      tags: ["Node.js", "CLI", "Docs"],
      link: "#",
    },
    {
      type: "研究 / 分析",
      title: "项目名称 D",
      summary: "如果你有论文、竞赛、数据分析报告或行业研究，可以放在这里，说明方法和结论。",
      tags: ["Research", "SQL", "Visualization"],
      link: "#",
    },
  ],
  skills: [
    { group: "开发", items: ["JavaScript", "TypeScript", "HTML/CSS", "Node.js", "REST API"] },
    { group: "数据", items: ["Python", "SQL", "Pandas", "可视化", "指标分析"] },
    { group: "工具", items: ["Git", "Docker", "CI/CD", "Figma", "Markdown"] },
  ],
  education: [
    {
      time: "2020 - 2024",
      title: "学校名称 / 专业名称",
      meta: "学位或方向",
      points: ["相关课程、奖项、论文、竞赛或社团经历。"],
    },
    {
      time: "2026",
      title: "证书或培训名称",
      meta: "机构名称",
      points: ["可替换为语言证书、专业认证、竞赛奖项或其他资质。"],
    },
  ],
};

const q = (selector) => document.querySelector(selector);
const qa = (selector) => [...document.querySelectorAll(selector)];

function setProfileText() {
  qa("[data-profile]").forEach((node) => {
    const key = node.dataset.profile;
    if (key === "emailLink") {
      node.href = `mailto:${resume.email}`;
      return;
    }
    node.textContent = resume[key] ?? "";
  });

  document.title = `${resume.name} | 个人简历`;
}

function renderTags(target, items) {
  target.innerHTML = items.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("");
}

function renderLinks(target, links) {
  target.innerHTML = links
    .map((link) => {
      const value = link.href
        ? `<a href="${escapeAttr(link.href)}" target="${externalTarget(link.href)}" rel="noreferrer">${escapeHtml(link.text)}</a>`
        : `<span>${escapeHtml(link.text)}</span>`;

      return `<li><span>${escapeHtml(link.label)}</span>${value}</li>`;
    })
    .join("");
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

function renderProjects(target, items) {
  target.innerHTML = items
    .map(
      (item) => `
        <article class="project-card">
          <header>
            <span class="project-type">${escapeHtml(item.type)}</span>
            <h3>${escapeHtml(item.title)}</h3>
          </header>
          <p>${escapeHtml(item.summary)}</p>
          ${item.link && item.link !== "#" ? `<a href="${escapeAttr(item.link)}" target="${externalTarget(item.link)}" rel="noreferrer">查看项目</a>` : ""}
          <ul class="project-tags">
            ${item.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
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

function renderResume() {
  setProfileText();
  renderTags(q('[data-list="focus"]'), resume.focus);
  renderLinks(q('[data-list="links"]'), resume.links);
  renderAbout(q('[data-list="about"]'), resume.about);
  renderHighlights(q('[data-list="highlights"]'), resume.highlights);
  renderUpdates(q('[data-list="updates"]'), resume.updates);
  renderTimeline(q('[data-list="experience"]'), resume.experience);
  renderProjects(q('[data-list="projects"]'), resume.projects);
  renderSkills(q('[data-list="skills"]'), resume.skills);
  renderTimeline(q('[data-list="education"]'), resume.education);
}

renderResume();
