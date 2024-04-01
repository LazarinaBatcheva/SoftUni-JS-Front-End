function solve() {
  const text = document.getElementById('text').value;
  const currentCase = document.getElementById('naming-convention').value;
  const convertedText = document.getElementById('result');

  const convertToPascalCase = (text) => text.split(' ')
                                            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                                            .join('');

  const convertorText = {
    'Pascal Case': convertToPascalCase,
    'Camel Case': (text) => convertToPascalCase(text).charAt(0).toLowerCase() + convertToPascalCase(text).slice(1),
  };

  if (!convertorText[currentCase]) {
    convertedText.textContent = 'Error!';
    return;
  }

  convertedText.textContent = convertorText[currentCase](text);
}