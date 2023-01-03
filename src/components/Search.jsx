import React, { useEffect, useState } from 'react';

const Search = (props) => {
    const [charName, setCharName] = useState('');

    const charNameChangeHandler = name => {
        setCharName(name)
    }

    useEffect(() => {
        const debounce = setTimeout(
            () => {
                props.getCharByName(charName)
            }, 1000
        )
        return () => {
            clearTimeout(debounce)
        };
    }, [charName]);

    // const getCharByName = useCallback((name) => {
    //     console.log('test '+name)
    //     debounce((name) => {console.log(name)}, 1)
    // }, [])

    return (
        <div className="form-control">
            <input type="text" value={charName} onChange={e => charNameChangeHandler(e.target.value)} placeholder="Search character name..." />
        </div>
    );
}

export default Search;
