import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, Grid2 as Grid, InputLabel, MenuItem, Select } from '@mui/material';

const TaskDetails = (props) => {
    const [modifiedTaskDetails, setModifiedTaskDetails] = React.useState(props.taskDetails ? props.taskDetails : {
        TaskTitle: "",
        Details: "",
        Source: "",
        ShiftAssinged: "",
        Status: "Pending",
        Priority: null
    })

    const handleChange = (event, key) => {
        setModifiedTaskDetails({
            ...modifiedTaskDetails,
            [key]: event.target.value
        });
    }

    console.log(modifiedTaskDetails)

    return (
        <Dialog
            fullWidth={true}
            open={props.open}
            onClose={props.close}
        >
            <DialogTitle>{props.taskDetails?.ID ? props.TaskName : "Add a new task"}</DialogTitle>
            <DialogContent>
                <Grid container spacing={2} sx={{ py: 2 }}>
                    <Grid size={12}>
                        <TextField
                            label='Task Title'
                            variant='outlined'
                            type='text'
                            value={modifiedTaskDetails.TaskTitle}
                            onChange={(event) => handleChange(event, "TaskTitle")}
                        />
                    </Grid>
                    <Grid size={12}>
                        <TextField
                            label='Details'
                            fullWidth
                            multiline
                            rows={3}
                            variant='outlined'
                            type='text'
                            value={modifiedTaskDetails.Details}
                            onChange={(event) => handleChange(event, "Details")}
                        />
                    </Grid>
                    <Grid size={12}>
                        <TextField
                            label='Task Source'
                            variant='outlined'
                            type='text'
                            value={modifiedTaskDetails.Source}
                            onChange={(event) => handleChange(event, "Source")}
                        />
                    </Grid>
                    <Grid size={12}>
                        <FormControl
                            sx={{ width: "200px" }}
                        >
                            <InputLabel id="shift-label">Assigned Shift</InputLabel>
                            <Select
                                labelId='shift-label'
                                variant='outlined'
                                label="Assigned Shift"
                                value={modifiedTaskDetails.AssignedShift}
                                onChange={(event) => handleChange(event, "AssignedShift")}
                            >
                                <MenuItem value={1}>Morning</MenuItem>
                                <MenuItem value={2}>Afternoon</MenuItem>
                                <MenuItem value={3}>Evening</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid size={12}>
                        <TextField
                            label='Status'
                            variant='outlined'
                            type='text'
                            disabled={true}
                            value={modifiedTaskDetails.Status}
                            onChange={(event) => handleChange(event, "Status")}
                        />
                    </Grid>
                    <Grid size={12}>
                        <FormControl
                            sx={{ width: "150px" }}
                        >
                            <InputLabel id="priority-label">Priority</InputLabel>
                            <Select
                                labelId='priority-label'
                                variant='outlined'
                                label="Priority"
                                onChange={(event) => handleChange(event, "Priority")}
                                value={modifiedTaskDetails.Priority}
                            >
                                <MenuItem value={1}>Low</MenuItem>
                                <MenuItem value={2}>Medium</MenuItem>
                                <MenuItem value={3}>High</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.close}>Cancel</Button>
                <Button type="submit">{props.taskDetails?.ID ? "Update" : "Add"}</Button>
            </DialogActions>
        </Dialog>
    )
}

export default TaskDetails;