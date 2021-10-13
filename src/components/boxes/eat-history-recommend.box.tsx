import React from "react";

interface EatHistoryRecommendBoxProps {
  name: string;
}

export const EatHistoryRecommendBox: React.FC<EatHistoryRecommendBoxProps> = (
  props
) => {
  // TODO: props.name 바뀔 때 마다 먹었던 리스트에서 검색해서 질의해오기
  // TODO: 먹었던 리스트 아이템 클릭시 inputBox에 정보 입력

  return (
    <div className="w-full h-full my-4">
      <h2 className="text-xl font-bold mb-4">이전에 먹었던 것인가요?</h2>
      <div className="w-full bg-white rounded border shadow p-6">
        하림 닭가슴살 100g
      </div>
      <div className="w-full bg-white rounded border shadow p-6 mt-2">
        {props.name}
      </div>
    </div>
  );
};
