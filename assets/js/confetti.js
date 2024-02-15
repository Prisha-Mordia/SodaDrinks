// document.addEventListener('DOMContentLoaded', function () {
//   const oneRioSection = document.querySelector('.one-rio');

//   function generateConfetti() {
//       const confettiChars = ['*', '#', '@', '$', '%', '&'];
//       const confettiColors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

//       const confetti = document.createElement('span');
//       confetti.innerHTML = confettiChars[Math.floor(Math.random() * confettiChars.length)];
//       confetti.style.color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
//       confetti.style.position = 'absolute';
//       confetti.style.left = Math.random() * oneRioSection.clientWidth + 'px';
//       confetti.style.top = Math.random() * oneRioSection.clientHeight + 'px';
//       confetti.style.fontSize = Math.random() * 24 + 10 + 'px';
//       confetti.style.animation = 'fall 2s linear infinite';

//       oneRioSection.appendChild(confetti);

//       setTimeout(() => {
//           confetti.remove();
//       }, 2000);
//   }

//   function animateConfetti() {
//       setInterval(generateConfetti, 100);
//   }

//   animateConfetti();
// });
