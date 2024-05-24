const StatusModal = ({ isOpen, onClose, onSave, status, setStatus }: any) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: any) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <h2 className="text-lg font-semibold mb-4">Change Status</h2>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="block w-full px-4 py-2 mb-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option>Select Status</option>
          <option value="APPROVED">APPROVED</option>
          <option value="REJECTED">REJECTED</option>
        </select>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 mr-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusModal;
