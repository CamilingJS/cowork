import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';


export default function CategoryMenu({categories}){
    return(
        <MenuList >
            {categories.map((category)=>{
                return(
                    <MenuItem dense disableGutters >
                    <ListItemText sx={{textAlign:'left'}}>{category}</ListItemText>
                    </MenuItem>
                )
            })}
        </MenuList>
    )
}