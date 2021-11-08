import React from "react";
import moment from "moment";

const Calendar = () => {
  return (
    <React.Fragment>
      <div>
        {/* <style */}
        {/* // dangerouslySetInnerHTML={{ */}
        {/* //   __html: */}
        {/* //     '\ntable {\n  border-collapse: collapse;\n  width: 100%;\n  font-family: "Inter", sans-serif;\n}\n\nth {\n  padding: 8px;\n  text-align: auto;\n  border-left: 1px solid #DDD;\n  border-bottom: 1px solid #DDD;\n  background-color: #ecf4f7;\n}\ntd {\n  padding: 8px;\n  text-align: left;\n  border-left: 1px solid #DDD;\n}\n', */}
        {/* // }} */}
        {/* // /> */}
        <table className="calendar-wrapper">
          <tbody>
            <tr>
              <th className="calendar-left-header">Today</th>
              <th className="calendar-header">
                {moment().add(1, "days").format("dddd")}
              </th>
              <th className="calendar-header">
                {moment().add(2, "days").format("dddd")}
              </th>
              <th className="calendar-header">
                {moment().add(3, "days").format("dddd")}
              </th>
              <th className="calendar-header">
                {moment().add(4, "days").format("dddd")}
              </th>
              <th className="calendar-header">
                {moment().add(5, "days").format("dddd")}
              </th>
              <th className="calendar-header">
                {moment().add(6, "days").format("dddd")}
              </th>
            </tr>
            <tr>
              <td
                className="calendar-column"
                id={moment().add(0, "days").format("YYYYMMDD")}
              ></td>
              <td
                className="calendar-column"
                id={moment().add(1, "days").format("YYYYMMDD")}
              ></td>
              <td
                className="calendar-column"
                id={moment().add(2, "days").format("YYYYMMDD")}
              ></td>
              <td
                className="calendar-column"
                id={moment().add(3, "days").format("YYYYMMDD")}
              ></td>
              <td
                className="calendar-column"
                id={moment().add(4, "days").format("YYYYMMDD")}
              ></td>
              <td
                className="calendar-column"
                id={moment().add(5, "days").format("YYYYMMDD")}
              ></td>
              <td
                className="calendar-column"
                id={moment().add(6, "days").format("YYYYMMDD")}
              ></td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
export default Calendar;