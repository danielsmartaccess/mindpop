import './style.css'

// --- Translations ---
const translations = {
  en: {
    dashboard: 'Dashboard',
    planners: 'Planners',
    todo: 'To-Do',
    finance: 'Finance',
    mood: 'Mood',
    ai_assistant: 'AI Assistant',
    free_plan: 'Free Plan',
    upgrade_btn: 'Upgrade to PRO',
    welcome_title: 'Hello, Mind Popper! 🧠',
    welcome_subtitle: "Let's organize your thoughts and your day.",
    tasks_today: 'Tasks Today',
    tasks_stat: '2 pending, 3 completed',
    balance: 'Balance',
    balance_stat: '+R$ 200 this week',
    mood_happy: '😊 Happy',
    daily: 'Daily',
    weekly: 'Weekly',
    monthly: 'Monthly',
    annual: 'Annual',
    schedule: 'Schedule',
    morning_routine: 'Morning Routine',
    work_study: 'Work / Study',
    lunch: 'Lunch',
    daily_journal: 'Daily Journal',
    journal_subtitle: 'Thoughts, gratitude, or just a brain dump.',
    journal_placeholder: 'Today I felt...',
    save_entry: 'Save Entry',
    weekly_hint: 'Click on a day to add a note',
    sun: 'Sun', mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu', fri: 'Fri', sat: 'Sat',
    add_task_placeholder: 'Add a new task...',
    total_balance: 'Total Balance',
    add_transaction: 'Add Transaction',
    mood_question: 'How are you feeling today?',
    ai_welcome: "Hello! I'm your Mind Pop AI. How can I help you organize your life today?",
    ai_placeholder: 'Ask me anything...'
  },
  pt: {
    dashboard: 'Painel',
    planners: 'Planejadores',
    todo: 'Tarefas',
    finance: 'Finanças',
    mood: 'Humor',
    ai_assistant: 'Assistente IA',
    free_plan: 'Plano Grátis',
    upgrade_btn: 'Mudar para PRO',
    welcome_title: 'Olá, Mind Popper! 🧠',
    welcome_subtitle: 'Vamos organizar seus pensamentos e seu dia.',
    tasks_today: 'Tarefas Hoje',
    tasks_stat: '2 pendentes, 3 concluídas',
    balance: 'Saldo',
    balance_stat: '+R$ 200 esta semana',
    mood_happy: '😊 Feliz',
    daily: 'Diário',
    weekly: 'Semanal',
    monthly: 'Mensal',
    annual: 'Anual',
    schedule: 'Agenda',
    morning_routine: 'Rotina Matinal',
    work_study: 'Trabalho / Estudo',
    lunch: 'Almoço',
    daily_journal: 'Diário Pessoal',
    journal_subtitle: 'Pensamentos, gratidão ou apenas um desabafo.',
    journal_placeholder: 'Hoje eu senti...',
    save_entry: 'Salvar',
    weekly_hint: 'Clique em um dia para adicionar uma nota',
    sun: 'Dom', mon: 'Seg', tue: 'Ter', wed: 'Qua', thu: 'Qui', fri: 'Sex', sat: 'Sáb',
    add_task_placeholder: 'Adicionar nova tarefa...',
    total_balance: 'Saldo Total',
    add_transaction: 'Adicionar Transação',
    mood_question: 'Como você está se sentindo hoje?',
    ai_welcome: 'Olá! Sou sua IA Mind Pop. Como posso ajudar a organizar sua vida hoje?',
    ai_placeholder: 'Pergunte-me qualquer coisa...'
  },
  es: {
    dashboard: 'Tablero',
    planners: 'Planificadores',
    todo: 'Tareas',
    finance: 'Finanzas',
    mood: 'Ánimo',
    ai_assistant: 'Asistente IA',
    free_plan: 'Plan Gratis',
    upgrade_btn: 'Mejorar a PRO',
    welcome_title: '¡Hola, Mind Popper! 🧠',
    welcome_subtitle: 'Organicemos tus pensamientos y tu día.',
    tasks_today: 'Tareas Hoy',
    tasks_stat: '2 pendientes, 3 completadas',
    balance: 'Balance',
    balance_stat: '+R$ 200 esta semana',
    mood_happy: '😊 Feliz',
    daily: 'Diario',
    weekly: 'Semanal',
    monthly: 'Mensual',
    annual: 'Anual',
    schedule: 'Horario',
    morning_routine: 'Rutina Matutina',
    work_study: 'Trabajo / Estudio',
    lunch: 'Almuerzo',
    daily_journal: 'Diario Personal',
    journal_subtitle: 'Pensamientos, gratitud o simplemente desahogo.',
    journal_placeholder: 'Hoy me sentí...',
    save_entry: 'Guardar',
    weekly_hint: 'Haz clic en un día para agregar una nota',
    sun: 'Dom', mon: 'Lun', tue: 'Mar', wed: 'Mié', thu: 'Jue', fri: 'Vie', sat: 'Sáb',
    add_task_placeholder: 'Añadir nueva tarea...',
    total_balance: 'Balance Total',
    add_transaction: 'Añadir Transacción',
    mood_question: '¿Cómo te sientes hoy?',
    ai_welcome: '¡Hola! Soy tu IA Mind Pop. ¿Cómo puedo ayudarte a organizar tu vida hoy?',
    ai_placeholder: 'Pregúntame lo que sea...'
  },
  fr: {
    dashboard: 'Tableau de bord',
    planners: 'Planificateurs',
    todo: 'À faire',
    finance: 'Finance',
    mood: 'Humeur',
    ai_assistant: 'Assistant IA',
    free_plan: 'Plan Gratuit',
    upgrade_btn: 'Passer à PRO',
    welcome_title: 'Bonjour, Mind Popper! 🧠',
    welcome_subtitle: 'Organisons vos pensées et votre journée.',
    tasks_today: "Tâches d'aujourd'hui",
    tasks_stat: '2 en attente, 3 terminées',
    balance: 'Solde',
    balance_stat: '+R$ 200 cette semaine',
    mood_happy: '😊 Heureux',
    daily: 'Quotidien',
    weekly: 'Hebdomadaire',
    monthly: 'Mensuel',
    annual: 'Annuel',
    schedule: 'Emploi du temps',
    morning_routine: 'Routine matinale',
    work_study: 'Travail / Étude',
    lunch: 'Déjeuner',
    daily_journal: 'Journal intime',
    journal_subtitle: 'Pensées, gratitude ou simplement un déversoir.',
    journal_placeholder: "Aujourd'hui, je me suis senti...",
    save_entry: 'Enregistrer',
    weekly_hint: 'Cliquez sur un jour pour ajouter une note',
    sun: 'Dim', mon: 'Lun', tue: 'Mar', wed: 'Mer', thu: 'Jeu', fri: 'Ven', sat: 'Sam',
    add_task_placeholder: 'Ajouter une nouvelle tâche...',
    total_balance: 'Solde Total',
    add_transaction: 'Ajouter Transaction',
    mood_question: "Comment vous sentez-vous aujourd'hui?",
    ai_welcome: "Bonjour! Je suis votre IA Mind Pop. Comment puis-je vous aider à organiser votre vie aujourd'hui?",
    ai_placeholder: "Demandez-moi n'importe quoi..."
  },
  he: {
    dashboard: 'לוח בקרה',
    planners: 'יומנים',
    todo: 'משימות',
    finance: 'כספים',
    mood: 'מצב רוח',
    ai_assistant: 'עוזרת אישית',
    free_plan: 'תוכנית חינם',
    upgrade_btn: 'שדרג ל-PRO',
    welcome_title: 'שלום, Mind Popper! 🧠',
    welcome_subtitle: 'בוא נארגן את המחשבות ואת היום שלך.',
    tasks_today: 'משימות להיום',
    tasks_stat: '2 ממתינות, 3 הושלמו',
    balance: 'יתרה',
    balance_stat: '+R$ 200 השבוע',
    mood_happy: '😊 שמח',
    daily: 'יומי',
    weekly: 'שבועי',
    monthly: 'חודשי',
    annual: 'שנתי',
    schedule: 'לוח זמנים',
    morning_routine: 'שגרת בוקר',
    work_study: 'עבודה / לימודים',
    lunch: 'ארוחת צהריים',
    daily_journal: 'יומן אישי',
    journal_subtitle: 'מחשבות, הכרת תודה או סתם פריקת מוח.',
    journal_placeholder: 'היום הרגשתי...',
    save_entry: 'שמור רשומה',
    weekly_hint: 'לחץ על יום כדי להוסיף הערה',
    sun: 'א׳', mon: 'ב׳', tue: 'ג׳', wed: 'ד׳', thu: 'ה׳', fri: 'ו׳', sat: 'ש׳',
    add_task_placeholder: 'הוסף משימה חדשה...',
    total_balance: 'יתרה כוללת',
    add_transaction: 'הוסף עסקה',
    mood_question: 'איך אתה מרגיש היום?',
    ai_welcome: 'שלום! אני ה-AI של Mind Pop. איך אני יכולה לעזור לך לארגן את החיים היום?',
    ai_placeholder: 'שאל אותי כל דבר...'
  }
};

// --- Language Logic ---
const langBtns = document.querySelectorAll('.lang-btn');
let currentLang = 'en';

function updateLanguage(lang) {
  currentLang = lang;

  // Handle RTL for Hebrew
  if (lang === 'he') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.lang = 'he';
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.lang = lang;
  }

  // Update Buttons
  langBtns.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update Text Content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    updateLanguage(btn.getAttribute('data-lang'));
  });
});

// --- Navigation Logic ---
const navLinks = document.querySelectorAll('.nav-links li');
const views = document.querySelectorAll('.view');
const pageTitle = document.getElementById('page-title');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    views.forEach(view => view.classList.remove('active'));
    const targetId = link.getAttribute('data-target');
    document.getElementById(`view-${targetId}`).classList.add('active');

    // Update Title with Translation
    const key = link.querySelector('span').getAttribute('data-i18n');
    if (key && translations[currentLang][key]) {
      pageTitle.textContent = translations[currentLang][key];
    } else {
      pageTitle.textContent = link.querySelector('span').textContent;
    }
  });
});

// --- Planner Tabs Logic ---
const tabBtns = document.querySelectorAll('.tab-btn');
const plannerSections = document.querySelectorAll('.planner-section');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    plannerSections.forEach(s => s.classList.remove('active'));
    const target = btn.getAttribute('data-planner');
    document.getElementById(`planner-${target}`).classList.add('active');
  });
});

// --- Data Store for Monthly Events ---
// Format: { 'YYYY-M-D': [ { id: 1, title: '...', desc: '...' } ] }
const monthlyEvents = {};
let eventIdCounter = 1;

// --- Modal Logic ---
const modal = document.getElementById('planner-modal');
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modal-title');
const modalInput1 = document.getElementById('modal-input-1');
const modalInputTime = document.getElementById('modal-input-time');
const modalInputDesc = document.getElementById('modal-input-desc');
const modalSaveBtn = document.getElementById('modal-save-btn');
const modalExistingList = document.getElementById('modal-existing-list');

let currentContext = null; // 'daily', 'weekly', 'monthly', 'annual'
let currentTargetData = null; // Extra data like date or day index
let isEditing = false;
let editingItem = null; // DOM element or Event Object

function openModal(context, title, showTime = false, data = null, editMode = false, item = null) {
  currentContext = context;
  currentTargetData = data;
  isEditing = editMode;
  editingItem = item;

  modalTitle.textContent = isEditing ? 'Edit Item' : title;
  modal.style.display = 'flex';
  modalInputTime.style.display = showTime ? 'block' : 'none';
  modalExistingList.innerHTML = ''; // Clear list

  // Pre-fill if editing
  if (isEditing && item) {
    if (context === 'daily') {
      modalInput1.value = item.querySelector('.event').textContent;
      modalInputTime.value = item.querySelector('.time').textContent;
    } else if (context === 'weekly' || context === 'annual') {
      modalInput1.value = item.querySelector('span').textContent;
    } else if (context === 'monthly') {
      // item is the event object
      modalInput1.value = item.title;
    }
  } else {
    modalInput1.value = '';
    modalInputDesc.value = '';
    modalInputTime.value = '';
  }

  // For Monthly: List existing events if adding/viewing a day
  if (context === 'monthly' && !isEditing) {
    const dateKey = data; // 'YYYY-M-D'
    const events = monthlyEvents[dateKey] || [];
    if (events.length > 0) {
      events.forEach(ev => {
        const li = document.createElement('li');
        li.className = 'modal-event-item';
        li.innerHTML = `
          <span>${ev.title}</span>
          <div class="actions">
            <button class="icon-btn-small edit-ev"><i class="fa-solid fa-pen"></i></button>
            <button class="icon-btn-small delete-ev"><i class="fa-solid fa-trash"></i></button>
          </div>
        `;

        li.querySelector('.edit-ev').addEventListener('click', () => {
          openModal('monthly', 'Edit Event', false, dateKey, true, ev);
        });

        li.querySelector('.delete-ev').addEventListener('click', () => {
          if (confirm('Delete this event?')) {
            const idx = monthlyEvents[dateKey].indexOf(ev);
            if (idx > -1) monthlyEvents[dateKey].splice(idx, 1);
            renderCalendar(currentDate); // Re-render dots
            openModal('monthly', title, false, data); // Refresh modal
          }
        });

        modalExistingList.appendChild(li);
      });
    }
  }

  modalInput1.focus();
}

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

modalSaveBtn.addEventListener('click', () => {
  const val1 = modalInput1.value.trim();
  const time = modalInputTime.value;

  if (val1) {
    if (isEditing) {
      // Update Logic
      if (currentContext === 'daily') {
        editingItem.querySelector('.event').textContent = val1;
        editingItem.querySelector('.time').textContent = time || '--:--';
      } else if (currentContext === 'weekly' || currentContext === 'annual') {
        editingItem.querySelector('span').textContent = val1;
      } else if (currentContext === 'monthly') {
        // Update object
        editingItem.title = val1;
        renderCalendar(currentDate);
      }
    } else {
      // Create Logic
      if (currentContext === 'daily') {
        addDailyItem(val1, time);
      } else if (currentContext === 'weekly') {
        addWeeklyItem(val1, currentTargetData);
      } else if (currentContext === 'monthly') {
        addMonthlyItem(val1, currentTargetData);
      } else if (currentContext === 'annual') {
        addAnnualItem(val1, currentTargetData);
      }
    }
    modal.style.display = 'none';
  }
});

// --- Helper: Create Action Buttons ---
function createActionButtons(onEdit, onDelete) {
  const div = document.createElement('div');
  div.className = 'item-actions';

  const editBtn = document.createElement('button');
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
  editBtn.className = 'action-btn edit';
  editBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    onEdit();
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteBtn.className = 'action-btn delete';
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (confirm('Delete this item?')) onDelete();
  });

  div.appendChild(editBtn);
  div.appendChild(deleteBtn);
  return div;
}

// --- Daily Planner Logic ---
const dailyList = document.getElementById('daily-schedule-list');
document.getElementById('add-daily-btn').addEventListener('click', () => {
  openModal('daily', 'Add Schedule Item', true);
});

function addDailyItem(title, time) {
  const li = document.createElement('li');
  li.innerHTML = `<span class="time">${time || '--:--'}</span> <span class="event">${title}</span>`;

  const actions = createActionButtons(
    () => openModal('daily', 'Edit Item', true, null, true, li),
    () => li.remove()
  );

  li.appendChild(actions);
  dailyList.appendChild(li);
}

// --- Weekly Planner Logic ---
const weeklyGrid = document.getElementById('weekly-grid');
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Init Weekly Grid
daysOfWeek.forEach((day, index) => {
  const col = document.createElement('div');
  col.className = 'day-col';
  col.innerHTML = `<h4>${day}</h4><div class="day-content" id="week-col-${index}"></div>`;
  col.addEventListener('click', (e) => {
    if (e.target === col || e.target.tagName === 'H4' || e.target.classList.contains('day-content')) {
      openModal('weekly', `Add to ${day}`, false, index);
    }
  });
  weeklyGrid.appendChild(col);
});

function addWeeklyItem(text, dayIndex) {
  const container = document.getElementById(`week-col-${dayIndex}`);
  const div = document.createElement('div');
  div.className = 'planner-item';
  div.innerHTML = `<span>${text}</span>`;

  const actions = createActionButtons(
    () => openModal('weekly', 'Edit Item', false, null, true, div),
    () => div.remove()
  );

  div.appendChild(actions);
  container.appendChild(div);
}

// --- Monthly Planner Logic ---
const calendarGrid = document.getElementById('calendar-grid');
const currentMonthEl = document.getElementById('current-month');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
let currentDate = new Date();

function renderCalendar(date) {
  calendarGrid.innerHTML = '';
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDay = firstDay.getDay();

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  currentMonthEl.textContent = `${monthNames[month]} ${year}`;

  for (let i = 0; i < startingDay; i++) {
    const emptyDay = document.createElement('div');
    emptyDay.className = 'calendar-day empty';
    calendarGrid.appendChild(emptyDay);
  }

  const today = new Date();
  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement('div');
    day.className = 'calendar-day';
    if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
      day.classList.add('today');
    }

    // Render Dots
    const dateKey = `${year}-${month}-${i}`;
    const events = monthlyEvents[dateKey] || [];
    let dotsHtml = '';
    events.forEach(ev => {
      dotsHtml += `<div class="event-dot" title="${ev.title}"></div>`;
    });

    day.innerHTML = `<span class="date-num">${i}</span><div class="day-events">${dotsHtml}</div>`;

    day.addEventListener('click', () => {
      openModal('monthly', `Events for ${i} ${monthNames[month]}`, false, dateKey);
    });

    calendarGrid.appendChild(day);
  }
}

renderCalendar(currentDate);

prevMonthBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});
nextMonthBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

function addMonthlyItem(text, dateKey) {
  if (!monthlyEvents[dateKey]) monthlyEvents[dateKey] = [];
  monthlyEvents[dateKey].push({ id: eventIdCounter++, title: text });
  renderCalendar(currentDate);
}

// --- Annual Planner Logic ---
const annualGrid = document.getElementById('annual-grid');
const monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

monthNamesShort.forEach((m, index) => {
  const div = document.createElement('div');
  div.className = 'mini-month';
  div.innerHTML = `<h4>${m}</h4><ul class="annual-list" id="annual-month-${index}"></ul>`;
  div.addEventListener('click', (e) => {
    if (e.target === div || e.target.tagName === 'H4' || e.target.classList.contains('annual-list')) {
      openModal('annual', `Goal for ${m}`, false, index);
    }
  });
  annualGrid.appendChild(div);
});

function addAnnualItem(text, monthIndex) {
  const targetList = document.getElementById(`annual-month-${monthIndex}`);
  const li = document.createElement('li');
  li.innerHTML = `<span>${text}</span>`;

  const actions = createActionButtons(
    () => openModal('annual', 'Edit Goal', false, null, true, li),
    () => li.remove()
  );

  li.appendChild(actions);
  targetList.appendChild(li);
}

// --- To-Do List Logic ---
const taskInput = document.getElementById('new-task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function addTask() {
  const text = taskInput.value.trim();
  if (text) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
      <input type="checkbox">
      <span>${text}</span>
      <button class="icon-btn" style="margin-left: auto; color: var(--danger-color); border: none;"><i class="fa-solid fa-trash"></i></button>
    `;
    li.querySelector('button').addEventListener('click', () => li.remove());
    li.querySelector('input').addEventListener('change', (e) => {
      if (e.target.checked) {
        li.classList.add('completed');
        li.style.transition = 'all 0.5s ease';
        li.style.opacity = '0';
        li.style.transform = 'translateX(50px)';
        setTimeout(() => li.remove(), 500);
      } else {
        li.classList.remove('completed');
      }
    });
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') addTask(); });

// --- Journal Logic ---
document.getElementById('save-journal').addEventListener('click', () => {
  const val = document.getElementById('daily-journal').value;
  if (val) { alert('Journal saved!'); document.getElementById('daily-journal').value = ''; }
});

// --- Mood Logic ---
const moodBtns = document.querySelectorAll('.mood-btn');
const moodDisplay = document.querySelector('.mood-display');
moodBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const mood = btn.getAttribute('data-mood');
    moodBtns.forEach(b => b.style.transform = 'scale(1)');
    btn.style.transform = 'scale(1.2)';
    if (moodDisplay) moodDisplay.textContent = getMoodEmoji(mood) + ' ' + capitalize(mood);
  });
});

function getMoodEmoji(mood) {
  const map = { 'rad': '🤩', 'happy': '😊', 'neutral': '😐', 'sad': '🙁', 'awful': '😵' };
  return map[mood] || '😊';
}
function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }

// --- Chat Logic ---
const chatInput = document.getElementById('ai-input');
const sendAiBtn = document.getElementById('send-ai-btn');
const chatMessages = document.getElementById('chat-messages');

function sendMsg() {
  const text = chatInput.value.trim();
  if (text) {
    const userMsg = document.createElement('div');
    userMsg.className = 'message user';
    userMsg.innerHTML = `<div class="bubble">${text}</div>`;
    chatMessages.appendChild(userMsg);
    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
    setTimeout(() => {
      const botMsg = document.createElement('div');
      botMsg.className = 'message bot';
      botMsg.innerHTML = `<div class="bubble">Thinking about "${text}"...</div>`;
      chatMessages.appendChild(botMsg);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
  }
}
sendAiBtn.addEventListener('click', sendMsg);
chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMsg(); });

// --- Premium Modal Logic ---
const premiumModal = document.getElementById('premium-modal');
const upgradeBtn = document.getElementById('upgrade-btn');
const closePremium = document.getElementById('close-premium');

upgradeBtn.addEventListener('click', () => {
  premiumModal.style.display = 'flex';
});

closePremium.addEventListener('click', () => {
  premiumModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === premiumModal) {
    premiumModal.style.display = 'none';
  }
});
