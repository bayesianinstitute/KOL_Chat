import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Loading = () => {
    return (
        <Box sx={{ width: '100%',  bgcolor:"red"}}>
          <LinearProgress />
        </Box>
      );
}

export default Loading
