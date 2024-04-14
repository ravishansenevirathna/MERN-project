import {useEffect, useState} from "react";
import instance from "../../service/AxiosOrder.jsx";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Popup from "./Popup.jsx";


export default function View(){

    const  [data,setData] = useState([]);
    const  [updateData,setUpdateData] = useState();
    const  [open,setOpen] = useState(false);

    useEffect(() => {
        datagannaFunctioneka()
        console.log("use effcet called")
    },[]);


    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'student_name', headerName: 'Student Name', width: 140 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        { field: 'student_address', headerName: 'Student Address', width: 150 },
        {
            field: 'phoneno',
            headerName: 'Student Contact',
            type: 'number',
            width: 120,
        },
    {
        field: 'updateButton',
            headerName: 'Update',
        width: 90,
        renderCell: (params) => (
            <div>
                {/*<button onClick={() => handleUpdate(params.row)}>Update</button>*/}
                <Stack direction="row" spacing={2}>
                    <Button color="secondary"onClick={() => handleUpdate(params.row)}>Update</Button>
                </Stack>

            </div>
        ),
    },
        {
            field: 'deleteButton',
            headerName: 'Delete',
            width: 90,
            renderCell: (params) => (
                // <button onClick={() => handleDelete(params.row.id)}>Delete</button>
                <Stack direction="row" spacing={2}>
                    <Button color="error"onClick={() => handleDelete(params.row.id)}>Delete</Button>
                </Stack>
    ),
    },
        ];

    const handleDelete = (id) => {
        // Handle delete logic here
        console.log('Delete clicked for row with ID:', id);

        instance.delete(`/student/delete/${id}`,{



        })
            .then(response => {
                datagannaFunctioneka();

            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleUpdate = (row) => {
        setUpdateData(row)
        setOpen(true);
    };

    const modelClose = () =>{
        setOpen(false);
        datagannaFunctioneka();
    }

    const datagannaFunctioneka=()=>{

        instance({
            method:'get',
            url:'/student/getAll',

        })
            .then(function (response){
            const array=[];
                response.data.forEach(val=>{
                    array.push({
                        id:val.id,
                        student_name:val.student_name,
                        age:val.student_age,
                        student_address:val.student_address,
                        phoneno:val.student_contact,
                    });
                    console.log(response)
                });
                setData(array);

            })
        const tableSet = () =>{
            datagannaFunctioneka()

        }


    }
    return(
        <div style={{ height: 400, width: '100%' }}>

            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />

            {open &&
                <Popup updateData={updateData} open={open} handleClose={modelClose}/>
            }
        </div>
    );
}
