export default function Header({handleToggle}: any) {
    return(
        <div className ='header'>
            <h1>Notes</h1>
            <button onClick={() => handleToggle((previousDarkMode: boolean) => !previousDarkMode)}>Toggle Mode</button>
        </div>
    )
}