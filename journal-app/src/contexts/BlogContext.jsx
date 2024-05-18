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

     const addEntryToJournal = (
    title,
    author,
    content,
    date = Date.now(),
    id = null
  ) => {
    if (id) {
      let existingEntry = journalEntries.find(
        (entry) => entry.id === id
      );
      let currentJournalEntries = journalEntries.filter(
        (entry) => entry.id !== id
      );
      // update the found object
      existingEntry = {
        id: id,
        title: title,
        author: author,
        content: content,
        date: date,
      };

      // add the found object back in the array

      let updatedJournalEntries = [
        ...currentJournalEntries,
        existingEntry,
      ];

      // write the state to state and localStorage
      setJournalEntries(updatedJournalEntries);
      setStoredEntries(updatedJournalEntries);
    } else {
      // create a new entry

      setJournalEntries([
        ...journalEntries,
        { id: journalEntries.length, title, author, content, date },
      ]);
      setStoredEntries([
        ...journalEntries,
        { id: journalEntries.length, title, author, content, date },
      ]);
    }
  };


  

    return (
        <JournalDataContext.Provider value={{journalEntries}}>
            <JOurnalDispatchContext.Provider value={{addEntryToJournal}}>
                {children}
            </JOurnalDispatchContext.Provider>
        </JournalDataContext.Provider>
    )
}