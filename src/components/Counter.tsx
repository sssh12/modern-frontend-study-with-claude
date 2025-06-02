import React, { useState } from "react";

// Counter 컴포넌트의 Props 타입 정의
interface CounterProps {
  initialValue?: number; // 시작값 (선택 사항)
  step?: number; // 증가/감소 단위 (선택 사항)
  min?: number; // 최소값 (선택 사항)
  max?: number; // 최대값 (선택 사항)
  title?: string; // 제목 (선택 사항)
}

const Counter: React.FC<CounterProps> = ({
  initialValue = 0, // 기본값: 0부터 시작
  step = 1, // 기본값: 1씩 증가/감소
  min, // 기본값: 제한 없음 (undefined)
  max, // 기본값: 제한 없음 (undefined)
  title = "카운터", // 기본값: "카운터"
}) => {
  // useState Hook: 카운터의 현재 값을 저장하는 창고
  // useState Hook에 초기값 전달
  const [count, setCount] = useState<number>(initialValue);
  //     ↑       ↑
  //   현재값   값 바꾸는 함수

  // 증가 함수 (최댓값 체크 포함)
  const increment = () => {
    setCount((prevCount) => {
      const newCount = prevCount + step;
      // 최댓값이 있고, 새 값이 최댓값보다 클 때
      return max !== undefined && newCount > max ? max : newCount;
    });
  };

  // 감소 함수 (최솟값 체크 포함)
  const decrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount - step;
      // 최솟값이 있고, 새 값이 최솟값보다 작을 때
      return min !== undefined && newCount < min ? min : newCount;
    });
  };

  // 초기화 함수
  const reset = () => {
    setCount(initialValue);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 max-w-sm mx-auto">
      {/* 헤더 */}
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">🧮 {title}</h3>
        <p className="test-sm text-gray-500">
          단위: {step} | 시작값: {initialValue}
        </p>
      </div>

      {/* 카운터 디스플레이 */}
      <div className="text-center mb-6">
        <div
          className={`
          text-6xl font-bold mb-2 transition-colors duration-300
          ${
            count > 0
              ? "text-green-500"
              : count < 0
              ? "text-red-500"
              : "text-gray-600"
          }
        `}
        >
          {count}
        </div>

        {/* 제한값 표시 */}
        {(min !== undefined || max !== undefined) && (
          <div className="text-xs text-gray-400 space-x-2">
            {min !== undefined && <span>최솟값: {min}</span>}
            {max !== undefined && <span>최댓값: {max}</span>}
          </div>
        )}
      </div>

      {/* 컨트롤 버튼 */}
      <div className="flex justify-center items-center space-x-3">
        {/* 감소 버튼 */}
        <button
          onClick={decrement}
          disabled={min !== undefined && count <= min}
          className={`
            w-12 h-12 rounded-full font-bold text-xl transition-all duration-200
            ${
              min !== undefined && count <= min
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600 text-white hover:scale-110 active:scale-95"
            }
          `}
        >
          -
        </button>

        {/* 초기화 버튼 */}
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors duration-200"
        >
          초기화
        </button>

        {/* 증가 버튼 */}
        <button
          onClick={increment}
          disabled={max !== undefined && count >= max}
          className={`
            w-12 h-12 rounded-full font-bold text-xl transition-all duration-200
            ${
              max !== undefined && count >= max
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white hover:scale-110 active:scale-95"
            }
          `}
        >
          +
        </button>
      </div>

      {/* 현재 상태 정보 */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="text-xs text-gray-500 text-center space-y-1">
          <div>현재값: {count}</div>
          {count !== initialValue && (
            <div>
              초기값에서 {count > initialValue ? "+" : ""}
              {count - initialValue}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Counter;
