import React, {useState} from "react";
import {Button, Grid, TextField} from "@mui/material"

const AddTodo = (props) => {
    const [item, setItem] = useState({title: ""});
    const addItem = props.addItem; // 부모가 전달해준 함수

    const onButtonClick = () => {
        addItem(item);
        setItem({title:""}); // 리렌더링 일어남
    }

    const onInputeChange = (e) => {
        setItem({title:e.target.value});
        console.log(item);
    }

    const enterEventHandler = (e) => {
        if( e.key === 'Enter') {
            onButtonClick();
        }
    }



    return(
        <Grid container style={{marginTop:20}}>
            <Grid xs={11} md={11} item style={{paddingRight:16}}>
                <TextField placeholder="Add Todo here" fullWidth 
                    onChange={onInputeChange} onKeyPress={enterEventHandler} value={item.title} />
            </Grid>
            <Grid xs={1} md={1} item>
                <Button fullWidth style={{height:'100%'}} color="secondary"
                 variant="outlined" onClick={onButtonClick}>
                    +
                </Button>
            </Grid>
        </Grid>
    );
}

export default AddTodo;