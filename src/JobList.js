import {Divider} from '@mui/material'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper'

export default function JobList(){

    return (
        <Paper>
            <Box>
                <Typography variant="h6" gutterBottom>
                    Front End Software Developer
                </Typography>
                <Divider />
            </Box>
            <Box>
                <Divider />
            </Box>
            <Box>
                <Divider />
            </Box>
        </Paper>
    )
}