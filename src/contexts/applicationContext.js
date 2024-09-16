import { createContext,useContext } from "react";


export const ApplicationContext = createContext({
    username: "",
    password: "",
    phone_no: "",
    photo_img: "",
    passport_img: "",
    passport_data: {
      first_name: "",
      last_name: "",
      gender: "",
      passport_number: "",
      date_of_birth: "",
      passport_issue_on: "",
      passport_valid_til: ""
    },
    setUsername: () => {},
    setPassword: () => {},
    setPhoneNo: () => {},
    setPhotoImg: () => {},
    setPassportImg: () => {},
    setPassportData: () => {}
    }
);


export const UseApplicationContext = ()=>{
    return useContext(ApplicationContext);
}

export const ApplicationProvider = ApplicationContext.Provider;