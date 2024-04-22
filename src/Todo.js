import { ListItem, ListItemText, InputBase, Checkbox, 
    ListItemSecondaryAction, IconButton } from "@mui/material";
import { DeleteOutlined } from "@material-ui/icons";
import React,{useState} from "react";

const Todo = (props) => {
    //let title = props.item;
    const deleteItem = props.deleteItem;
    const editItem = props.editItem;

    // item 상태 변수
    const [item, setItem ] = useState(props.item);
    const [readOnly, setReadOnly] = useState(true);

    const deleteEventHandler = () => {
        deleteItem(item);
    }

    const turnOffReadOnly = () => {
        setReadOnly(false);
    }

    const turnOnReadOnly = (e) => {
        if( e.key === 'Enter' && readOnly === false) {
          setReadOnly(true);
          editItem(item);
        }
    }

    const editEventHandler = (e) => {
        setItem({...item, title: e.target.value});
    }

    const checkboxEventHandler = (e) => {
        item.done = e.target.checked;
        editItem(item);
    }

    return  (
        <ListItem>
            <Checkbox onChange={checkboxEventHandler}  checked={item.done} />
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label": "naked", readOnly: readOnly}}
                    onClick={turnOffReadOnly}
                    onKeyPress={turnOnReadOnly}
                    onChange={editEventHandler}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton onClick={deleteEventHandler} aria-label="Delete Todo">
                    <DeleteOutlined />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );    

};

export default Todo;