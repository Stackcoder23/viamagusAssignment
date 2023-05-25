import { Box, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from "dayjs";

export default function DateComponent() {
    const [fromDate, setFromDate] = useState(dayjs());
    const [duration, setDuration] = useState(0);
    const [toDate, setToDate] = useState(dayjs());

    useEffect(() => {
        let temp = dayjs(fromDate).add(duration, 'day');
        setToDate(temp);
    }, [fromDate, duration])

    return (
        <Grid container display="flex" justifyContent="center" alignItems="center" sx={{ height: '100vh', background: 'linear-gradient(#2eb62c, #c5e8b7)' }}>
            <Box sx={{ backgroundColor: '#f0ffff', width: '35%', borderRadius: '10px', padding: 2 }}>
                <Grid container display="flex" justifyContent="center">
                    <Grid item xs={12}>
                        <Typography variant="h5">Date</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                value={fromDate}
                                onChange={(newValue) => setFromDate(newValue)}
                                sx={{ width: '80%' }}
                                label="From Date"
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField value={duration} onChange={(e) => setDuration(e.target.value)} sx={{ width: '80%' }} label="Duration (In Days)" />
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: 2, marginBottom: 3 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                value={toDate}
                                sx={{ width: '80%' }}
                                label="To Date"
                            />
                        </LocalizationProvider>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}