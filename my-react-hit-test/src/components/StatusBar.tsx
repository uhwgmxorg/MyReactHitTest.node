import { AppBar, Toolbar, Typography } from '@mui/material';

interface StatusBarProps {
    mode: string;
  }

const StatusBar = ({ mode }: StatusBarProps) => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="caption" sx={{
          fontSize: '1rem', 
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        }}>
          Current mode: {mode}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default StatusBar;