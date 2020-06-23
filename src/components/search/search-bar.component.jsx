import React, { useContext } from 'react';

import { Context } from '../../state-managment/state'

import usePlacesAutocomplete, {
    getGeocode,
    getLatLng
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";
import './search-bar.styles.css'

const Search = () => {
    const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 43.653225, lng: () => -79.383186 },
            radius: 50 * 1000,
        }
    });

    const { dispatch } = useContext(Context);

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            const coord = { lat, lng }
            dispatch({ type: 'CHANGE_COORDS', payload: coord })
        } catch (error) {
            console.log("😱 Error: ", error);
        }
    };

    return (
        <div className='search'>
            <Combobox
                onSelect={handleSelect}>
                <ComboboxInput
                    className='searchField'
                    value={value}
                    onChange={(e) => { setValue(e.target.value) }}
                    placeholder='Where to?'
                    disabled={!ready} />
                <ComboboxPopover className='popover'>
                    {status === 'OK' && data.map(({ id, description }) =>
                        <ComboboxOption key={id} value={description} />)}
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}

export default Search;