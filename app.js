let express = require('express');
let app = express();

const mongoose = require('mongoose');

let morgan = require('morgan');
let dotenv = require('dotenv');
dotenv.config();
let port = app.listen(process.env.PORT || 9870);
const hostname = 'localhost';
let cors = require('cors');
let bodyParser = require('body-parser');

let mongoUrl = "mongodb+srv://shoppinghub:shoppinghub123@cluster0.w4byv.mongodb.net/shoppingHub?retryWrites=true&w=majority"


app.use(morgan('common'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());



app.get('/',(req,res)=>{
    res.send("Response from shopping hub");

})

const AuthController = require('./controller/authController');
app.use('/api/auth',AuthController);

const BrandController = require('./controller/brandController');
app.use('/api',BrandController)

const DiscountController = require('./controller/discountController');
app.use('/api',DiscountController)

const CollectionCategoryController = require('./controller/collectionCategoryController');
app.use('/api',CollectionCategoryController)

const ImageCollectionController = require('./controller/imageCollectionController');
app.use('/api',ImageCollectionController)

const GenderController = require('./controller/genderController');
app.use('/api',GenderController)

const ColorController = require('./controller/colorController');
app.use('/api',ColorController)

const SizeController = require('./controller/sizeController');
app.use('/api',SizeController)

const OccasionController = require('./controller/occasionController');
app.use('/api',OccasionController)

const ProductController = require('./controller/productController');
app.use('/api',ProductController)

const ProductCategoryController = require('./controller/productCategoryController');
app.use('/api',ProductCategoryController)

const ProductTypeController = require('./controller/productTypeController');
app.use('/api',ProductTypeController)

const OrderController = require('./controller/orderController');
app.use('/api',OrderController)



mongoose.connect(mongoUrl,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(client => {
    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`)
    });
}).catch(err => {
    console.log(err);
})




