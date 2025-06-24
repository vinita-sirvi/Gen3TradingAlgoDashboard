import React from "react";

const Database = () => {
  return (
    <div style={styles.container}>
        <div style={styles.dashboardContainer}>
            <div style={styles.miniDashboard}>
                <div style={styles.coll_code_box}>
                    <span style={styles.coll_code}>ALL TIME STATS</span>
                </div>
                <div style={styles.labelContainer}>
                    <div style={styles.coll_count_box}>
                        <span>Records: 0</span>
                    </div>
                </div>
                <div style={styles.deleteButton}>
                    <span>CLEAR</span>
                </div>
            </div>
            <div style={styles.miniDashboard}>
                <div style={styles.coll_code_box}>
                    <span style={styles.coll_code}>DAY STATS</span>
                </div>
                <div style={styles.labelContainer}>
                    <div style={styles.coll_count_box}>
                        <span>Records: 0</span>
                    </div>
                </div>
                <div style={styles.deleteButton}>
                    <span>CLEAR</span>
                </div>
            </div>
            <div style={styles.miniDashboard}>
                <div style={styles.coll_code_box}>
                    <span style={styles.coll_code}>INSTRUMENT DATA</span>
                </div>
                <div style={styles.labelContainer}>
                    <div style={styles.coll_count_box}>
                        <span>Records: 0</span>
                    </div>
                </div>
                <div style={styles.deleteButton}>
                    <span>CLEAR</span>
                </div>
            </div>
            <div style={styles.miniDashboard}>
                <div style={styles.coll_code_box}>
                    <span style={styles.coll_code}>ORDERS</span>
                </div>
                <div style={styles.labelContainer}>
                    <div style={styles.coll_count_box}>
                        <span>Records: 0</span>
                    </div>
                </div>
                <div style={styles.deleteButton}>
                    <span>CLEAR</span>
                </div>
            </div>
            <div style={styles.miniDashboard}>
                <div style={styles.coll_code_box}>
                    <span style={styles.coll_code}>TICK LIST</span>
                </div>
                <div style={styles.labelContainer}>
                    <div style={styles.coll_count_box}>
                        <span>Records: 0</span>
                    </div>
                </div>
                <div style={styles.deleteButton}>
                    <span>CLEAR</span>
                </div>
            </div>
            <div style={styles.miniDashboard}>
                <div style={styles.coll_code_box}>
                    <span style={styles.coll_code}>OPEN PRICES</span>
                </div>
                <div style={styles.labelContainer}>
                    <div style={styles.coll_count_box}>
                        <span>Records: 0</span>
                    </div>
                </div>
                <div style={styles.deleteButton}>
                    <span>CLEAR</span>
                </div>
            </div>
            {/* <div style={{...styles.miniDashboard, background: 'linear-gradient(45deg,rgba(240, 248, 255, 0.48),rgba(176, 224, 230, 0.69),rgba(135, 207, 235, 0.83), #4682B4)', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', border: '2px solid #eee'}}>
                <span style={{fontWeight: 'bold', letterSpacing: '2px'}}>COLD TELEMETRY UPLOAD</span>
            </div> */}
        </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(15px)",
    color: "#fff",
    width: "100%",
    height:"100%",
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  dashboardContainer: {
    width: '100%',
    height: '100%',
    margin: '3.5em 1em 1em 1em',
    padding: '0.5em 0',
    display:'flex',
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  },

  miniDashboard: {
    width: '300px',
    height: '300px',
    margin: "12px",
    borderRadius: "10px",
    backgroundColor: "rgba(255,255,255,0.2)",
    backdropFilter: "blur(20px)",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  coll_code_box: {
    width: '100%',
    height: '30%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: '10px 10px 0 0',
    display:"flex",
    justifyContent: "center",
    alignItems: 'center',
    borderBottom: '1px solid rgb(255, 0, 221)'
  },
  labelContainer: {
    padding: '0.5em',
    color: 'lightgreen'
  },

  coll_count_box: {
    padding:'10px'
  },

  deleteButton: {
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '0 0 10px 10px',
    width:'100%',
    height: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '25px',
    fontWeight: '800',
    letterSpacing: '10px',
    cursor: 'pointer'
  }
};

export default Database; 