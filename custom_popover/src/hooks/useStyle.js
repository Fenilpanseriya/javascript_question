export default function useStyle(notifications = []) {

  if (notifications && notifications[0]?.location.startsWith("top")) {
    // top-left  top-right top-between
    let style = notifications.map((_, index) => {
      return {
        top: (index + 1) * 20 + 32 * index + "px",
        margin: "0.5rem",
        padding: "0.5rem",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
      };
    });
    return style;
  } 
  else if (notifications) {
    //bottom
    let style = notifications.map((_, index) => {
      return {
        bottom: (index + 1) * 20 + 32 * index + "px",
        margin: "1rem",
        padding: " 1rem",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
      };
    });
    return style;
  }
}
