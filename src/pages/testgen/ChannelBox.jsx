import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";


const ChannelBox = ({ onClose }) => {
  const [channels, setChannels] = useState([
    { id: 1, start: 0, stop: 90 },
    { id: 2, start: 0, stop: 90 },
    { id: 3, start: 0, stop: 0 },
    { id: 4, start: 90, stop: 90 },
  ]);

  const handleMinClick = (id) => {
    setChannels(channels.map(channel => {
      if (channel.id === id) {
        return { ...channel, start: 0, stop: 0 };
      }
      return channel;
    }));
  };

  const handleMaxClick = (id) => {
    setChannels(channels.map(channel => {
      if (channel.id === id) {
        return { ...channel, start: 90, stop: 90 };
      }
      return channel;
    }));
  };

  const handleInputChange = (id, field, value) => {
    setChannels(channels.map(channel => {
      if (channel.id === id) {
        return { ...channel, [field]: parseInt(value) };
      }
      return channel;
    }));
  };

  const handleSave = () => {
    // You can implement save functionality here
    console.log("Saving channels:", channels);
    onClose();
  };
  return (
    <div className="p-4 border border-gray-300 rounded">
      <div className="flex justify-end mb-2">
        {/* <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button> */}
        <button onClick={onClose} className=" text-white py-2 px-3 rounded"><IoMdClose className='text-xl'/></button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th>Channel</th>
            <th>Start</th>
            <th>Stop</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {channels.map(channel => (
            <tr key={channel.id}>
              <td>{channel.id}</td>
              <td>
                <input
                  type="number"
                  value={channel.start}
                  onChange={(e) => handleInputChange(channel.id, 'start', e.target.value)}
                  className=" border rounded px-2 py-1 mx-2 text-black"
                />
                -
              </td>
              
              <td>
                <input
                  type="number"
                  value={channel.stop}
                  onChange={(e) => handleInputChange(channel.id, 'stop', e.target.value)}
                  className=" border rounded px-2 py-1 mx-2 text-black"
                />
              </td>
              <td>
                <button onClick={() => handleMinClick(channel.id)} className="mr-2 bg-blue-500 text-white px-2 py-1 rounded">Min</button>
                <button onClick={() => handleMaxClick(channel.id)} className="bg-green-500 text-white px-2 py-1 rounded">Max</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChannelBox;
