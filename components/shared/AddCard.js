import React from 'react'
import { Avatar } from "@mui/material";
import { MdAdd } from "react-icons/md";
import { COLORS } from "../../assets/theme/theme";
import { ProfileDetails } from "../../styles/dashboard.style";

const AddProvider = ({title, children}) => {
    return (
        <ProfileDetails>
          {/* Card Header */}
          <div className="flex items-center justify-between">
            {/* title */}
            <h3>{title}</h3>
            {/* button */}
            {/* <Button>Edit Profile</Button> */}
          </div>
  
          {/* Circle Avatar */}
          <div className="relative inline-block w-fit mt-6">
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 87, height: 87 }}
            />
            {/* Absolute + button */}
            <div className="absolute right-2 bottom-0">
              {/*====  + icons =====*/}
              <Avatar
                className=" text-kwhite"
                sx={{ width: 23, height: 23, backgroundColor: COLORS.kgreen }}
              >
                <MdAdd />
              </Avatar>
            </div>
          </div>

          {children}
        </ProfileDetails>
    );
};

export const NewCard = ({name, image, children}) => {
  return (
    <div className =' w-[462px] bg-white rounded flex flex-col mx-auto px-4 pb-6 pt-4'>
        {/* titile */}
        <h3>{name}</h3>
        {/* image */}
        {/* Circle Avatar */}
        {
          image && <div className='relative inline-block w-fit mt-6'>
          <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 87, height: 87 }}
          />
          {/* Absolute + button */}
          <div className='absolute right-2 bottom-0'>
              {/*====  + icons =====*/}
              <Avatar className = " text-kwhite" sx={{ width: 23, height: 23, backgroundColor: COLORS.kgreen }}>
                  <MdAdd/>
              </Avatar>
          </div>
        </div>
        }
        

        {/* children */}
       {children}

        {/* button */}
    </div>
  )
}


export default AddProvider;