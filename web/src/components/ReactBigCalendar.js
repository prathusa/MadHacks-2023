import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {
  const [eventsData, setEventsData] = useState(events);

  const handleSelect = ({ start, end }) => {
    console.log(start);
    if (start !== end)
      end.setDate(end.getDate() + 1);
    console.log(end);
    const title = window.prompt("Add a symptom");
    
    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title
        }
      ]);
  };
  return (
    <div className="shadow-lg py-10 mx-auto z-0 bg-[#fffafa] min-w-[50%] max-w-[50%]" >
      <Calendar
        // views={["day", "agenda", "work_week", "month"]}
        views={["day", "agenda", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        style={{ height: "100vh" }}
        // onSelectEvent={(event) => {confirm('Confirm the deletion of ' + event.title + "?") ? setEventsData(eventsData.filter((e) => e !== event)) : ""}}
        onSelectEvent={(event) => {
          if (window.confirm('Confirm the deletion of ' + event.title + "?")) 
            setEventsData(eventsData.filter((e) => e !== event))
        }}
        onSelectSlot={handleSelect}
      />
    </div>
  );
}
