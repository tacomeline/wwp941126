document.addEventListener('DOMContentLoaded', () => {
  
  // 1. 建立精美的 Toast 提示容器
  const toastContainer = document.createElement('div');
  toastContainer.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;
  document.body.appendChild(toastContainer);

  // 2. 核心通知函式
  function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
      background: linear-gradient(45deg, #161f30, #1e293b);
      color: #00f2fe;
      border-left: 4px solid #00f2fe;
      padding: 15px 25px;
      border-radius: 8px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
      font-weight: 500;
      transform: translateX(120%);
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.2);
    `;
    toast.innerText = message;
    toastContainer.appendChild(toast);

    // 觸發進場動畫
    setTimeout(() => toast.style.transform = 'translateX(0)', 50);

    // 3秒後自動退場
    setTimeout(() => {
      toast.style.transform = 'translateX(120%)';
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  // 3. 點擊技能卡片互動數據
  const skillDetails = {
    content: "💡 什麼都不精通！",
    learning: "💡 暐評的學習心得：擅長運用AI製作 ADDIE 模型企劃數位教材，重視製作出能讓朝陽教授意見不要那麼多的作品！",
    tech: "💡 法克 AI超屌的啦 ！"
  };

  // 4. 綁定技能卡片點擊事件
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(card => {
    card.addEventListener('click', () => {
      const skillType = card.getAttribute('data-skill');
      const text = skillDetails[skillType] || "點擊了技能卡片！";
      showToast(text);
    });
  });

});