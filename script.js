/* Local-only guide interactions. This page does not connect to a RENIR device. */
(() => {
  'use strict';
  const messages = {
    en: {
      pageTitle: 'RENIR — Getting started', skip: 'Skip to the instructions', manual: 'Instruction manual', quickStart: 'Quick start', print: 'Print guide',
      heroEyebrow: 'A simple start', heroLineOne: 'Your RENIR.', heroLineTwo: 'Ready to go.', heroDescription: 'From your first power-on to everyday use. Get started in four simple steps.', startGuide: 'Start the guide', heroFootnote: 'One device. Four easy steps.', wearable: 'Wrist-worn device', deviceAlt: 'Three views of the RENIR wristband with a white module and woven strap',
      shortOne: 'Turn it on', shortTwo: 'Open the app', shortThree: 'Calibrate', shortFour: 'Start using RENIR',
      guideEyebrow: 'The essentials', guideTitle: 'A little guidance.\nA simple beginning.', guideDescription: 'Follow the steps below.\nGo at your own pace.',
      titleOne: 'Turn on RENIR', titleTwo: 'Open the app', titleThree: 'Calibrate', titleFour: 'Start using RENIR',
      tabOne: 'Start with your device', tabTwo: 'Continue on your phone', tabThree: 'Get ready for use', tabFour: "You're ready to begin", sidebarNote: 'Keep this guide nearby whenever you need a quick refresher.',
      stepOne: 'Step 01 / 04', stepTwo: 'Step 02 / 04', stepThree: 'Step 03 / 04', stepFour: 'Step 04 / 04',
      bodyOne: 'Turn on your RENIR device and wear it on your wrist.', bodyTwo: 'Open the RENIR app on your phone.', bodyThree: 'Complete the calibration process before you start using RENIR.', bodyFour: 'Once calibration is complete, start using RENIR and view your readings in the app.',
      detailOne: 'Next, have your phone ready.', detailTwo: 'Continue with calibration before you begin.', detailThree: 'Follow the calibration guidance provided with your device and app.', detailFour: "You're ready to go.",
      phoneOpen: 'Your companion app', schematic: 'Illustration', calibrationLabel: 'Ready. Set. Calibrate.', readyLabel: 'All set.', previous: 'Previous', next: 'Next step', restart: 'Start again',
      recapEyebrow: 'At a glance', recapTitle: "That's all it takes.", recapDescription: 'Your quick reminder, whenever you need it.', footerLabel: 'A simple guide to getting started.', footerVersion: 'Quick-start manual · v1.0', backTop: 'Back to top',
      navLabel: 'Main navigation', stepsLabel: 'Instruction steps', languageLabel: 'Language'
    },
    th: {
      pageTitle: 'RENIR — คู่มือเริ่มต้นใช้งาน', skip: 'ข้ามไปยังวิธีใช้งาน', manual: 'คู่มือการใช้งาน', quickStart: 'เริ่มต้นใช้งาน', print: 'พิมพ์คู่มือ',
      heroEyebrow: 'เริ่มต้นได้ง่าย ๆ', heroLineOne: 'RENIR ของคุณ', heroLineTwo: 'พร้อมใช้งานแล้ว', heroDescription: 'ตั้งแต่เปิดเครื่องครั้งแรกจนถึงการใช้งานในแต่ละวัน เริ่มต้นได้ใน 4 ขั้นตอนง่าย ๆ', startGuide: 'ดูวิธีใช้งาน', heroFootnote: 'อุปกรณ์หนึ่งชิ้น กับ 4 ขั้นตอนง่าย ๆ', wearable: 'อุปกรณ์สวมข้อมือ', deviceAlt: 'อุปกรณ์ RENIR สีขาวพร้อมสายข้อมือแบบผ้าทอ แสดงสามมุมมอง',
      shortOne: 'เปิดเครื่อง', shortTwo: 'เปิดแอป', shortThree: 'ปรับเทียบ', shortFour: 'เริ่มใช้งาน RENIR',
      guideEyebrow: 'ขั้นตอนสำคัญ', guideTitle: 'คำแนะนำสั้น ๆ\nเพื่อเริ่มต้นอย่างมั่นใจ', guideDescription: 'ทำตามขั้นตอนด้านล่าง\nทีละขั้นตอน ไม่ต้องรีบ',
      titleOne: 'เปิดเครื่อง RENIR', titleTwo: 'เปิดแอป', titleThree: 'ปรับเทียบอุปกรณ์', titleFour: 'เริ่มใช้งาน RENIR',
      tabOne: 'เริ่มจากอุปกรณ์ของคุณ', tabTwo: 'ทำต่อบนโทรศัพท์', tabThree: 'เตรียมให้พร้อมใช้งาน', tabFour: 'พร้อมเริ่มใช้งานแล้ว', sidebarNote: 'เก็บคู่มือนี้ไว้เปิดดูได้ทุกครั้งที่ต้องการทบทวนวิธีใช้งาน',
      stepOne: 'ขั้นตอนที่ 01 / 04', stepTwo: 'ขั้นตอนที่ 02 / 04', stepThree: 'ขั้นตอนที่ 03 / 04', stepFour: 'ขั้นตอนที่ 04 / 04',
      bodyOne: 'เปิดเครื่อง RENIR แล้วสวมอุปกรณ์ที่ข้อมือ', bodyTwo: 'เปิดแอป RENIR บนโทรศัพท์ของคุณ', bodyThree: 'ปรับเทียบอุปกรณ์ให้เรียบร้อยก่อนเริ่มใช้งาน RENIR', bodyFour: 'เมื่อปรับเทียบเรียบร้อยแล้ว ก็เริ่มใช้งาน RENIR และดูค่าที่อ่านได้ในแอปได้เลย',
      detailOne: 'จากนั้น เตรียมโทรศัพท์ของคุณให้พร้อม', detailTwo: 'ขั้นตอนต่อไปคือปรับเทียบอุปกรณ์ก่อนเริ่มใช้งาน', detailThree: 'ทำตามคำแนะนำในการปรับเทียบที่มากับอุปกรณ์และแอป', detailFour: 'พร้อมใช้งานแล้ว',
      phoneOpen: 'แอปสำหรับ RENIR ของคุณ', schematic: 'ภาพประกอบ', calibrationLabel: 'เตรียมพร้อม แล้วปรับเทียบ', readyLabel: 'พร้อมแล้ว', previous: 'ก่อนหน้า', next: 'ถัดไป', restart: 'ดูอีกครั้ง',
      recapEyebrow: 'สรุปขั้นตอน', recapTitle: 'ง่าย ๆ เพียงเท่านี้', recapDescription: 'เปิดดูเพื่อทบทวนได้ทุกเมื่อที่ต้องการ', footerLabel: 'คู่มือเริ่มต้นใช้งานแบบเข้าใจง่าย', footerVersion: 'คู่มือเริ่มต้นใช้งาน · v1.0', backTop: 'กลับด้านบน',
      navLabel: 'เมนูหลัก', stepsLabel: 'ขั้นตอนการใช้งาน', languageLabel: 'ภาษา'
    }
  };

  const tabs = Array.from(document.querySelectorAll('.step-tab'));
  const panels = Array.from(document.querySelectorAll('.step-panel'));
  const tabList = document.querySelector('.step-list');
  const previous = document.querySelector('.previous-button');
  const next = document.querySelector('.next-button');
  const progress = Array.from(document.querySelectorAll('.step-progress i'));
  const announcement = document.querySelector('#step-announcement');
  let currentStep = 0;
  let currentLanguage = 'en';
  try { if (localStorage.getItem('renir-guide-language') === 'th') currentLanguage = 'th'; } catch (_) { /* Storage is optional for file:// and private browsing. */ }

  function setStep(index, announce = true, focus = false) {
    currentStep = Math.max(0, Math.min(tabs.length - 1, index));
    tabs.forEach((tab, i) => {
      const active = i === currentStep;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      panels[i].hidden = !active;
      progress[i].classList.toggle('is-active', active);
    });
    previous.disabled = currentStep === 0;
    next.querySelector('span').textContent = messages[currentLanguage][currentStep === tabs.length - 1 ? 'restart' : 'next'];
    if (announce) announcement.textContent = `${currentStep + 1} / ${tabs.length}: ${tabs[currentStep].querySelector('strong').textContent}`;
    if (focus) tabs[currentStep].focus();
  }

  function setLanguage(language, persist = true) {
    currentLanguage = messages[language] ? language : 'en';
    const copy = messages[currentLanguage];
    document.documentElement.lang = currentLanguage;
    document.title = copy.pageTitle;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = copy[el.dataset.i18n];
      if (typeof value === 'string') el.textContent = value;
    });
    document.querySelectorAll('[data-i18n-label]').forEach(el => {
      const value = copy[el.dataset.i18nLabel];
      el.setAttribute('aria-label', value);
      el.title = value;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => { el.alt = copy[el.dataset.i18nAlt]; });
    document.querySelectorAll('[data-language]').forEach(el => { el.setAttribute('aria-pressed', String(el.dataset.language === currentLanguage)); });
    document.querySelector('.header-actions').setAttribute('aria-label', copy.navLabel);
    document.querySelector('.language-switch').setAttribute('aria-label', copy.languageLabel);
    tabList.setAttribute('aria-label', copy.stepsLabel);
    setStep(currentStep, false);
    announcement.textContent = '';
    if (persist) { try { localStorage.setItem('renir-guide-language', currentLanguage); } catch (_) { /* The guide still works without storage. */ } }
  }

  tabList.setAttribute('role', 'tablist');
  tabList.setAttribute('aria-orientation', 'vertical');
  tabs.forEach((tab, index) => {
    tab.setAttribute('role', 'tab');
    panels[index].setAttribute('role', 'tabpanel');
    panels[index].setAttribute('aria-labelledby', tab.id);
    panels[index].tabIndex = 0;
    tab.addEventListener('click', () => setStep(index));
    tab.addEventListener('keydown', event => {
      let target = null;
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') target = (index + 1) % tabs.length;
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') target = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') target = 0;
      if (event.key === 'End') target = tabs.length - 1;
      if (target !== null) { event.preventDefault(); setStep(target, true, true); }
    });
  });
  previous.addEventListener('click', () => setStep(currentStep - 1));
  next.addEventListener('click', () => setStep((currentStep + 1) % tabs.length));
  document.querySelectorAll('[data-jump-step]').forEach(link => link.addEventListener('click', () => setStep(Number(link.dataset.jumpStep))));
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  document.querySelectorAll('.print-button').forEach(button => button.addEventListener('click', () => window.print()));
  document.body.classList.add('js');
  setLanguage(currentLanguage, false);
})();
