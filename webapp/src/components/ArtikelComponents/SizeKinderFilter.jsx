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
                <option value="">N/A</option>
                <optgroup label='Damen'>
                    <option value="32">32</option>
                    <option value="34">34</option>
                    <option value="36">36</option>
                    <option value="38">38</option>
                    <option value="40">40</option>
                    <option value="42">42</option>
                    <option value="44">44</option>
                    <option value="46">46</option>
                    <option value="48">48</option>
                    <option value="50">50</option>
                    <option value="52">52</option>
                    <option value="54">54</option>
                    <option value="56">56</option>
                    <option value="58">58</option>
                    <option value="60">60</option>
                </optgroup>
                <optgroup label='Herren'>
                    <option value="44">44</option>
                    <option value="46">46</option>
                    <option value="48">48</option>
                    <option value="50">50</option>
                    <option value="52">52</option>
                    <option value="54">54</option>
                    <option value="56">56</option>
                    <option value="58">58</option>
                    <option value="60">60</option>
                    <option value="62">62</option>
                    <option value="64">64</option>
                    <option value="66">66</option>
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
                    <option value="146">146</option>
                    <option value="152">152</option>
                    <option value="158">158</option>
                    <option value="164">164</option>
                    <option value="170">170</option>
                </optgroup>
            </select>
        </div>
    );
}

export default SizeKinderFilter;