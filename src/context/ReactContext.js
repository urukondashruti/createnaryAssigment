import React from 'react'

const ReactContext = React.createContext({
    pageDetails: {},
    chronoList:[],
    changeChrono:() => {},
    changeDetails: () => {},
})

export default ReactContext