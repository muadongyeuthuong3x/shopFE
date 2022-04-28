import { Box } from '@mui/material';
import { api } from 'api/api';
import { FC, useEffect, useState } from 'react';
import { sizeOptions, type } from '../brand';
import BrandFilterWidget from './BrandFilterWidget';
import FilterByPrice from './FilterByPrice';
import FilterBySize from './FilterBySize';
import FilterByType from './FilterByType';

export interface FilterOption {
  typeId?: number;
  sizes?: String[],
  price?: {
    priceMin: number,
    priceMax: number
  }
}

export interface Prop {
  onChangeOption:(option: FilterOption)=>void
}

const BrandFilter: FC<Prop> = ({onChangeOption}) => {
  const [data, setData] = useState([]);
  let filterOption:FilterOption={};
  
  useEffect(()=>{
    const getData= async()=>{
      const res =await api.get('brand/all');
      console.log(res)
      const convertDataType= res.data.brands.rows.map((obj: any) => ({
        ...obj,
        name: obj.brandName, 
        image: obj.image.split(',')
      }))
      console.log(convertDataType)
      setData(convertDataType)
    }
    getData();
  },[])

  const handleSelectType=(id:any)=>{
    filterOption={
      ...filterOption,
      typeId:id
    }
    onChangeOption(filterOption)
  }
  return (
    <Box marginTop="25px">
      <BrandFilterWidget title="Loại">
        <FilterByType options={data} onSelect={handleSelectType} />
      </BrandFilterWidget>
      <BrandFilterWidget title="Giá">
        <FilterByPrice />
      </BrandFilterWidget>
      <BrandFilterWidget title="Size">
        <FilterBySize options={sizeOptions} />
      </BrandFilterWidget>
    </Box>
  );
};

export default BrandFilter;
