import React from "react";

// TypeScript 인터페이스로 Props 타입 정의
interface WelcomeCardProps {
  name: string; // 필수: 사용자 이름
  role?: string; // 선택: 역할 (물음표 = 있어도 되고 없어도 됨)
  avatarUrl?: string; // 선택: 프로필 사진 URL
  isOnline?: boolean; // 선택: 온라인 상태
  email?: string;
}

// 재사용 가능한 WelcomeCard 컴포넌트
const WelcomeCard: React.FC<WelcomeCardProps> = ({
  // 구조 분해 할당 (필요한 것만 골라내기)
  name,
  role = "사용자", // 기본값: role이 없으면 "사용자"
  avatarUrl,
  isOnline = false, // 기본값: 지정 안하면 오프라인
  email = "aaa@abc.def",
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      {/* 헤더 영역 */}
      <div className="flex items-center space-x-4 mb-4">
        {/* 아바타 */}
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              name.charAt(0).toUpperCase()
            )}
          </div>

          {/* 온라인 상태 표시 */}
          {isOnline && (
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
          )}
        </div>

        {/* 이름과 역할 */}
        <div>
          <h3 className="font-semibold text-gray-800 text-lg">{name}</h3>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>

      {/* 내용 영역 */}
      <div className="space-y-3">
        <p className="text-gray-600 font-medium">
          <span>{email}</span>
        </p>
        <p className="text-gray-600">
          안녕하세요! <span className="font-medium text-blue-600">{name}</span>
          님을 환영합니다.
        </p>

        {/* 상태 배지 */}
        <div className="flex items-center space-x-2">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium${
              isOnline
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {" "}
            {isOnline ? "🟢 온라인" : "⚫ 오프라인"}
          </span>
        </div>
      </div>

      {/* 액션 버튼 */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <button className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105">
          프로필 보기
        </button>
      </div>
    </div>
  );
};

export default WelcomeCard;

/*
🤔 TypeScript 문법을 하나씩 파헤쳐보자
interface WelcomeCardProps

interface: 계약서 또는 설계도 같은 개념
"이 컴포넌트는 이런 형태의 데이터를 받을 거야"라고 미리 선언
비유: 레스토랑 주문서 양식 만들기

name: string (필수 항목)

name: 속성 이름 (주문서의 "메뉴" 칸)
: string: 타입 지정 (문자열만 받겠다는 뜻)
**콜론(:)**의 의미: "~는 ~타입이다"
비유: "이름은 반드시 글자로 써주세요"

role?: string (선택 항목)

?: 물음표는 "있어도 되고 없어도 됨"이라는 뜻
비유: 주문서에 "특별 요청사항 (선택사항)" 같은 칸

🤔 구조 분해 할당이 뭘까?
전통적인 방법 (props 통째로 받기):
typescript
const WelcomeCard = (props) => {
  return <div>{props.name}</div>  // props.name으로 접근
}
구조 분해 할당 (필요한 것만 골라내기):
typescript
const WelcomeCard = ({ name, role }) => {
  return <div>{name}</div>  // 바로 name으로 접근
}

📦 택배 상자 비유:

전통 방법: 택배 상자를 통째로 받아서 필요할 때마다 뜯어보기
구조 분해: 택배가 도착하자마자 필요한 물건들만 꺼내서 정리

기본값 설정:
typescript
role = "사용자"  // role이 전달되지 않으면 "사용자"로 설정

비유: 주문서에 "음료 선택 안하면 물 드릴게요" 같은 기본 설정

🎨 Tailwind CSS 클래스들의 의미 파헤치기
className을 왜 쓸까?

HTML에서는 class라고 쓰지만
JavaScript에서 class는 예약어(클래스 정의에 사용)
그래서 React에서는 className을 사용
비유: 이름이 같은 사람을 구분하기 위해 별명 사용

bg-white rounded-xl shadow-lg p-6

bg-white: 흰색 배경
rounded-xl: 많이 둥근 모서리 (12px)
shadow-lg: 큰 그림자 (물건을 높이 들었을 때의 진한 그림자)
p-6: 안쪽 여백 24px

그라데이션 배경:

bg-gradient-to-br: 우하단으로 향하는 그라데이션
from-blue-400: 시작 색상 (파란색)
to-purple-500: 끝 색상 (보라색)
비유: 하늘의 노을 색깔

🧠 JavaScript & React 로직 이해하기
조건부 렌더링 (삼항 연산자):
typescript
{avatarUrl ? (
  <img src={avatarUrl} alt={name} />
) : (
  name.charAt(0).toUpperCase()
)}
🤔 삼항 연산자의 구조:

조건 ? 참일때 : 거짓일때
비유: "비가 오면 우산, 안 오면 모자"

name.charAt(0).toUpperCase() 분해:

name: 사용자 이름 (예: "김철수")
.charAt(0): 첫 번째 글자 가져오기 (예: "김")
.toUpperCase(): 대문자로 변환
결과: "김" 또는 "K"

논리 AND 연산자 (&&):
typescript
{isOnline && (
  <div>온라인 표시</div>
)}

isOnline이 true면 뒤의 JSX를 렌더링
isOnline이 false면 아무것도 렌더링 안함
비유: "문이 열려있으면 들어가기, 닫혀있으면 그냥 지나가기"
*/
