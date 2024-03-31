// InstrumentTableData.jsx
import TableComponent from './TableComponent'; // Adjust the import path as necessary

const data = [
  { instrumentType: 'NX-BE', instrumentName: 'NX-BE1', ipAddress: '10.10.30.101', firmwareVersion: 'FW1', status: 'Active', reload: 'Reload' },
  { instrumentType: 'NX-BE', instrumentName: 'NX-BE2', ipAddress: '10.10.30.101', firmwareVersion: 'FW2', status: 'InActive', reload: 'Reload' },
  { instrumentType: 'NX-BE', instrumentName: 'NX-BE3', ipAddress: '10.10.30.101', firmwareVersion: 'FW3', status: 'Associated', reload: 'Reload' },
  { instrumentType: 'NX-C', instrumentName: 'NX-BE4', ipAddress: '10.10.30.101', firmwareVersion: 'FW4', status: 'Active', reload: 'Reload' },
  { instrumentType: 'NX-C', instrumentName: 'NX-BE5', ipAddress: '10.10.30.101', firmwareVersion: 'FW5', status: 'Active', reload: 'Reload' },
  { instrumentType: 'NX-C', instrumentName: 'NX-BE6', ipAddress: '10.10.30.101', firmwareVersion: 'FW6', status: 'InActive', reload: 'Reload' },
  { instrumentType: 'NX-C', instrumentName: 'NX-BE7', ipAddress: '10.10.30.101', firmwareVersion: 'FW7', status: 'Active', reload: 'Reload' },
  
  // Add more data objects as per your requirements
];

const columns = [
  { Header: 'Instrument Type', accessor: 'instrumentType' },
  { Header: 'Instrument Name', accessor: 'instrumentName' },
  { Header: 'IP Address', accessor: 'ipAddress' },
  { Header: 'Firmware Version', accessor: 'firmwareVersion' },
  {
    Header: 'Status',
    accessor: 'status',
    // Custom cell rendering
    Cell: ({ value }) => {
      let color = '';
      switch (value) {
        case 'Active':
          color = 'text-green-300'; // Light orange-yellow
          break;
        case 'InActive':
          color = 'text-red-600'; // Red
          break;
        case 'Associated':
          color = 'text-orange-600'; // Green
          break;
        default:
          color = 'text-gray-800'; // Default color
      }
      return <span className={`${color} font-semibold`}>{value}</span>;
    },
  },
  {
    Header: '',
    accessor: 'reload',
    Cell: ({ row }) => (
      <button
        className="border-purple border text-purple active:bg-purple hover:bg-purple hover:text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
        onClick={() => alert(`Reload ${row.original.instrumentName}`)}
      >
        Reload
      </button>
    ),
  },
];

const InstrumentTable = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <TableComponent columns={columns} data={data} />
    </div>
  );
};

export default InstrumentTable;
