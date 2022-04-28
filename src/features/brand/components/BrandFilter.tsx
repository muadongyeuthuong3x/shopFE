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
  sizes?: String[],
  price?: {
    priceMin: number,
    priceMax: number
  },
  limit?:number,
  page?:number
}

export interface Prop {
  onChangeOption:(option: FilterOption)=>void
}

const BrandFilter: FC<Prop> = ({onChangeOption}) => {
  const [data, setData] = useState([]);
  let filterOption:FilterOption={};
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
