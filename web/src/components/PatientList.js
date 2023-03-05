import React, { useState, useEffect } from 'react'
import PatientListItem from "./PatientListItem"
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://kwkbmjsvccedsnavgxyn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3a2JtanN2Y2NlZHNuYXZneHluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgwMDI3MDgsImV4cCI6MTk5MzU3ODcwOH0.sFj7s3wgWmKQZNqSNRBOtHV9ATgtTSblwhEe8ZuuJEY')

// async function getPatients() {
// //   const countries = await supabase.from('patients').select()
// //   console.log(countries)

// let { data: patients, error } = await supabase
//   .from('patients')
//   .select('FirstName,LastName')
// //   console.log(patients)
//     return patients;
// }


function PatientList() {
    const [patients, setPatients] = useState([])
  
    useEffect(() => {
      async function fetchPatients() {
        let { data, error } = await supabase
          .from('patients')
          .select('FirstName, LastName')
        if (error) {
          console.log(error)
          return
        }
        setPatients(data)
      }
      fetchPatients()
    }, [])
  
    return (
      <div className="flex flex-wrap justify-start px-10 max-h-[30rem] overflow-y-auto">
        {patients.map((patient) => (
          <PatientListItem
            // firstName={patient.FirstName}
            // lastName={patient.LastName}
            name={patient.FirstName + " " + patient.LastName}
          />
        ))}
      </div>
    )
  }

export default PatientList;