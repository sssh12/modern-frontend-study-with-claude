import React from "react";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 py-8">
      {/* 페이지 헤더 */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          🎯 고급 useState Hook 마스터하기
        </h1>
        <p className="text-center text-gray-600">
          다양한 설정의 카운터로 Props와 상태 관리 완전 정복!
        </p>
      </div>

      {/* 카운터들 그리드 */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* 기본 카운터 */}
        <Counter title="기본 카운터" />

        {/* 10부터 시작, 5씩 증가 */}
        <Counter title="점프 카운터" initialValue={10} step={5} />

        {/* 0~100 범위 제한, 10씩 증가 */}
        <Counter
          title="퍼센트 카운터"
          initialValue={50}
          min={0}
          max={100}
          step={10}
        />

        {/* 음수도 가능한 온도계 */}
        <Counter title="온도계" initialValue={20} min={-10} max={40} step={2} />

        {/* 큰 숫자 카운터 */}
        <Counter title="점수 카운터" initialValue={1000} step={100} />

        {/* 소수점 카운터 (정수만 가능하지만 단위를 작게) */}
        <Counter
          title="미세 조정"
          initialValue={0}
          step={1}
          min={-20}
          max={20}
        />
      </div>

      {/* 학습 내용 정리 카드 */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            🎓 이번 단계에서 배운 핵심 개념들
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">
                🎣 React Hook
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 컴포넌트에 특별한 능력을 부여하는 도구</li>
                <li>• useState: 기억 능력 추가</li>
                <li>• Hook은 함수형 컴포넌트에서만 사용</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-2">📦 useState</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• [현재값, 설정함수] = useState(초기값)</li>
                <li>• 상태가 변경되면 컴포넌트 자동 리렌더링</li>
                <li>• 함수형 업데이트로 안전한 상태 변경</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-2">
                🎯 Props 타입 정의
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• interface로 Props 구조 명시</li>
                <li>• ?로 선택적 속성 표시</li>
                <li>• 기본값으로 안전한 기본 동작 보장</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-2">
                🔄 이벤트 처리
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• onClick ={` () => 함수()`} 패턴</li>
                <li>• 조건부 비활성화 (disabled)</li>
                <li>• 상태에 따른 스타일 변경</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
