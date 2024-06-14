import ToggleButton from "react-toggle-button";

function PriceSorting({ sort, setSort }) {
  const styles = {
    trackStyle: {
      width: "50px",
      height: "20px",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: sort ? "#0E766E" : "white",
    },
    thumbStyle: {
      width: "25px",
      height: "25px",
      borderRadius: "50%",
      backgroundColor: sort ? "rgb(250,250,250)" : "rgb(62,130,247)",
      transition: "all 0.1s ease",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: sort ? "#0E766E" : "white",
      fontSize: "0.9rem",
    },
  };

  return (
    <div className="flex flex-col items-center gap-4 md:flex-row">
      <p>Trier par prix:</p>
      <ToggleButton
        inactiveLabel={""}
        activeLabel={""}
        colors={{
          activeThumb: {
            base: "rgb(250,250,250)",
          },
          inactiveThumb: {
            base: "#0E766E",
          },
          active: {
            base: "#0E766E",
            hover: "rgb(177, 191, 215)",
          },
          inactive: {
            base: "rgb(65,66,68)",
            hover: "rgb(95,96,98)",
          },
        }}
        trackStyle={styles.trackStyle}
        thumbStyle={styles.thumbStyle}
        thumbAnimateRange={[-10, 34]}
        value={sort}
        onToggle={(value) => {
          setSort(!value);
        }}
        thumbIcon={
          !sort ? (
            <i className="fas fa-arrow-up"></i>
          ) : (
            <i className="fas fa-arrow-down"></i>
          )
        }
      />
    </div>
  );
}

export default PriceSorting;
