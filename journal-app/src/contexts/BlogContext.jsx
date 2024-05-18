import { useContext, useState } from "react"
import { useEffect } from "react"
import { createContext } from "react"
import { useLocalStorage } from "react-use"


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

export function BlogProvider({children}) {
  
    const [journalEntries, setJournalEntries] = useState([]);
    const [storedEntries, setStoredEntries] = useLocalStorage(
      "journalEntries",
      []
    );

    useEffect(() => {
        setJournalEntries(storedEntries);
    
        return () => {
          setStoredEntries(storedEntries);
        };
      }, []);

    return (
        <JournalDataContext.Provider value={journalEntries}>
            <JOurnalDispatchContext.Provider value={setJournalEntries}>
                {children}
            </JOurnalDispatchContext.Provider>
        </JournalDataContext.Provider>
    )
}