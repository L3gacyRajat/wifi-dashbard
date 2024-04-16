// AttenuatorTable.jsx
import React, { useEffect, useState } from 'react';
import { readRemoteFile } from 'react-papaparse';
import TableComponent from './TableComponent'; // Adjust the import path as necessary


const AttenuatorTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      readRemoteFile('src/assets/Attenuator_status.csv', {
        complete: (parsed) => {
          const modifiedData = parsed.data.slice(1).map(row => ({   // skip the first rows (Header) of the CSV file
            attenuatorType: row[0],
            attenuatorName: row[1],
            ipAddress: row[2],
            firmwareVersion: row[3],
            status: row[4],
            reload: row[5]
          }));
          setData(modifiedData);
        }
      });
    };

    fetchData();
  }, []);

  const columns = [
    { Header: 'Attenuator Type', accessor: 'attenuatorType' },
    { Header: 'Attenuator Name', accessor: 'attenuatorName' },
    { Header: 'IP Address', accessor: 'ipAddress' },
    { Header: 'Firmware Version', accessor: 'firmwareVersion' },
    {
      Header: 'Status',
      accessor: 'status',
      // Custom cell rendering
      Cell: ({ value }) => {
        let color = '';
        const lowercaseValue = typeof value === 'string' ? value.toLowerCase() : ''; // Convert value to lowercase
        switch (lowercaseValue) {
          case 'active':
            color = 'text-green-300'; // Light orange-yellow
            break;
          case 'inactive':
            color = 'text-red-600'; // Red
            break;
          case 'associated':
            color = 'text-orange-600'; // Green
            break;
          default:
            color = 'text-gray-800'; // Default color
        }
        // Capitalize the first letter of the status
        const status = lowercaseValue.charAt(0).toUpperCase() + lowercaseValue.slice(1);
        return <span className={`${color} font-semibold`}>{status}</span>;
      },
    },
    {
      Header: '',
      accessor: 'reload',
      Cell: ({ row }) => (
        <button
          className="border-purple border text-purple active:bg-purple hover:bg-purple hover:text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
          onClick={() => alert(`Reload ${row.original.attenuatorName}`)}
        >
          Reload
        </button>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <TableComponent columns={columns} data={data} />
    </div>
  );
};

export default AttenuatorTable;
