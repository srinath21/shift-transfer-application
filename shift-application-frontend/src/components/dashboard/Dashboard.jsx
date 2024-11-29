import React, { useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box, Button, Grid2 as Grid, Typography } from "@mui/material";
import TaskDetails from "./TaskDetails";
import dayjs from 'dayjs'

const testDataCritical = [
    {
        ID: 1,
        TaskTitle: "Task 1",
        Details: "Details for Task 1",
        Source: "Salesforce",
        ShiftAssigned: "Morning",
        Status: 1,
        Priority: 3,
        UpdatedDate: new Date().toDateString()
    },
    {
        ID: 2,
        TaskTitle: "Task 2",
        Details: "Details for Task 2",
        Source: "Salesforce",
        ShiftAssigned: "Morning",
        Status: 1,
        Priority: 2,
        UpdatedDate: new Date().toDateString()
    },
    {
        ID: 3,
        TaskTitle: "Task 3",
        Details: "Details for Task 3",
        Source: "Salesforce",
        ShiftAssigned: "Morning",
        Status: 1,
        Priority: 2,
        UpdatedDate: new Date().toDateString()
    },
    {
        ID: 4,
        TaskTitle: "Task 4",
        Details: "Details for Task 4",
        Source: "Salesforce",
        ShiftAssigned: "Morning",
        Status: 1,
        Priority: 1,
        UpdatedDate: new Date().toDateString()
    }
];

const Dashboard = () => {
    const [isDetailsOpen, setIsDetailsOpen] = React.useState(false);
    const [selectedTaskDetails, setSelectedTaskDetails] = React.useState(null);
    const [taskList, setTaskList] = React.useState([]);
    const [selectedDate, setSelectedDate] = React.useState(dayjs(new Date()))

    useEffect(() => {
        if (localStorage.getItem("tasks") != null && Array.isArray(JSON.parse(localStorage.getItem("tasks")))) {
            setTaskList(JSON.parse(localStorage.getItem("tasks")));
        }
        else {
            localStorage.setItem("tasks", JSON.stringify(testDataCritical));
            setTaskList(testDataCritical);
        }
    }, []);

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
        {
            field: 'Status', headerName: 'Status', flex: 1, valueFormatter: (value) => {
                if (value === 1) {
                    return "Pending";
                }
                else if (value === 2) {
                    return "Completed";
                }
            }
        },
        { field: 'ShiftAssigned', headerName: 'Shift', flex: 1 },
    ]

    const handleSave = (modifiedTaskDetails) => {
        let newTaskList;
        // update
        if (selectedTaskDetails) {
            newTaskList = taskList.map(task => {
                if (task.ID === modifiedTaskDetails.ID) {
                    return {
                        ...modifiedTaskDetails,
                        UpdatedDate: new Date().toDateString()
                    }
                }

                return task;
            });
        }
        else {
            let id;
            taskList.forEach(task => {
                id = task.ID;
            });

            newTaskList = [
                ...taskList,
                {
                    ...modifiedTaskDetails,
                    ID: id + 1,
                    UpdatedDate: new Date().toDateString()
                }
            ]
        }

        setTaskList(newTaskList);
        localStorage.setItem("tasks", JSON.stringify(newTaskList));
        setIsDetailsOpen(false);
        setSelectedTaskDetails(null);
    }

    const handleSearch = () => {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        if (Array.isArray(tasks)) {
            let filteredTasks = tasks.filter(task => {
                console.log(task.UpdatedDate, new Date(selectedDate).toDateString())
                task.UpdatedDate === new Date(selectedDate).toDateString()
            })
            setTaskList(filteredTasks);
        }
        else {
            setTaskList([]);
        }
    }

    return (
        <div style={{ paddingTop: "1%" }}>
            <Grid container spacing={2} sx={{ py: 2 }}>
                <Grid size={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker value={selectedDate} onChange={(value) => {
                            setSelectedDate(value);
                        }} />
                    </LocalizationProvider>
                    <Button onClick={handleSearch} sx={{ margin: "10px" }} variant="contained">
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
                <Typography variant="h4">Tasks</Typography>
                <DataGrid
                    getRowId={(row) => row.ID}
                    rows={taskList}
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
                    <TaskDetails
                        open={isDetailsOpen}
                        close={() => {
                            setSelectedTaskDetails(null);
                            setIsDetailsOpen(false)
                        }}
                        save={handleSave}
                        taskDetails={selectedTaskDetails} />
                    : null
            }
        </div >
    )
}

export default Dashboard;