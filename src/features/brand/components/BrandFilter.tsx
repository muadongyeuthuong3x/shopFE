import { Box } from '@mui/material';
import { api } from 'api/api';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { sizeOptions, type } from '../brand';
import BrandFilterWidget from './BrandFilterWidget';
import FilterByPrice from './FilterByPrice';
import FilterBySize from './FilterBySize';
import FilterByType from './FilterByType';

export interface FilterOption {
  typeId?: number;
  sizes?: number[],
    priceMin?: number,
    priceMax?: number
  limit?:number,
  page?:number
}

export interface Prop {
  onChangeOption:(option: FilterOption)=>void
}

let filterOption:FilterOption={};
const BrandFilter: FC<Prop> = ({onChangeOption}) => {
  const [data, setData] = useState([]);
  const path:any= useParams();
  const brandId= path?.slug.split('-')[path?.slug.split('-').length-1];

  useEffect(()=>{
    const getData= async()=>{
      const res =await api.get(`type/all?brandId=${brandId}`);
      const convertDataType= res?.data?.types?.rows?.map((obj: any) => ({
        ...obj,
        name: obj.typeName, 
      }))
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

  const handleFilterPrice=(option:any)=>{
    filterOption={
      ...filterOption,
      ...option
    }
    onChangeOption(filterOption)
  }
  
  const handleFilterSize=(arrSizeId:number[])=>{
    filterOption={
      ...filterOption,
      sizes:arrSizeId
    }
    onChangeOption(filterOption)
  }

  return (
    <Box marginTop="25px">
      <BrandFilterWidget title="Loại">
        <FilterByType options={data} onSelect={handleSelectType} />
      </BrandFilterWidget>
      <BrandFilterWidget title="Giá">
        <FilterByPrice onFilterPrice={handleFilterPrice} />
      </BrandFilterWidget>
      <BrandFilterWidget title="Size">
        <FilterBySize onFilterSize={handleFilterSize} />
      </BrandFilterWidget>
    </Box>
  );
};

export default BrandFilter;
