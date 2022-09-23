import React from 'react';

// data & reducer
import { useDispatch } from 'react-redux';
import { setKidzSize } from '../../reducer/schnittmusterSlice';

function SizeKinderFilter() {

    const dispatch = useDispatch();

    const sizeClick = (e) => {
        dispatch(setKidzSize(e.target.value))
    }

    return (
        <div className='ccSKF' >
            <select onChange={sizeClick}>

                <optgroup label='Damen'>

                </optgroup>
                <optgroup label='Herren'>

                </optgroup>
                <optgroup label='Kinder'>
                    <option value="44">44</option>
                    <option value="50">50</option>
                    <option value="56">56</option>
                    <option value="62">62</option>
                    <option value="68">68</option>
                    <option value="74">74</option>
                    <option value="80">80</option>
                    <option value="86">86</option>
                    <option value="92">92</option>
                    <option value="98">98</option>
                    <option value="104">104</option>
                    <option value="110">110</option>
                    <option value="116">116</option>
                    <option value="122">122</option>
                    <option value="128">128</option>
                    <option value="134">134</option>
                    <option value="140">140</option>
                </optgroup>
            </select>
        </div>
    );
}

export default SizeKinderFilter;