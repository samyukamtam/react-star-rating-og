import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";



// import {StyleSheet, Text, View} from 'react';

// function app() {
//     return (
//    < View style={StyleSheet.container}>
//        <Text> Please enter your review below.</Text>
//    </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         backgroundColor: '#61dbfb',
//         alignment: 'top',
//         justifyContent: 'top',
//     },
// });


const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
   const starRating = [1,2,3,4,5];
  

   
return ( 
<div>
    {starRating.map((star, i) => {
        const ratingValue = i + 1;

        return (
            <label>
                <input 
                type="radio" 
                name="rating" 
                value={ratingValue} 
                onClick={()=>setRating(ratingValue)}
                />
         <FaStar 
         className="star" 
         color={ratingValue <= hover || rating ? "#ffc107" : "#e4e5e9"} 
         size={100}
         onMouseEnter = {() => setHover(ratingValue)}
         onMouseLeave = {() => setHover(null)}
         />
         </label>
        );
    })}

    </div>
    );
};

export default StarRating;
