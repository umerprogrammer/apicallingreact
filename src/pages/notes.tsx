import { Box, Button, Container, IconButton } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';
import Delete from '@mui/icons-material/Delete';
import PublishIcon from '@mui/icons-material/Publish';
import BAGrid from "../components/BAGrid";
import axios from "axios";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Notes() {
    let [userList, setUser] = useState<any>([]);
    let [isLoading, setLoading] = useState(false);

    let getUserData = () => {
        setLoading(true);
        axios.get('http://jsonplaceholder.typicode.com/users').then((data) => {
            console.log(data.data, "DataLog");
            setUser([...data.data]);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
            setLoading(false);
        })
    }
    return <>
        <Container maxWidth="sm" sx={{ marginTop: "10px", display: "flex", gap: "3px" }}>

            <Button variant="contained" onClick={getUserData} startIcon={<RefreshIcon />}>Get Data</Button>
            <Button variant="contained" color="error" startIcon={<Delete />}>Delete</Button>
            <Button variant="outlined" color="secondary" startIcon={<PublishIcon />}>Update Data</Button>
        </Container>

        <BAGrid loading={isLoading} gridCols={[{
            colName: "Name",
            colValue: "['name']",
        }, {
            colName: "User Name",
            colValue: "['username']",
        },
        {
            colName: "Email",
            colValue: "['email']",
        },
        {
            colName: "Address",
            colValue: "['address']['city']",
        },
        {
            colName: "",
            colValue: "",
            displayField: (row: any) => {
                return <Box>
                    <IconButton color="error" onClick={() => {
                        console.log(row);
                    }} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>

                    <IconButton color="primary" onClick={() => {
                        console.log(row);
                    }} aria-label="delete">
                        <EditIcon />
                    </IconButton>
                </Box>

            }
        }]} gridData={userList} />

    </>

}