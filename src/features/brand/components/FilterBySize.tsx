import { FormControl, FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import * as React from 'react';
import { FC } from 'react';
import { api } from 'api/api';

export interface FilterBySizeProps {
  onFilterSize: (arrSizeId: number[])=>void;
}

export interface Isize {
    id: number,
    sizeNumber:String,
}

const FilterBySize: FC<FilterBySizeProps> = ({ onFilterSize }) => {
  const [sizes, setSizes] = React.useState<Isize[]>([]);
  const [selected, setSelected] = React.useState<number[]>([]);
  
  React.useEffect(()=>{
    const getAllSize= async()=>{
      const res = await api.get('size/all');
   
      setSizes(res?.data?.sizes?.rows)
    }
    getAllSize();
  },[])
    const handleSelected = (e:any) => {
    const selectEdSizeId= +e.target.value;
    
    const checkExit= selected.includes(selectEdSizeId);
    checkExit? setSelected( (pre:number[])=>pre.filter(i=>i!=selectEdSizeId)):
    setSelected( (pre:number[])=>[...pre, selectEdSizeId])
    onFilterSize(selected)
  };

  return (
    <FormControl component="fieldset" variant="standard">
      <FormGroup sx={{ flexDirection: 'row' }}>
        {sizes.map((item) => (
          <FormControlLabel
            sx={{ marginLeft: 0, marginRight: 0 }}
            key={item.id}
            control={
              <Checkbox
                checked={selected.includes(item.id)}
                onClick={handleSelected}
                value={item.id}
                sx={(theme) => ({
                  display: 'none',
                  '& + span': {
                    color: theme.palette.primary.contrastText,
                    display: 'block',
                    width: '48px',
                    height: '48px',
                    border: '1px solid #ced4da',
                    margin: '0 15px 15px 0',
                    lineHeight: '48px',
                    textAlign: 'center',
                    borderRadius: '4px',
                  },
                  '&.Mui-checked + span': {
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.primary.main,
                    border: `1px solid ${theme.palette.secondary.main}`,
                  },
                })}
              />
            }
            label={item.sizeNumber+''}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default FilterBySize;
