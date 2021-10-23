import React from "react";
import { BoxTitle } from "./title";

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
      <BoxTitle>이전에 먹었던 것인가요?</BoxTitle>
      <div className="w-full bg-white rounded border shadow p-6">
        <div className="flex">
          <p className="cursor-pointer hover:text-yellow-400">
            하림 닭가슴살 100g
          </p>
          <div className="ml-4">
            <span className="p-1 text-xs text-white bg-black border border-black">
              탄수
            </span>
            <span className="p-1 text-xs text-black border border-black">
              100
            </span>
          </div>
          <div className="ml-2">
            <span className="p-1 text-xs text-white bg-black border border-black">
              당
            </span>
            <span className="p-1 text-xs text-black border border-black">
              100
            </span>
          </div>
        </div>
      </div>
      <div className="w-full bg-white rounded border shadow p-6 mt-2">
        {props.name}
      </div>
    </div>
  );
};
