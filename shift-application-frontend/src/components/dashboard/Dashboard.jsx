import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

const Dashboard = () => {
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
        { field: 'Priority', headerName: 'Priority', flex: 1 },
        { field: 'Status', headerName: 'Status', flex: 1 }
    ]

    return (
        <div>

            Tasks
            <DataGrid
                getRowId={(row) => row.ID}
                rows={testDataCritical}
                columns={columns}
                sor
                pageSizeOptions={[5, 10]}
                onRowClick={() => { }}
            />

        </div>
    )
}

export default Dashboard;