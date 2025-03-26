if (navigator.userAgent.indexOf('Instagram') > -1) {
  // Instagramアプリ内ブラウザで開かれた場合
  var message = document.createElement('div');
  message.textContent = 'Instagramアプリ内で開いています。外部ブラウザで開くには、メニューから「ブラウザで開く」を選択してください。';
  document.body.appendChild(message);
} else if (navigator.userAgent.indexOf('TikTok') > -1) {
  // TikTokアプリ内ブラウザで開かれた場合
  var message = document.createElement('div');
  message.textContent = 'TikTokアプリ内で開いています。外部ブラウザで開くには、メニューから「ブラウザで開く」を選択してください。';
  document.body.appendChild(message);
} else if (navigator.userAgent.indexOf('Twitter') > -1 || navigator.userAgent.indexOf('XApp') > -1) {
  // Xアプリ内ブラウザで開かれた場合
  var message = document.createElement('div');
  message.textContent = 'Xアプリ内で開いています。外部ブラウザで開くには、メニューから「ブラウザで開く」を選択してください。';
  document.body.appendChild(message);
}
