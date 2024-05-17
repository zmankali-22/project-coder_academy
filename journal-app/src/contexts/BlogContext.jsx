import { useContext } from "react"
import { createContext } from "react"


const defaultJournalData = [
    {
        id : 0,
        title : "Default Journal Post",
        author : "Utsav Acharya",
        date : Date.now(),
        content : "Welcome to the website"
    }
]

//  this is only the data
export const JournalDataContext = createContext(null)

// to edit the data
export const JOurnalDispatchContext = createContext(null)

// hook to read the data
export function useJournalData() {
    return useContext(JournalDataContext)

}
//  hook to function that edits the global data
export function useJournalDispatch() {
    return useContext(JOurnalDispatchContext)
}