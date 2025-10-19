// نحدد كل العناصر اللي عايزين نعمل لها animation
const boxes = document.querySelectorAll('.box');
const progressBars = document.querySelectorAll('.child');

window.addEventListener('scroll', checkBoxes);
checkBoxes(); // أول ما الصفحة تفتح

function checkBoxes() {
  const triggerBottom = window.innerHeight * 0.8;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });

  // ✅ هنا الجزء الجديد الخاص بالـ progress bars
  progressBars.forEach(bar => {
    const barTop = bar.getBoundingClientRect().top;
    const value = bar.getAttribute('data-per');

    if (barTop < triggerBottom) {
      bar.style.transition = 'width 2s ease'; // حركة سلسة
      bar.style.width = value; // يبدأ يتحرك للنسبة المطلوبة
    } else {
      bar.style.width = '0'; // لو خرج من الشاشة يرجع صفر (اختياري)
    }
  });
}
