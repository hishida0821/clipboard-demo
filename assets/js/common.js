const copyBtn = document.getElementById('copy');
const code = document.getElementById('code');

copyBtn.addEventListener('click', () => {
  const codeText = code.innerText;
  copyToClipboard(codeText);
  console.log(codeText);
});
