const fs = require('fs');

const imageHandler = {
    save: (imagedata, filename) => {
        console.log("in")
        fs.writeFile(`../../pictures/${filename}.png`, imagedata, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }
}
// const saveImage = (imagedata, filename) => {
//     console.log("in")
//     fs.writeFile(`../../pictures/${filename}.png`, imagedata, function (err) {
//       if (err) throw err;
//       console.log('Saved!');
//     });

// }

export default imageHandler;


