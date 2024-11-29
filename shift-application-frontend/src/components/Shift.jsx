import React, { useState, useEffect } from "react";

const ShiftManager = () => {
  const [shifts, setShifts] = useState([
    { label: "Morning", start: "06:00", end: "14:00" },
  ]);

  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentShift, setCurrentShift] = useState("");

  
  useEffect(() => {
    const timerId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    const calculateShift = () => {
      const currentInMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();

      let foundShift = false;
      for (let i = 0; i < shifts.length; i++) {
        const { start, end } = shifts[i];
        const [startHours, startMinutes] = start.split(":").map(Number);
        const [endHours, endMinutes] = end.split(":").map(Number);

        const startInMinutes = startHours * 60 + startMinutes;
        const endInMinutes = endHours * 60 + endMinutes;

        
        if (currentInMinutes >= startInMinutes && currentInMinutes < endInMinutes) {
          setCurrentShift(`Shift: ${shifts[i].label} (${start} - ${end})`);
          foundShift = true;
          break;
        }
      }

      
      if (!foundShift) {
        setCurrentShift("Outside Working Hours");
      }
    };

    calculateShift();
  }, [currentTime, shifts]);

  
  const handleShiftChange = (index, field, value) => {
    const newShifts = [...shifts];
    newShifts[index][field] = value;
    setShifts(newShifts);
  };

  
  const addShift = () => {
    const newShift = { label: "New Shift", start: "00:00", end: "08:00" };
    setShifts([...shifts, newShift]);
  };

  
  const removeShift = (index) => {
    const newShifts = shifts.filter((_, i) => i !== index);
    setShifts(newShifts);
  };

  
  const resetShifts = () => {
    const resetShiftsData = shifts.map(shift => ({
        ...shift,
        start: "06:00",
        end: "14:00",   
      }));
      setShifts(resetShiftsData);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h3>Manage Shifts</h3>
      {shifts.map((shift, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <label>
            Shift Label:
            <input
              type="text"
              value={shift.label}
              onChange={(e) => handleShiftChange(index, "label", e.target.value)}
              style={{
                marginLeft: "10px",
                padding: "5px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </label>
          <label style={{ marginLeft: "10px" }}>
            Start Time:
            <input
              type="time"
              value={shift.start}
              onChange={(e) => handleShiftChange(index, "start", e.target.value)}
              style={{
                marginLeft: "10px",
                padding: "5px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </label>
          <label style={{ marginLeft: "10px" }}>
            End Time:
            <input
              type="time"
              value={shift.end}
              onChange={(e) => handleShiftChange(index, "end", e.target.value)}
              style={{
                marginLeft: "10px",
                padding: "5px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </label>

          {/* Remove Shift Button */}
          <button
            onClick={() => removeShift(index)}
            style={{
              marginLeft: "10px",
              padding: "5px",
              borderRadius: "4px",
              backgroundColor: "red",
              color: "white",
              border: "none",
            }}
          >
            Remove
          </button>
        </div>
      ))}

      {/* Add Shift Button */}
      <button
        onClick={addShift}
        style={{
          padding: "10px 15px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          marginBottom: "15px",
        }}
      >
        Add Shift
      </button>

      {/* Reset Shifts Button */}
      <button
        onClick={resetShifts}
        style={{
          padding: "10px 15px",
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          borderRadius: "4px",
          marginBottom: "15px",
        }}
      >
        Reset Shifts
      </button>

      {/* Current Time & Shift Information */}
      <div style={{ marginTop: "20px" }}>
        <p>
          <strong>Current Time:</strong> {currentTime.toLocaleTimeString()}
        </p>
        <p>
          <strong>Current Shift:</strong> {currentShift}
        </p>
      </div>
    </div>
  );
};

export default ShiftManager;
