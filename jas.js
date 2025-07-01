// 포트폴리오 탭 기능
document.addEventListener('DOMContentLoaded', function() {
    const tabItems = document.querySelectorAll('.pofol-nav > ul > li');
    const blackCombatSite = document.querySelector('.black-bombat-site');
    const tousLesJoursSite = document.querySelector('.tousLesjours-site');
    
    // 초기 상태 설정
    blackCombatSite.style.display = 'grid';
    tousLesJoursSite.style.display = 'none';
    
    // 탭 클릭 이벤트
    tabItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // 모든 탭에서 active 클래스 제거
            tabItems.forEach(tab => tab.classList.remove('active'));
            
            // 클릭된 탭에 active 클래스 추가
            this.classList.add('active');
            
            // 해당하는 포트폴리오 섹션 표시
            switch(index) {
                case 0: // 블랙컴뱃
                    blackCombatSite.style.display = 'grid';
                    tousLesJoursSite.style.display = 'none';
                    break;
                case 1: // 뚜레쥬르
                    blackCombatSite.style.display = 'none';
                    tousLesJoursSite.style.display = 'grid';
                    break;
                default: // 미작업 탭들
                    blackCombatSite.style.display = 'none';
                    tousLesJoursSite.style.display = 'none';
                    break;
            }
        });
    });
    
    // 첫 번째 탭을 기본으로 활성화
    tabItems[0].classList.add('active');
    
})

const texts = ["프론트엔드 개발자", "웹 퍼블리셔", "UI 디자이너"];
const speed = 100; // 한 글자씩 나타나는 속도
const eraseSpeed = 50; // 지워지는 속도
const delay = 1500; // 글 다 쓰고 기다리는 시간

let index = 0;
let charIndex = 0;
let isDeleting = false;

const typeWriter = document.getElementById("typewriter");

function type() {
  const current = texts[index];
  if (isDeleting) {
    charIndex--;
    typeWriter.textContent = current.substring(0, charIndex);
  } else {
    charIndex++;
    typeWriter.textContent = current.substring(0, charIndex);
  }

  let typeSpeed = isDeleting ? eraseSpeed : speed;

  if (!isDeleting && charIndex === current.length) {
    typeSpeed = delay;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length;
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed);
}

type();

