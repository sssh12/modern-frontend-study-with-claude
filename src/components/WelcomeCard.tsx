import React from "react";

// TypeScript 인터페이스로 Props 타입 정의
interface WelcomeCardProps {
  name: string; // 필수: 사용자 이름
  role?: string; // 선택: 역할 (물음표 = 있어도 되고 없어도 됨)
  avatarUrl?: string; // 선택: 프로필 사진 URL
  isOnline?: boolean; // 선택: 온라인 상태
}

// 재사용 가능한 WelcomeCard 컴포넌트
const WelcomeCard: React.FC<WelcomeCardProps> = ({
  // 구조 분해 할당 (필요한 것만 골라내기)
  name,
  role = "사용자", // 기본값: role이 없으면 "사용자"
  avatarUrl,
  isOnline = false, // 기본값: 지정 안하면 오프라인
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
        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105">
          프로필 보기
        </button>
      </div>
    </div>
  );
};

export default WelcomeCard;
