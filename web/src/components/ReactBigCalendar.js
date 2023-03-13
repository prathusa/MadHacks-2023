import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://kwkbmjsvccedsnavgxyn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3a2JtanN2Y2NlZHNuYXZneHluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgwMDI3MDgsImV4cCI6MTk5MzU3ODcwOH0.sFj7s3wgWmKQZNqSNRBOtHV9ATgtTSblwhEe8ZuuJEY')

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar({ ssn }) {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    async function getEvents() {
      let { data, error } = await supabase
        .from('calendar')
        .select('*')
        .eq('ssn', ssn)

      if (error) {
        console.log(error);
        return;
      }
      setEventsData(data);
    }

    getEvents();
  }, [ssn]);

  const handleSelect = ({ start, end }) => {
    console.log(start);
    if (start !== end)
      end.setDate(end.getDate() + 1);
    console.log(end);
    const title = window.prompt("Add a symptom");

    if (title)
    {
      async function insertEvent() {
        let { data, error } = await supabase
          .from('calendar')
          .insert({ssn: ssn, start: start, end: end, title: title})
        if (error) {
          console.log(error)
          return
        }
      }
      insertEvent()
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title
        }
      ]);
    }
  };
  
  return (
    <div className="shadow-lg py-10 mx-auto z-0 bg-[#fffafa] min-w-[50%] max-w-[50%]" >
      <Calendar
        views={["day", "agenda", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        style={{ height: "100vh" }}
        onSelectEvent={(event) => {
          if (window.confirm('Confirm the deletion of ' + event.title + "?")) 
            setEventsData(eventsData.filter((e) => e !== event))
        }}
        onSelectSlot={handleSelect}
      />
    </div>
  );
}
