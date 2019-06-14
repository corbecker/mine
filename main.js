
function loadHUD() {
  const _corner1 = document.querySelector('.hud__corner:nth-child(1)');
  _corner1.textContent = getFormattedDate();
}

function getFormattedDate() {
  const date = new Date();
  const day = date.getDay();
  const month = date.getDate();
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

loadHUD();