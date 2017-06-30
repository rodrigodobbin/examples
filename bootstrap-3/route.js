let express = require('express');
let path = require('path');
let app = express();

// Define the port to run on
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));

// Listen for requests
app.listen(app.get('port'), function() {
  console.log('Magic happens on port ' + app.get('port'));
});
