const escapeHtml = (text) => {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };

  const escapeText = text.replace(/[&<>"']/g, (m) => map[m]);

  return (escapeText.length > 250 ? escapeText.substring(0, 250) : escapeText);
};

export default escapeHtml;
