const express = require('express');
const bodyParser = require('body-parser');
require( 'ignore-styles' );
require( '@babel/register')
const React=require('react');
const ReactDOMServer=require('react-dom/server')
const path = require('path');
const {App}=require('../src/app')

console.log('sasfasf')
const app = express();


/* App Config */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())
app.get('/',express.static(path.resolve(__dirname,'assets/')));

const htmlApp=ReactDOMServer.renderToString(<div>
    <App test={[1,2,3,4,5]}/>
    </div>);

app.get('/', (req, res) =>{
     res.send(htmlApp);
})

var port =  3000;

app.listen(port, () => {
    console.log(`Server initialized on: http://localhost:${port} // ${new Date()}`)
})