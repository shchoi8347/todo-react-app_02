import { ListItem, ListItemText, InputBase, Checkbox } from "@mui/material";
import React,{useState} from "react";

const Todo = (props) => {
    //let title = props.item;

    // item 상태 변수
    const [item, setItem ] = useState(props.item);

    return  (
        <ListItem>
            <Checkbox checked={item.done} />
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label": "naked"}}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
        </ListItem>
    );    

};

export default Todo;