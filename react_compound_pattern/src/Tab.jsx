import React, { createContext, useContext } from "react"; // Import React
import "./App.css";

// Create context
const TabContext = createContext(null);

// Main Tab component
export default function Tab({ onChanges, tabIndex, children }) {
  return (
    <div>
      <TabContext.Provider value={{ onChanges, tabIndex }}>
        {children}
      </TabContext.Provider>
    </div>
  );
}

// Header component
Tab.Header = function Header({ children }) {
  return <div className="tabheader">{children}</div>;
};

// Header items component
Tab.HeaderItems = function HeaderItems({ children, label ,index}) {
  const { onChanges } = useContext(TabContext);
  const handleChangeTab = (index) => {
    onChanges(index);
  };
  return <div className="tabItems" onClick={()=>handleChangeTab(index)}>{label}</div>;
};

// Item container component
Tab.ItemContainer = function ItemContainer({ children }) {
  return <div>{children}</div>;
};

// Container items component
Tab.ContainerItems = function ContainerItems({ index }) {
  const { tabIndex } = useContext(TabContext);
  //alert(tabIndex===index)
  return (
    <div className={tabIndex === index ? "active" : "not-active"}>
      i am container of tab {index}
    </div>
  );
};
