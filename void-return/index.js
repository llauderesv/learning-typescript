"use strict";
function longSong(song) {
    if (song) {
        return;
    }
    console.log(`${song}`);
    return true;
    // Error: Type 'boolean' is not assigned to type 'void'
}
// void can be useful as the return type ina function type declaration. When used in a function
// type declaration, void indicates that any returned value from the function would be ignore.
