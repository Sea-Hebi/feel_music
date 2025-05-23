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
