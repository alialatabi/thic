import { createContext, useState } from "react";

const ServiceContext = createContext({});

export const ServiceProvider = ({ children }) => {
  const [image, setImage] = useState();
  const [text, setText] = useState("");

  return (
    <ServiceProvider.Provider
      value={{
        image,
        setImage,
        text,
        setText,
      }}
    >
      {children}
    </ServiceProvider.Provider>
  );
};

export default ServiceContext;
