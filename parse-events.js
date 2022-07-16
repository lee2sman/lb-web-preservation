const fs = require('fs');
const csv = require('csv-parser');

const inputFilePath = "./data/events.csv";

fs.createReadStream(inputFilePath)
.pipe(csv())
.on('data', function(data){
    try {
      //console.log(data)

      let head = '<!DOCTYPE html> \n <html lang="en"> \n <head> \n <title>' + data.Title + '</title> \n <link rel="stylesheet" href="../assets/css/events.css"> \n </head> \n';
      let body = `<body> \n

  <header>

    <div><img id="logo" src="../assets/img/logo.png" alt="Little Berlin logo"></div>

    <nav>
      <a href="../members/">MEMBERS</a>
      <a href="../calendar/">CALENDAR</a>
	<a href="../about/">ABOUT</a>
	<a href="../zine_library/">ZINE LIBRARY</a>
	<a href="../press/">PRESS</a>
    </nav>

  </header>
  <div id="main">
    <div id="info">
	<h1>`
+ data.Title+' </h1> \n <h2> '+data.Month_Year +'</h2> \n <h3> '+data.Date+' </h3> \n </div> \n <div id="description"> \n <p> '+data.Description+ '</p> \n </body> \n';

//insert images


      let footer = `
    </div>
  </div>
  <footer>
  </footer>
 </body>
</html>
      `;

      let output = head + body + footer;

		// append data to a file
		fs.writeFile("events/"+data.Title+'.html', output, (err) => {
		    if (err) {
			throw err;
		    }
	//	    console.log("File is updated.");
		});

    }
    catch(err) {
        //error handler
    }
})
.on('end',function(){
    //some final operation
  console.log("Events file output sent to: /events");
});
