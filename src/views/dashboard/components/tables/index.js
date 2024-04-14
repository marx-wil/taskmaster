import BasicTable from '../../../../components/tables/basictable';
import data from './data';
import theader from './theaderdata';
const DashBasicTable = props => {
  return (
    <>
    <BasicTable header="Basic Table" data={data} theaderdata={theader}/>
    </>
  );
};
export default DashBasicTable;
