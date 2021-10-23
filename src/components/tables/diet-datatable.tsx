import { useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { DefaultFormInput } from "../inputs/default-form.input";

export type DietDataRow = {
  date: string;
  name: string;
  calorie: number;
  carbohydrate: number;
  sugars: number;
  protein: number;
  fat: number;
  saturatedFat: number;
  transFat: number;
  cholesterol: number;
  sodium: number;
};

const DietDataTableColumns: TableColumn<any>[] = [
  {
    name: "일자",
    selector: (row: DietDataRow) => row.date,
    sortable: true,
  },
  {
    name: "항목",
    selector: (row: DietDataRow) => row.name,
    sortable: true,
  },
  {
    name: "칼로리(kcal)",
    selector: (row: DietDataRow) => row.calorie,
    sortable: true,
    right: true,
  },
  {
    name: "탄수화물(g)",
    selector: (row: DietDataRow) => row.carbohydrate,
    sortable: true,
    right: true,
  },
  {
    name: "당류(g)",
    selector: (row: DietDataRow) => row.sugars,
    sortable: true,
    right: true,
  },
  {
    name: "단백질(g)",
    selector: (row: DietDataRow) => row.protein,
    sortable: true,
    right: true,
  },
  {
    name: "지방(g)",
    selector: (row: DietDataRow) => row.fat,
    sortable: true,
    right: true,
  },
  {
    name: "포화지방(g)",
    selector: (row: DietDataRow) => row.saturatedFat,
    sortable: true,
    right: true,
  },
  {
    name: "트랜스지방(g)",
    selector: (row: DietDataRow) => row.transFat,
    sortable: true,
    right: true,
  },
];

export const DietDataTable: React.FC<{
  data: DietDataRow[];
  loading?: boolean;
}> = (props) => {
  const [state, setState] = useState({
    search: "",
  });

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      search: e.target.value,
    });
  };

  const filteredData = () => {
    if (state.search === "") return props.data;
    return props.data.filter((r) => r.name.includes(state.search));
  };

  return (
    <div>
      <div className="w-96 float-right">
        <input
          type="text"
          className="focus:ring-indigo-500 block w-full border-gray-300 border-b p-1 px-2 text-xs"
          placeholder="Search.."
          onChange={onChangeSearchInput}
        />
      </div>

      <DataTable
        data={filteredData()}
        columns={DietDataTableColumns}
        pagination
        progressPending={props.loading}
      />
    </div>
  );
};
