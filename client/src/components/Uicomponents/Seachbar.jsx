import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import {youtubeApiInstance} from "../../youtube";
import { Alert } from "@mui/material";
const Seachbar = ({setSearchResults}) => {
  const [value, setValue] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(value);
      const {status,data} = await youtubeApiInstance
        .get("/search", {
          params: {
            q: value,
          },
        });
        if(status==200){
            setSearchResults(data);
        }
        else{
            alert("no results try to search again ")
        }
        
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search By Keywords"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={handleSubmit}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Seachbar;
