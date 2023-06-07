(function() {
  const downloadButton = document.getElementById('downloadButton');
  downloadButton.addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'https://raw.githubusercontent.com/sadbred/sadbred.github.io/main/img/20230606_161702.jpg';
    link.download = '20230606_161702.jpg';
    link.click();
  });
})();
