import { useState } from "react";
import { useGiphyStore } from "../../hooks/useGiphyStore";
import { Box, Button, TextField, Typography } from "@mui/material";

export const GiphyPage = () => {
  const [name, setName] = useState("");
  const { startSavingGif, gif } = useGiphyStore();

  const handleSubmitGif = (event) => {
    event.preventDefault();
    startSavingGif(name);
    setName("");
  };
  return (
    <>
      <Box
        sx={{
          width: "500px",
          height: "150px",
          border: 2,
          borderRadius: 2,
          m: 2,
          p: 2,
        }}
      >
        <Box component={"form"} onSubmit={handleSubmitGif}>
          <TextField
            label="Ingrese Gif"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Button type="submit" variant="contained" size="large">
              verificando
            </Button>
          </Box>
        </Box>
      </Box>

      <Box>
        <Box>
          {/* <Typography variant="h3" component={"h2"}>{gif.map((item, index) => (<Typography variant="h3" component="h2" key={index}>{item.query}</Typography>))}</Typography> */}
          {gif.map((ite) => (
            <>
              <Typography variant="h3" component={"h2"} key={ite.title}>{ite.query}</Typography>
              {ite.newData.map((item) => (
              <Box key={item.title}>
                <img src={item.imagen} alt={item.title} />
                <Typography>{item.title}</Typography>
              </Box>
              ))}
            </>
          ))}
        </Box>
      </Box>
    </>
  );
};
