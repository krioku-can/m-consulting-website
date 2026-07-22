/**
 * M. Consulting — password gate for client preview
 * Password: Momentum2026
 * Session-scoped (survives page nav until tab closes)
 */
(function () {
  var KEY = 'mc_preview_ok';
  var PASS = 'Momentum2026';

  if (sessionStorage.getItem(KEY) === '1') return;

  // Hide page immediately to avoid content flash
  var style = document.createElement('style');
  style.id = 'mc-gate-hide';
  style.textContent =
    'html.mc-gated body > *:not(#mc-preview-gate){visibility:hidden!important}' +
    'html.mc-gated{overflow:hidden!important}';
  document.documentElement.classList.add('mc-gated');
  (document.head || document.documentElement).appendChild(style);

  function unlock() {
    sessionStorage.setItem(KEY, '1');
    document.documentElement.classList.remove('mc-gated');
    var gate = document.getElementById('mc-preview-gate');
    if (gate) gate.remove();
    var hide = document.getElementById('mc-gate-hide');
    if (hide) hide.remove();
  }

  function mount() {
    if (document.getElementById('mc-preview-gate')) return;

    var overlay = document.createElement('div');
    overlay.id = 'mc-preview-gate';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Preview access');
    overlay.innerHTML =
      '<style>' +
      '#mc-preview-gate{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;' +
      'background:linear-gradient(160deg,#0B2A4A 0%,#0a1f36 55%,#123a5c 100%);font-family:Montserrat,system-ui,-apple-system,sans-serif;padding:24px;}' +
      '#mc-preview-gate .card{width:100%;max-width:420px;background:#F5F1EB;border-radius:16px;padding:40px 32px 32px;' +
      'box-shadow:0 24px 60px rgba(0,0,0,.35);text-align:center;}' +
      '#mc-preview-gate .mark{width:64px;height:64px;margin:0 auto 18px;display:block}' +
      '#mc-preview-gate h1{margin:0 0 8px;font-family:Georgia,\"Times New Roman\",serif;font-size:28px;color:#0B2A4A;font-weight:700;letter-spacing:-0.02em}' +
      '#mc-preview-gate .sub{margin:0 0 6px;color:#F26522;font-size:13px;font-weight:600;letter-spacing:.08em;text-transform:uppercase}' +
      '#mc-preview-gate .hint{margin:0 0 24px;color:#555;font-size:14px;line-height:1.5}' +
      '#mc-preview-gate form{display:flex;flex-direction:column;gap:12px}' +
      '#mc-preview-gate input[type=password]{width:100%;box-sizing:border-box;padding:14px 16px;border:2px solid #E5E7EB;border-radius:10px;' +
      'font-size:16px;outline:none;background:#fff;color:#333;font-family:inherit}' +
      '#mc-preview-gate input[type=password]:focus{border-color:#0B2A4A}' +
      '#mc-preview-gate button{padding:14px 18px;border:0;border-radius:10px;background:#0B2A4A;color:#fff;font-weight:700;' +
      'font-size:15px;letter-spacing:.04em;text-transform:uppercase;cursor:pointer;font-family:inherit}' +
      '#mc-preview-gate button:hover{background:#123a5c}' +
      '#mc-preview-gate .err{min-height:20px;margin:4px 0 0;color:#D90429;font-size:13px;font-weight:600}' +
      '#mc-preview-gate .foot{margin:22px 0 0;font-size:11px;color:#888;letter-spacing:.04em}' +
      '</style>' +
      '<div class="card">' +
      '<svg class="mark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<circle cx="50" cy="50" r="46" fill="none" stroke="#0B2A4A" stroke-width="3"/>' +
      '<text x="50" y="66" text-anchor="middle" font-family="Georgia, serif" font-size="52" font-weight="bold" fill="#0B2A4A">M</text>' +
      '<circle cx="72" cy="68" r="5" fill="#F26522"/>' +
      '<line x1="35" y1="74" x2="65" y2="74" stroke="#F26522" stroke-width="4" stroke-linecap="round"/>' +
      '</svg>' +
      '<p class="sub">Private Preview</p>' +
      '<h1>M. Consulting</h1>' +
      '<p class="hint">This draft site is password-protected.<br>Enter the preview password to continue.</p>' +
      '<form id="mc-gate-form" autocomplete="off">' +
      '<input id="mc-gate-pass" type="password" name="password" placeholder="Preview password" required autofocus />' +
      '<button type="submit">View Preview</button>' +
      '<div class="err" id="mc-gate-err" aria-live="polite"></div>' +
      '</form>' +
      '<p class="foot">Made by Lumi · Client preview</p>' +
      '</div>';

    document.body.appendChild(overlay);

    var form = document.getElementById('mc-gate-form');
    var input = document.getElementById('mc-gate-pass');
    var err = document.getElementById('mc-gate-err');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var val = (input.value || '').trim();
      if (val === PASS) {
        unlock();
      } else {
        err.textContent = 'Incorrect password. Try again.';
        input.value = '';
        input.focus();
      }
    });

    setTimeout(function () {
      try {
        input.focus();
      } catch (e) {}
    }, 50);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
