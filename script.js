// 페이지가 로드되면 실행
document.addEventListener('DOMContentLoaded', function () {
  const scrollBtn = document.getElementById('scrollTopBtn');

  scrollBtn.addEventListener('click', function (e) {
    e.preventDefault(); // 기본 링크 동작 방지
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 부드럽게 스크롤
    });
  });
});

// 방문 횟수 카운트 기능
let visits = localStorage.getItem('visits');
visits = visits ? parseInt(visits) + 1 : 1;
localStorage.setItem('visits', visits);

const visitCounter = document.getElementById('visit-counter');
if (visitCounter) {
  visitCounter.textContent = `이 사이트에서 ${visits}번 클릭하셨습니다.`;
}
