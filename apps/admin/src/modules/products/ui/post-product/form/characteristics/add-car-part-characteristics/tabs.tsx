import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { FC } from 'react';
import Tabs from '@mui/material/Tabs';

interface IProps {
  onChange: (_: unknown, page: '1' | '2' | '3') => void;
  value: '1' | '2' | '3';
}

export const CustomTabs: FC<IProps> = ({ onChange, value }) => {
  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: 'divider',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Tabs
        {...{ value, onChange }}
        aria-label="lab API tabs example"
        sx={{
          width: 'fit-content',
        }}
      >
        <Tab label="Типы запчасть" value="1" />
        <Tab label="Бренды" value="2" />
        <Tab label="Серии" value="3" />
      </Tabs>
    </Box>
  );
};
