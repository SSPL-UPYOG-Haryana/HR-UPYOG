import React from "react";
import { Link } from "react-router-dom";

const MigrationModuleCard = ({ Icon, moduleName, kpis = [], links = [], isCitizen = false, className, styles = {}, FsmHideCount }) => {
  const getIsExternal = (link) => {
    if (!link || typeof link !== "string") return false;
    return link.startsWith("http://") || link.startsWith("https://") || link.startsWith("//");
  };

  const migrationTextStyle = { color: "#db7e13" };

  return (
    <div
      className={className ? "employeeCard card-home customEmployeeCard" : "employeeCard card-home customEmployeeCard"}
      style={className ? {} : styles}
    >
      <div className="employeeCustomCard" style={{ width: "100%", height: "85%", position: "relative" }}>
        <span className="text-employee-card" style={migrationTextStyle}>{moduleName}</span>
        <span className="logo-removeBorderRadiusLogo" style={{ position: "absolute", right: "10%", top: "10%" }}>
          {Icon}
        </span>
        <div className="employee-card-banner">
          <div className="body" style={{ margin: "0px", padding: "0px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex" }}>
                <div style={{ width: "30%", height: "50px" }}>
                  <span
                    className="icon-banner-employee"
                    style={{ position: "absolute", left: "10%", top: "10%", borderRadius: "5px", boxShadow: "5px 5px 5px 0px #e3e4e3" }}
                  >
                    {Icon}
                  </span>
                </div>

                <div style={{ width: "70%" }}>
                  {kpis.length !== 0 && (
                    <div className="flex-fit" style={isCitizen ? { paddingLeft: "17px" } : {}}>
                      {kpis.map(({ count, label, link, external }, index) => {
                        const isExternal = external === true || getIsExternal(link);

                        return (
                          <div className="card-count" key={index} style={{ display: "flex", width: "100%", flexDirection: "column" }}>
                            <div style={{ marginLeft: "auto", display: "flex", flexDirection: "column-reverse", width: "100%" }}>
                              <div style={{ textAlign: "center" }}>
                                {link ? (
                                  isExternal ? (
                                    <a href={link} target="_blank" rel="noopener noreferrer" className="employeeTotalLink" style={migrationTextStyle}>
                                      {label}
                                    </a>
                                  ) : (
                                    <Link to={link} className="employeeTotalLink" style={migrationTextStyle}>
                                      {label}
                                    </Link>
                                  )
                                ) : null}
                              </div>
                              <div style={{ textAlign: "center" }}>
                                <span style={{ color: "#ae1e28", fontSize: "18px", fontFamily: "sans-serif", fontWeight: "bold" }}>
                                  {count || "-"}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div
                  className="links-wrapper"
                  style={{
                    width: "100%",
                    display: "flex",
                    fontSize: "0.8rem",
                    paddingLeft: "10px",
                    flexWrap: "wrap",
                    flexDirection: "row",
                    paddingTop: "10px",
                  }}
                >
                  {links.map(({ count, label, link, external }, index) => {
                    const isExternal = external === true || getIsExternal(link);

                    return (
                      <div className="link" key={index} style={{ paddingLeft: "5px", color: "#a1a5b7", display: "flex" }}>
                        {link ? (
                          <div style={{ display: "flex" }}>
                            {isExternal ? (
                              <a href={link} target="_blank" rel="noopener noreferrer" style={migrationTextStyle}>
                                {label}
                              </a>
                            ) : (
                              <Link to={link} style={migrationTextStyle}>{label}</Link>
                            )}
                            <span style={migrationTextStyle}>|</span>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export { MigrationModuleCard };
export default MigrationModuleCard;
