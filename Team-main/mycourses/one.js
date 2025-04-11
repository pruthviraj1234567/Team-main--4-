const quizData = [
    {
      question: "What is DSA?",
      options: ["Data Structure & Algorithm", "Data Server Area", "Design System Array", "None"],
      answer: "Data Structure & Algorithm"
    },
    // Add 20 Questions like above
  ];
  
  const quizContainer = document.getElementById('quizContainer');
  
  quizData.forEach((q, index) => {
    quizContainer.innerHTML += `
      <p>${index+1}. ${q.question}</p>
      ${q.options.map(opt => `
        <input type="radio" name="q${index}" value="${opt}">${opt}<br>
      `).join('')}
    `;
  });
  
  function submitQuiz(){
    let score = 0;
    quizData.forEach((q, index) => {
      const ans = document.querySelector(`input[name="q${index}"]:checked`);
      if(ans && ans.value === q.answer){
        score++;
      }
    });
    localStorage.setItem("quizScore", score);
    window.location.href = "result.html";
  }
  