import { createClient } from '@supabase/supabase-js'

const now = new Date();

const supabase = createClient('https://kwkbmjsvccedsnavgxyn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3a2JtanN2Y2NlZHNuYXZneHluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgwMDI3MDgsImV4cCI6MTk5MzU3ODcwOH0.sFj7s3wgWmKQZNqSNRBOtHV9ATgtTSblwhEe8ZuuJEY')

var getParams = function (url) {
  var params = {};
  var parser = document.createElement('a');
  parser.href = url;
  var query = parser.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    params[pair[0]] = decodeURIComponent(pair[1]);
  }
  return params;
};

const ssn = getParams(document.location.href).ssn;

async function getEvent() {
  let { data, error } = await supabase
    .from('calendar')
    .select('*')
    .eq('ssn', ssn)
  if (error) {
    console.log(error)
    return
  }
  let i = 0;
  let events = data.map((event) => {
    return {
      id: i++,
      title: event.title,
      allDay: true,
      start: new Date(event.start),
      end: new Date(event.end)
    }
  })
  console.log(events);
  return events;
}

export default getEvent();