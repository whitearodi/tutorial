//router middleware 
const AdminBro = require('admin-bro')
const mongoose = require('mongoose')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')

const port = process.env.PORT || 3001;


AdminBro.registerAdapter(AdminBroMongoose)

const express = require('express')
const app = express()

//Initialize database along with models 
const Appointment = require('./models/Appointment')
const Services = require('./models/Services')
const Purchased = require('./models/Purchased')
const UnavailableStock= require('./models/UnavailableStock')
const WeeklyIncome = require('./models/WeeklyIncome')
const MonthlyIncome = require('./models/MonthlyIncome')
const MonthlyExpense = require('./models/MonthlyExpense')

const sidebarGroups = { 
    Client:{
        name:'Client Details',
        icon:'User',
    },
    Inventory:{
        name:'Inventory Info',
        icon:'Product',
    },
    Audit:{
        name:'Audit Reports',
        icon:'Money',
    }
    
};


const run = async () => {
    const connection = await mongoose.connect('mongodb://localhost:27017/test',{
        useNewUrlParser:true, useUnifiedTopology:true
    })

    

    const  adminBro = new AdminBro({
        Databases:[connection],
        rootPath: '/admin', 
        resources:[{resource:Appointment ,options:{parent:sidebarGroups.Client}},
             {resource:Services, options:{parent:sidebarGroups.Client}},
             {resource:Purchased, options:{parent: sidebarGroups.Inventory}},
             {resource:UnavailableStock, options:{parent: sidebarGroups.Inventory}},
             {resource:WeeklyIncome, options:{parent: sidebarGroups.Audit}},
             {resource:MonthlyIncome, options:{parent: sidebarGroups.Audit}},
             {resource:MonthlyExpense, options:{parent: sidebarGroups.Audit}}
            
            ],

        branding:{
            companyName:'Pitstop ERP', 
            softwareBrothers: false,
        logo:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAkFBMVEX///8ujd45m+Q4meNKqegti947neQsit1Ip+gYhNwwkeCtzfA+oeZMqugulOGAvOx6tepTr+q83Pbd7fr1+v6azPHQ4vbn8fschtzz+P2ky/DK4/fs9fzU6fmVyPA8o+e20/GNuuoAgNuXwOxcoeNNmuJvr+gikeFbqOaw1POIwO50t+y12fWi0PJmtevK5Pe+9zuaAAADUklEQVR4nO3ZW3eiMBSGYQFFdIAqeECpg9pWalvt//93o3LUUsBZ0qzG97mTlYudz52EQ6sFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADuweRPueXEFV1iw1xl3au07q8mogttznTtdevwet7TTHSxDXnudmo6xLAaiS63CY+9uhEceV1HdMENWFyVQaezHoiu+PbcnnJVBor3It+uoFyr238UXfOtzXvXhyBdJwyuDkF5EV3zzTnPdr9Up+d1zzLwJNwYq4wmT33vLAQZj8hqjt1VstZQpLxZqvbk5ZbHSnQ1gvidLARPugOypkkWgnKvjdBadrMQRNcizECxY8p9Hg1HYT/OoL8RXYow8zBphFB0KcKMsgwWomtpwMyfrwZF5vlnpEGawVZYpU3xN2H6F18Iw9z+twy1iP0mrthGTF+TqRXK9f00HSjZprgM7bIINPs1G5tmYIqrtwHz0iY4hZDdGuvJNVVgxTe3DdUq9jQdbWrRJakycKsjUM/6IM5AF1jzrZmqXkXL7Qd2fE01xJV8a1u7dPondu5cSDOQ6Fwwc3MtXgialrs/cLRkrDz3B75qJnRt81Bkl39f8q7Ho1V57hPfkjmZ6qbGu6GRmozX5HleCNIuqLW+d1lkTVf2Y0bpUlBrvSFMIzDfmy7tx0z1IGLu6wx/M+PhgS7PeyQ3zeBvjdFOMjowJbpDuiqDRRpBvch+iWsy8NOFcFgKEn17dnUjUp3BWA8Mo/boXyTNIKiYlW+ZaQJGYMj0vdFNZhaMvx80W4wtM2uCQxv4P1dh87IMzvpgO8zN2AgOG8HZb3keFY7cZHL5PhgNz6b8xVBcvU3IMsj1wXtpBEFbps2gdcygHTGyPpgm1woZlkTH4klRBh9GWQR7ybqgOINtSQaSbYcnbmBFchn4ybVLbaMt1aEYK+qD0XfLwBhLtw6OXCP5j3Nno/O1EQ6rYLiTbTOMFWbQctoXx6GxH8vz6uxScQat0aeT8+lKuQYS32RwV9z2MHLPGdAHWR9YO9GlCEMGZHBEBmRw5FpxBkMyuOcMZmkG8nw/vNpDsh9I+lBYx2PUCNaH6EJEmu6toXXfERy4zqfUz8YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD//QN8glUvhfgU/AAAAABJRU5ErkJggg==',
   
            theme:{
                colors:{
                    primary100:'#28BC92',
                    primary80:'#52C8A7',
                    primary60:'#7CD5BC',
                    primary40:'#A5E0CF',
                    primary20:'#CFEDE4',

                    //accent 
                    accent:'#5DF02E',
                    hoverBg:'#59bda0',

                    //filter
                    filterBg:'#003024',

                },

            },
        },
        
    })

    const router = AdminBroExpress.buildRouter( adminBro)
app.use(adminBro.options.rootPath, router)
//app.listen(3000, ()=>console.log('AdminBro is under localhost:3000/admin'))
app.listen(port, ()=>console.log(`AdminBro is under localhost:${port}/admin`))

}
run()