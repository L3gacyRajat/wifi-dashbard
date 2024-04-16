import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Testcase from "./Testcase";

const TestCaseConfiguration= () => {
  const [testcases, setTestcases] = useState(["TestCase_1"]);
  const [testcasesCount, setTestcasesCount] = useState(1);

  const addNewTestcase = () => {
    const newTestcaseNo = `TestCase_${testcasesCount + 1}`;
    setTestcases((testcases) => [...testcases, newTestcaseNo]);
    setTestcasesCount(testcasesCount + 1);
  };

  const deleteTestcase = (testcaseno) => {
    const updatedTestcases = testcases.filter((tc) => tc !== testcaseno);
    setTestcases(updatedTestcases);

    // Update the count based on the remaining test cases
    const lastTestcase = updatedTestcases[updatedTestcases.length - 1];
    if (lastTestcase) {
      const count = parseInt(lastTestcase.split("_")[1]);
      setTestcasesCount(count);
    } else {
      setTestcasesCount(0);
    }
  };

  const moveTestcaseUp = (index) => {
    if (index === 0) return; // Cannot move the first test case up
    const updatedTestcases = [...testcases];
    const temp = updatedTestcases[index];
    updatedTestcases[index] = updatedTestcases[index - 1];
    updatedTestcases[index - 1] = temp;
    setTestcases(updatedTestcases);
  };

  const moveTestcaseDown = (index) => {
    if (index === testcases.length - 1) return; // Cannot move the last test case down
    const updatedTestcases = [...testcases];
    const temp = updatedTestcases[index];
    updatedTestcases[index] = updatedTestcases[index + 1];
    updatedTestcases[index + 1] = temp;
    setTestcases(updatedTestcases);
  };

  const handleCreate = () => {
    const inputElement = document.getElementById("testcase");
    const count = parseInt(inputElement.value);
    if (!isNaN(count) && count > 0) {
      const newTestcases = [];
      for (let i = 0; i < count; i++) {
        const newTestcaseNo = `TestCase_${testcasesCount + i + 1}`;
        newTestcases.push(newTestcaseNo);
      }
      setTestcases([...testcases, ...newTestcases]);
      setTestcasesCount(testcasesCount + count);
      inputElement.value = ""; // Clear input field after creating test cases
    }
  };

  return (
    <>
      <div className="p-2 font-semibold mt-3 mb-3">TestCaseConfiguration</div>
      <div className="flex justify-between">
        <button
          onClick={addNewTestcase}
          type="button"
          className="flex items-center px-3 py-2 gap-1 rounded-md bg-purple text-white"
        >
          Add TestCase
          <FaPlus />
        </button>
        <div className="flex gap-4">
          <input
            type="number"
            id="testcase"
            name="testcase"
            min="1"
            placeholder="Enter no testcases"
            className="placeholder:text-textcolor w-[155px] p-2 outline-none bg-background-color"
          />
          <button
            onClick={handleCreate}
            type="button"
            className="px-2 py-2 rounded-md bg-purple text-white"
          >
            Create
          </button>
        </div>
      </div>
      {testcases.map((testcaseno, index) => (
        <Testcase
          key={index}
          testcaseno={testcaseno}
          onDelete={deleteTestcase}
          onMoveUp={() => moveTestcaseUp(index)}
          onMoveDown={() => moveTestcaseDown(index)}
        />
      ))}
    </>
  );
};

export default TestCaseConfiguration;
