const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const isVisible = answer.style.display === 'block';

    document.querySelectorAll('.faq-answer').forEach((item) => {
      item.style.display = 'none';
    });

    answer.style.display = isVisible ? 'none' : 'block';
  });
});