// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "크리스마스, 디데이 스타트" },
  { "number": 2, "message": "저기 하얀 눈이 내려, 저 하늘 모두 내려~" },
  { "number": 3, "message": "크리스마스까지 학년이와 함께해요~" },
  { "number": 4, "message": "오늘 하루도 학이팅!" },
  { "number": 5, "message": "매일 너 하나로 끝없이 이어진 Christmas~" },
  { "number": 6, "message": "크리스마스가 18일 남았어요!!" },
  { "number": 7, "message": "오늘의 추천 곡: 더보이즈 - 화이트" },
  { "number": 8, "message": "더비, 남은 날까지 갓생살자! 학이팅!!" },
  { "number": 9, "message": "It feels like Christmas On & On" },
  { "number": 10, "message": "매일 매일이 행복으로 가득찬 24일이 되길." },
  { "number": 11, "message": "It's so Christmassy~ 다 너 때문인 걸" },
  { "number": 12, "message": "더비~ 매일매일 행복하자!" },
  { "number": 13, "message": "이번 크리스마스는 케빈 형과 함께하는 거 어때?" },
  { "number": 14, "message": "더비~ 12월 중순인데 2023년 소망은 다 이루었나요?" },
  { "number": 15, "message": "우리 더비~ 크리스마스까지 조금만 더 힘내!" },
  { "number": 16, "message": "더비가 최고야~" },
  { "number": 17, "message": "함께 걸어가면 끝없이 이어질 Christmas~" },
  { "number": 18, "message": "더비는 매일 행복만 해" },
  { "number": 19, "message": "오늘의 추천 곡: 더보이즈 - Christmassy!" },
  { "number": 20, "message": "크리스마스까지 진짜 얼마 안 남았다." },
  { "number": 21, "message": "크리스마스 선물 뭐 받고 싶어?" },
  { "number": 22, "message": "올해 착한 일 많이한 더비 모여라~" },
  { "number": 23, "message": "더비, 드디어 크리마스마까지 이틀 남았어!!!" },
  { "number": 24, "message": "더비 내일이 크리스마스야! 우리 내년에도 행복하자~" }
];

