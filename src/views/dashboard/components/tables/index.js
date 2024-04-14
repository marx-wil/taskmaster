import BasicTable from '../../../../components/tables/basictable';
import data from './data';
const DashBasicTable = props => {
  return (
    <>
      <BasicTable header="Basic Table" data={data}/>
    </>
  );
};
export default DashBasicTable;
