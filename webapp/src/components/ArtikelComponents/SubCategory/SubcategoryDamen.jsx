import React from 'react';

function SubcategoryDamen({ subcategoryValue, subCat }) {
    return (
        <div className='subcategoryFS' onChange={subcategoryValue}>
            <label htmlFor="oberteil" className={subCat === "oberteil" ? "subcategoryAktiv" : null}>
                <input className='genderRadio' type="radio" name="subcatergory" id="oberteil" value="oberteil" />
                Pullover / T-Shirt
            </label>
            <span className='trennung'> | </span>
            <label htmlFor="jacke" className={subCat === "jacke" ? "subcategoryAktiv" : null}>
                <input className='genderRadio' type="radio" name="subcatergory" id="jacke" value="jacke" />
                Jacken
            </label>
            <span className='trennung'> | </span>
            <label htmlFor="hose" className={subCat === "hose" ? "subcategoryAktiv" : null}>
                <input className='genderRadio' type="radio" name="subcatergory" id="hose" value="hose" />
                Hosen
            </label>
            <span className='trennung'> | </span>
            <label htmlFor="kleid" className={subCat === "kleid" ? "subcategoryAktiv" : null}>
                <input className='genderRadio' type="radio" name="subcatergory" id="kleid" value="kleid" />
                Kleider
            </label>
            <span className='trennung'> | </span>
            <label htmlFor="unterwaesche" className={subCat === "unterwaesche" ? "subcategoryAktiv" : null}>
                <input className='genderRadio' type="radio" name="subcatergory" id="unterwaesche" value="unterwaesche" />
                Unterwäsche
            </label>
        </div>
    );
}

export default SubcategoryDamen;