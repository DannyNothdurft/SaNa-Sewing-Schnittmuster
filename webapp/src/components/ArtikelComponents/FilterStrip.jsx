import React from 'react';

// data & reducer
import { useDispatch, useSelector } from 'react-redux';
import { decrement, setGender, setSubcategory } from '../../reducer/schnittmusterSlice';
import schnittData from '../../data/schnittmuster.json';

function FilterStrip() {

    const dispatch = useDispatch();
    const gender = useSelector(state => state.schnittmuster.gender);
    const subCat = useSelector(state => state.schnittmuster.subcategory);
    const sizeNumber = useSelector(state => state.schnittmuster.size);

    const onChangeValue = (event) => {
        dispatch(setGender(event.target.value));
        dispatch(setSubcategory(""));

        const split = event.target.value;

        let neueDaten = [];
        let filterIDs = [];


        for (let j = 0; j < schnittData.length; j++) {
            if (schnittData[j].gender.includes(split)) {

                let durchlauf = [schnittData[j]];
                let durchlaufID = [schnittData[j].id];
                let vergleich = filterIDs.includes(durchlauf[0].id)

                if (!vergleich) {
                    neueDaten.push.apply(neueDaten, durchlauf);
                    filterIDs.push.apply(filterIDs, durchlaufID);
                }
            }

        }

        dispatch(decrement(neueDaten))
    }

    const subcategoryValue = (event) => {

        dispatch(setSubcategory(event.target.value));

        const split = [gender, sizeNumber, event.target.value];

        let neueDaten = [];
        let filterIDs = [];

        let currentData = [];
        let currentFilterId = [];

        let currentSize = [];
        let currentSizeID = [];

        for (let i = 0; i < schnittData.length; i++) {
            if (schnittData[i].gender.includes(split[0])) {

                let durchlauf = [schnittData[i]];
                let durchlaufID = [schnittData[i].id];
                let vergleich = filterIDs.includes(durchlauf[0].id)

                if (!vergleich) {
                    neueDaten.push.apply(neueDaten, durchlauf);
                    filterIDs.push.apply(filterIDs, durchlaufID);
                }
            }
        }

        for (let j = 0; j < neueDaten.length; j++) {
            if (neueDaten[j].category.includes(split[2])) {

                let durchlauf = [neueDaten[j]];
                let durchlaufID = [neueDaten[j].id];
                let vergleich = currentFilterId.includes(durchlauf[0].id)

                if (!vergleich) {
                    currentData.push.apply(currentData, durchlauf);
                    currentFilterId.push.apply(currentFilterId, durchlaufID);
                }
            }
        }

        if (sizeNumber > 0) {
            console.log("currentData", currentData)
            for (let k = 0; k < currentData.length; k++) {
                let nummer = Number(split[1]);
                if (currentData[k].size.includes(nummer)) {

                    console.log("ich habe etwas gefunden")
                    let durchlauf = [currentData[k]];
                    let durchlaufID = [currentData[k].id];
                    let vergleich = currentSizeID.includes(durchlauf[0].id)

                    if (!vergleich) {
                        currentSize.push.apply(currentSize, durchlauf);
                        currentSizeID.push.apply(currentSizeID, durchlaufID);
                    }
                }
            }
        }

        if (sizeNumber > 0) {
            dispatch(decrement(currentSize))
        } else {
            dispatch(decrement(currentData))
        }

    }


    return (
        <div className='ccFilterStrip'>
            <label onChange={onChangeValue} htmlFor="damen" className={gender === "damen" ? "labelAktiv" : null}>
                <input className='genderRadio' type="radio" name="gender" id="damen" value="damen" />
                Damen
            </label>
            {gender === "damen" ?
                <div className='subcategoryFS' onChange={subcategoryValue}>
                    <label htmlFor="oberteil" className={subCat === "oberteil" ? "subcategoryAktiv" : null}>
                        <input className='genderRadio' type="radio" name="subcatergory" id="oberteil" value="oberteil" />
                        Pullover / T-Shirt
                    </label>
                    <label htmlFor="jacke" className={subCat === "jacke" ? "subcategoryAktiv" : null}>
                        <input className='genderRadio' type="radio" name="subcatergory" id="jacke" value="jacke" />
                        Jacken
                    </label>
                    <label htmlFor="hose" className={subCat === "hose" ? "subcategoryAktiv" : null}>
                        <input className='genderRadio' type="radio" name="subcatergory" id="hose" value="hose" />
                        Hosen
                    </label>
                    <label htmlFor="kleid" className={subCat === "kleid" ? "subcategoryAktiv" : null}>
                        <input className='genderRadio' type="radio" name="subcatergory" id="kleid" value="kleid" />
                        Kleider
                    </label>
                    <label htmlFor="unterwaesche" className={subCat === "unterwaesche" ? "subcategoryAktiv" : null}>
                        <input className='genderRadio' type="radio" name="subcatergory" id="unterwaesche" value="unterwaesche" />
                        Unterwäsche
                    </label>
                </div>
                : null}
            <label onChange={onChangeValue} htmlFor="herren" className={gender === "herren" ? "labelAktiv" : null}>
                <input className='genderRadio' type="radio" name="gender" id="herren" value="herren" />
                Herren
            </label>
            {gender === "herren" ?
                <div className='subcategoryFS' onChange={subcategoryValue}>
                    <label htmlFor="oberteil" className={subCat === "oberteil" ? "subcategoryAktiv" : null}>
                        <input className='genderRadio' type="radio" name="subcatergory" id="oberteil" value="oberteil" />
                        Pullover / T-Shirt
                    </label>
                    <label htmlFor="jacke" className={subCat === "jacke" ? "subcategoryAktiv" : null}>
                        <input className='genderRadio' type="radio" name="subcatergory" id="jacke" value="jacke" />
                        Jacken
                    </label>
                    <label htmlFor="hose" className={subCat === "hose" ? "subcategoryAktiv" : null}>
                        <input className='genderRadio' type="radio" name="subcatergory" id="hose" value="hose" />
                        Hosen
                    </label>
                    <label htmlFor="unterwaesche" className={subCat === "unterwaesche" ? "subcategoryAktiv" : null}>
                        <input className='genderRadio' type="radio" name="subcatergory" id="unterwaesche" value="unterwaesche" />
                        Unterwäsche
                    </label>
                </div>
                : null}
            <label onChange={onChangeValue} htmlFor="kinder" className={gender === "kinder" ? "labelAktiv" : null}>
                <input className='genderRadio' type="radio" name="gender" id="kinder" value="kinder" />
                Kinder
            </label>
            {gender === "kinder" ?
                <div className='subcategoryFS' onChange={subcategoryValue}>
                    <label htmlFor="oberteil" className={subCat === "oberteil" ? "subcategoryAktiv" : null}>
                        <input className='genderRadio' type="radio" name="subcatergory" id="oberteil" value="oberteil" />
                        Pullover / T-Shirt
                    </label>
                    <label htmlFor="jacke" className={subCat === "jacke" ? "subcategoryAktiv" : null}>
                        <input className='genderRadio' type="radio" name="subcatergory" id="jacke" value="jacke" />
                        Jacken
                    </label>
                    <label htmlFor="hose" className={subCat === "hose" ? "subcategoryAktiv" : null}>
                        <input className='genderRadio' type="radio" name="subcatergory" id="hose" value="hose" />
                        Hosen
                    </label>
                    <label htmlFor="kleid" className={subCat === "kleid" ? "subcategoryAktiv" : null}>
                        <input className='genderRadio' type="radio" name="subcatergory" id="kleid" value="kleid" />
                        Kleider
                    </label>
                    <label htmlFor="accessoire" className={subCat === "accessoire" ? "subcategoryAktiv" : null}>
                        <input className='genderRadio' type="radio" name="subcatergory" id="accessoire" value="accessoire" />
                        Accessoires
                    </label>
                    <label htmlFor="unterwaesche" className={subCat === "unterwaesche" ? "subcategoryAktiv" : null}>
                        <input className='genderRadio' type="radio" name="subcatergory" id="unterwaesche" value="unterwaesche" />
                        Unterwäsche / Bodys
                    </label>
                    <label htmlFor="nachtwaesche" className={subCat === "nachtwaesche" ? "subcategoryAktiv" : null}>
                        <input className='genderRadio' type="radio" name="subcatergory" id="nachtwaesche" value="nachtwaesche" />
                        Nachtwäsche / Strampler
                    </label>
                    <label htmlFor="puppe" className={subCat === "puppe" ? "subcategoryAktiv" : null}>
                        <input className='genderRadio' type="radio" name="subcatergory" id="puppe" value="puppe" />
                        Kleidung für Puppen
                    </label>
                </div>
                : null}
        </div>
    );
}

export default FilterStrip;