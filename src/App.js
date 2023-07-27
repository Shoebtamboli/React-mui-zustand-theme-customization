import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Box,
  Drawer,
  List,
  ListItem,
  Grid,
  Paper,
  FormControl,
  Stack,
  RadioGroup,
  FormControlLabel,
  Radio,
  Slider,
  Typography,
  IconButton,
  Tooltip,
  Fab,
  Switch,
  FormGroup,
  Divider
} from "@mui/material";
import { useThemeStore } from "./themeStore";
import { Settings } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import "./App.css"; // Import custom CSS file for animations
import NavigationBar from "./NavigationBar";

const drawerWidth = 340;

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be"
      }
    }
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`
    }
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2
  }
}));

const colorOptions = [
  "#1D5B79",
  "#AAC8A7",
  "#FCE9F1",
  "#643843",
  "#BE5A83",
  "#57C5B6"
];

const App = () => {
  const {
    theme,
    toggleMode,
    setPrimaryColor,
    setBorderRadius,
    setFontFamily
  } = useThemeStore();
  const [selectedColor, setSelectedColor] = useState(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleBorderRadiusChange = (event, value) => {
    setBorderRadius(value);
  };

  const handleFontFamilyChange = (event) => {
    setFontFamily(event.target.value);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handlePrimaryColorChange = (color) => {
    setSelectedColor(color);
    setPrimaryColor(color);
  };

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Tooltip arrow title="Live Customize">
          <Fab
            component="div"
            onClick={toggleDrawer}
            size="medium"
            variant="circular"
            color="secondary"
            sx={{
              borderRadius: 0,
              borderTopLeftRadius: "50%",
              borderBottomLeftRadius: "50%",
              borderTopRightRadius: "50%",
              borderBottomRightRadius: "4px",
              top: "25%",
              position: "fixed",
              right: 10,
              zIndex: (theme) => theme.zIndex.speedDial
            }}
          >
            <IconButton
              color="inherit"
              size="large"
              disableRipple
              onClick={toggleDrawer}
              sx={{
                animation: "rotate 2s linear infinite"
              }}
              //className={isDrawerOpen ? "rotate" : ""} // Add 'rotate' class when the drawer is open
            >
              <Settings />
            </IconButton>
          </Fab>
        </Tooltip>

        <Drawer
          variant="persistent"
          anchor="right"
          open={isDrawerOpen}
          onClose={handleCloseDrawer}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            //display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          <List>
            <Box sx={{ p: 2 }}>
              <Stack direction="row" justifyContent="space-between">
                <Stack>
                  <Typography variant="h5" gutterBottom>
                    THEME CUSTOMIZER
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Customize & Preview in Real Time
                  </Typography>
                </Stack>
                <IconButton
                  size="small"
                  disableRipple
                  onClick={handleCloseDrawer}
                >
                  <CloseIcon />
                </IconButton>
              </Stack>
            </Box>
            <Divider />
            <Typography
              varinat="body1"
              color="text.secondary"
              sx={{ textTransform: "uppercase", p: 2 }}
            >
              Theming
            </Typography>

            <ListItem>
              <FormControl component="fieldset">
                <Typography variant="body1">Primary Color</Typography>

                <Grid container spacing={2}>
                  {colorOptions.map((color) => (
                    <Grid key={color} item xs={4}>
                      <Paper
                        component={Box}
                        sx={{
                          height: 30,
                          width: 30,
                          backgroundColor: color,
                          cursor: "pointer",
                          transform:
                            selectedColor === color ? "scale(1.2)" : "scale(1)",
                          transition: "transform 0.3s ease"
                        }}
                        onClick={() => handlePrimaryColorChange(color)}
                      />
                    </Grid>
                  ))}
                </Grid>
              </FormControl>
            </ListItem>
            <ListItem>
              <Typography id="border-radius-slider" gutterBottom>
                Border Radius
              </Typography>

              <Slider
                size="small"
                value={theme.shape.borderRadius}
                onChange={handleBorderRadiusChange}
                valueLabelDisplay="on"
                aria-labelledby="discrete-slider-small-steps"
                marks
                step={2}
                min={0}
                max={24}
              />
            </ListItem>
            <ListItem>
              <FormGroup>
                <Typography variant="body1">Mode</Typography>
                <FormControlLabel
                  control={
                    <MaterialUISwitch
                      onChange={toggleMode}
                      value={theme.palette.mode}
                      sx={{ m: 1 }}
                    />
                  }
                />
              </FormGroup>
            </ListItem>

            <ListItem>
              <FormControl>
                <Typography variant="body1">Font Family</Typography>
                <RadioGroup
                  aria-label="font-family"
                  value={theme.typography.fontFamily}
                  onChange={handleFontFamilyChange}
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value={`Roboto`}
                    control={<Radio />}
                    label="Roboto"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        color: (theme) => theme.palette.grey[900]
                      }
                    }}
                  />
                  <FormControlLabel
                    value={`Narnoor`}
                    control={<Radio />}
                    label="Narnoor"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        color: (theme) => theme.palette.grey[900]
                      }
                    }}
                  />
                  <FormControlLabel
                    value={`Agdasima`}
                    control={<Radio />}
                    label="Agdasima"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        color: (theme) => theme.palette.grey[900]
                      }
                    }}
                  />
                  <FormControlLabel
                    value={`Inter`}
                    control={<Radio />}
                    label="Inter"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        color: (theme) => theme.palette.grey[900]
                      }
                    }}
                  />
                </RadioGroup>
              </FormControl>
            </ListItem>
          </List>
          <Divider />
        </Drawer>
        {/* Render the rest of your app content */}
        <Box sx={{ flexGrow: 1, p: 3 }}>
          {/* Your app content goes here */}
          <NavigationBar />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
