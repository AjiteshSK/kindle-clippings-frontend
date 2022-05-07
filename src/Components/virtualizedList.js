import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";

// const renderRow = ({ index, style }) => {
//   return (
//     <ListItem style={style} key={index} component="div" disablePadding>
//       <ListItemButton>
//         <ListItemText primary={`${list[index]}`} />
//       </ListItemButton>
//     </ListItem>
//   );
// };

const VirtualizedList = ({ list, setSelectedValue }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 400,
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={list.length}
        overscanCount={5}
      >
        {({ index, style }) => {
          return (
            <ListItem style={style} key={index} component="div" disablePadding>
              <ListItemButton
                onClick={() => {
                  setSelectedValue(list[index]);
                }}
              >
                <ListItemText primary={`${list[index]}`} />
              </ListItemButton>
            </ListItem>
          );
        }}
      </FixedSizeList>
    </Box>
  );
};

export default VirtualizedList;
