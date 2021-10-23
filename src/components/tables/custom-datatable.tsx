import DataTable from "react-data-table-component";

export const CustomDataTable: React.FC<{
  columns: any[];
  data: any[];
}> = (props) => {
  return <DataTable columns={props.columns} data={props.data} />;
};
