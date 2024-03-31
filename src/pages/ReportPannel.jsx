// ReportPanel.jsx
import React, { useState } from 'react';
import ReportComponent from './ReportComponent';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const initialData = [
    { reportName: 'Report 1', size: '100 MB', time: '04:20:10', date: '04-07-2023'},
    { reportName: 'Report 2', size: '105 MB', time: '04:10:10', date: '04-07-2023'},
    { reportName: 'Report 3', size: '200 MB', time: '04:10:10', date: '05-07-2023'},
    { reportName: 'Report 4', size: '105 MB', time: '04:40:10', date: '06-07-2023'},
    { reportName: 'Report 5', size: '106 MB', time: '05:10:10', date: '07-07-2023'},
    { reportName: 'Report 6', size: '205 MB', time: '06:15:13', date: '08-07-2023'},
    { reportName: 'Report 7', size: '189 MB', time: '04:10:10', date: '12-07-2023'},
    { reportName: 'Report 8', size: '156 MB', time: '04:10:10', date: '04-07-2023'},
];


const ReportPanel = () => {
  const [data, setData] = useState(initialData);
  const [deletedItem, setDeletedItem] = useState(null);
  const [showUndoMessage, setShowUndoMessage] = useState(false);

  const handleDownload = (data) => {
    alert(`Clicked on download for ${data.reportName}`);
  };

  const handleDelete = (row) => {
    // Store the deleted item for undo functionality
    setDeletedItem(row);
    setShowUndoMessage(true);
    console.log(row)
    // Remove the item from the data array
    setData((prevData) =>
      prevData.filter((item) => item.reportName !== row.reportName)
    );

    // Automatically hide the undo message after 5 seconds
    setTimeout(() => {
      setShowUndoMessage(false);
      setDeletedItem(null);
    }, 5000);
  };
  const handleEdit = (data) => {
    alert(`Clicked on edit for ${data.reportName}`);
  };

  const handleView = (data) => {
    alert(`Clicked on view for ${data.reportName}`);
  };

  const handleUndo = () => {
    // Restore the deleted item
    setData((prevData) => [...prevData, deletedItem]);
    setShowUndoMessage(false);
  };

  const columns = [
    { Header: 'Report Name', accessor: 'reportName' },
    { Header: 'Size', accessor: 'size' },
    { Header: 'Time', accessor: 'time' },
    { Header: 'Date', accessor: 'date' },
    {
      Header: 'Actions',
      accessor: 'actions',
      Cell: ({ row }) => (
        <div className="flex space-x-4">
          <button className='text-lg' onClick={() => handleDownload(row.original)}><MdOutlineFileDownload/></button>
          <button className='text-lg' onClick={() => handleEdit(row.original)}><FaRegEdit/></button>
          <button className='text-lg' onClick={() => handleDelete(row.original)}><MdDeleteOutline/></button>
        </div>
      ),
    },
    {
      Header: 'View',
      accessor: 'view',
      Cell: ({ row }) => (
        <button onClick={() => handleView(row.original)}>View Report</button>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
    {showUndoMessage && (
        <div className="bg-[#0b1739] p-2 mb-2 text-white rounded-md">
        {deletedItem && (
            <>
            {deletedItem.reportName} deleted.{' '}
            <button className="underline" onClick={handleUndo}>
                Undo
            </button>
            </>
        )}
        </div>
    )}
    <ReportComponent columns={columns} data={data} handleDelete={handleDelete} />
    </div>
  );
};

export default ReportPanel;
