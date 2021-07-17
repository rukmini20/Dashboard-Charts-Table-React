import styles from "./index.module.scss";
import { Search as SearchIcon, Close as CloseIcon } from "@material-ui/icons";
import { IconButton, TextField, InputAdornment } from "@material-ui/core";
import { useState } from "react";

interface Props {
  type: string;
  placeholder: string;
  className?: any;
  name: string;
  onKeyPress: any;
}
const SearchTextField = ({
  placeholder,
  className,
  name,
  type,
  onKeyPress,
}: Props) => {
  const [value, setValue] = useState<string>("");
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.background}>
      <TextField
        fullWidth
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={handleChange}
        value={value?.trimLeft()}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            onKeyPress(value);
          }
        }}
        InputProps={{
          disableUnderline: true,
         startAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={onKeyPress.bind(this, value)}
                className={styles.textFieldIcon}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  setValue('')
                  onKeyPress(value)

                }}
                className={styles.textFieldIcon}
              >
                <CloseIcon className={value ?styles.hideIcon:''} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchTextField;