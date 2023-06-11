
    function appendToResult(value) {
      var result = document.getElementById('result');
      result.value += value;
    }

    function clearResult() {
      var result = document.getElementById('result');
      result.value = '';
    }

    function calculateResult() {
      var result = document.getElementById('result');
      try {
        var calculatedResult = eval(result.value);
        result.value = calculatedResult;
      } catch (error) {
        result.value = 'Error';
      }
    }
  