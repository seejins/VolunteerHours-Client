import React from 'react'

const VolunteersContext = React.createContext({
    volunteers: [],
    addVolunteer: () => {},
    deleteVolunteer: () => {},
    editVolunteer: () => {},
})

export default VolunteersContext