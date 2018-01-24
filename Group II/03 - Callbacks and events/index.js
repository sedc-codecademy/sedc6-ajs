console.log("one");

let first = getFirst();
let second = getSecond(first);
let third = getThird(first, second);
process(third);

/** 
 * 1. Take username and password and authenticate (get user data)
 * 2. Take user data and image data and authorize (return true)
 * 3. Take authorization response and audit (don't return anything)
 * 
 * 
*/

let userData = getUserData(username, password);
let isAllowed1 = isAllowedToSeeImage(userData, image1);
if (isAllowed1) {
    setLike(userData, image1, date);
}
let isAllowed2 = isAllowedToSeeImage(userData, image2);
if (isAllowed2) {
    setLike(userData, image2, date);
}

getUserData(username, password, function(userData){
    isAllowedToSeeImage(userData, image1, function(isAllowed){
        if (isAllowed) {
            setLike(userData, image1, date);
        }
    });
    isAllowedToSeeImage(userData, image2, function(isAllowed){
        if (isAllowed) {
            setLike(userData, image2, date);
        }
    });
})
