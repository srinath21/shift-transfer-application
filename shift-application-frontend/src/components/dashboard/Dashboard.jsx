import React from "react";
import { DataGrid } from '@mui/x-data-grid'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box, Button, Grid2 as Grid } from "@mui/material";
import TaskDetails from "./TaskDetails";

const Dashboard = () => {
    const [isDetailsOpen, setIsDetailsOpen] = React.useState(false);
    const [selectedTaskDetails, setSelectedTaskDetails] = React.useState(null);

    const testDataCritical = [
        {
            ID: 1,
            TaskTitle: "Task 1",
            Details: "Details for Task 1",
            Source: "",
            ShiftAssigned: "Morning",
            Status: "Pending",
            Priority: 3
        },
        {
            ID: 2,
            TaskTitle: "Task 2",
            Details: "Details for Task 2",
            Source: "",
            ShiftAssigned: "Morning",
            Status: "Pending",
            Priority: 2
        },
        {
            ID: 3,
            TaskTitle: "Task 3",
            Details: "Details for Task 3",
            Source: "",
            ShiftAssigned: "Morning",
            Status: "Pending",
            Priority: 2
        },
        {
            ID: 4,
            TaskTitle: "Task 4",
            Details: "Details for Task 4",
            Source: "",
            ShiftAssigned: "Morning",
            Status: "Pending",
            Priority: 1
        }
    ];

    const columns = [
        { field: 'TaskTitle', headerName: 'Task Name', flex: 1 },
        {
            field: 'Priority', headerName: 'Priority', flex: 1, valueFormatter: (value) => {
                if (value === 1) {
                    return "Low";
                }
                else if (value === 2) {
                    return "Medium";
                }
                else if (value === 3) {
                    return "High";
                }
            }
        },
        { field: 'Status', headerName: 'Status', flex: 1 }
    ]

    return (
        <div>
            <Grid container spacing={2}>
                <Grid size={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker />
                    </LocalizationProvider>
                    <Button sx={{ margin: "10px" }} variant="contained">
                        Search
                    </Button>
                </Grid>
                <Grid size={6} sx={{ padding: "10px" }}>
                    <Button sx={{ float: "right" }} variant="contained" onClick={() => setIsDetailsOpen(true)}>
                        Add New Task
                    </Button>
                </Grid>
            </Grid>
            <Grid>
                Tasks
                <DataGrid
                    getRowId={(row) => row.ID}
                    rows={testDataCritical}
                    columns={columns}
                    pageSizeOptions={[5, 10]}
                    onRowClick={(params, event) => {
                        setSelectedTaskDetails(params.row)
                        setIsDetailsOpen(true);
                    }}
                />
            </Grid>

            {
                isDetailsOpen ?
                    <TaskDetails open={isDetailsOpen} close={() => setIsDetailsOpen(false)} taskDetails={selectedTaskDetails} />
                    : null
            }
        </div >
    )
}

export default Dashboard;