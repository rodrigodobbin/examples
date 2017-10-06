let express = require('express');
let path = require('path');
let app = express();

// Define the port to run on
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
app.listen(app.get('port'), function() {
  console.log('Magic happens on port ' + app.get('port'));
});
