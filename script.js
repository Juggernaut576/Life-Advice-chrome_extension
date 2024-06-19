fetch('https://api.adviceslip.com/advice')
   .then(response => response.json())
   .then(adviceData => {
      if (adviceData && adviceData.slip && adviceData.slip.advice) {
         const adviceText = adviceData.slip.advice;
         const adviceElement = document.getElementById('adviceElement');
         adviceElement.innerHTML = adviceText;
      } else {
         console.error('Unexpected API response structure:', adviceData);
      }
   })
   .catch(error => {
      console.error('Error fetching advice:', error);
   });
