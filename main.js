// -- 반응형 웹 햄버거 버튼 클릭 시 on 클래스 토글 함수
(function (window, document) {
  'use strict';

  /* 변수 앞에 $표시는 html 요소를 담는 변수들을 의미 */
  const $toggles = document.querySelectorAll('.toggle'); // NodeList라는 유사 배열
  const $toggleBtn = document.getElementById('toggle-btn');

  // Click event
  $toggleBtn.addEventListener('click', function () {
    toggleElements();
  });
  
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) {
      // Off toggle element
      offElements();
    }
  });

  function toggleElements() {
    [].forEach.call($toggles, function(toggle) {
      toggle.classList.toggle('on');
    }); // 유사 배열을 반복시키기 위한 방법
  }

  function offElements() {
    [].forEach.call($toggles, function(toggle) {
      toggle.classList.remove('on');
    });
  }
})(window, document)