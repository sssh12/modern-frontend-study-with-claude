import WelcomeCard from "./components/WelcomeCard";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 p-8">
      {/* 페이지 헤더 */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          🎉 Tailwind CSS v4 + React + TypeScript
        </h1>
        <p className="text-center text-gray-600">
          새로운 설치법으로 만든 재사용 가능한 컴포넌트들
        </p>
      </div>

      {/* 컴포넌트 그리드 */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 다양한 사용자 카드들 */}
        <WelcomeCard name="김개발" role="Frontend 개발자" isOnline={true} />

        <WelcomeCard name="이디자인" role="UI/UX 디자이너" isOnline={false} />

        <WelcomeCard name="박백엔드" role="Backend 개발자" isOnline={true} />

        <WelcomeCard name="최기획" role="프로덕트 매니저" isOnline={true} />

        <WelcomeCard name="정마케팅" role="마케팅 매니저" isOnline={false} />

        <WelcomeCard name="한학생" role="인턴" isOnline={true} />
      </div>

      {/* 하단 정보 */}
      <div className="max-w-6xl mx-auto mt-12 text-center">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            ✨ Tailwind CSS v4의 장점
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div>
              <span className="font-medium">🚀 5배 빠른 빌드</span>
              <br />
              특히 증분 빌드에서 극적인 성능 향상
            </div>
            <div>
              <span className="font-medium">⚙️ 설정 파일 불필요</span>
              <br />
              자동 컨텐츠 감지로 복잡한 설정 제거
            </div>
            <div>
              <span className="font-medium">🎨 CSS 기반 커스터마이징</span>
              <br />
              JavaScript 대신 CSS로 설정 관리
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
