var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function (err, res) {
    if (err) throw err;
    console.log("\n Welcome to Bamazon!" + "\n----------------------------------------\n");
    displayTable()
});

function displayTable() {
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].itemid + " | " + res[i].productname + " || " + res[i].departmentname + " || " + res[i].price + " || " + res[i].quantity);  
        }
        customerChoice(res) 
    })

};

function customerChoice(res) {
    inquirer.prompt ({
        name:"choice",
        type:"input",
        message: "What would you like to purchase? [Quit with Q]"
    }).then(function(answer){
        var correct = false;
        if(answer.choice.toUpperCase()==="Q"){
            process.exit();
        }
        for(var i = 0; i < res.length ; i++){
            if (res[i].productname === answer.choice){
                correct=true;
                var product = answer.choice;
                var id = i;
                inquirer.prompt({
                    name:"quantity",
                    type:"input",
                    message:"How many would you like to buy?",
                    validate: function(value){
                        if (isNaN(value)===false){
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }).then(function(answer){
                    if ((res[id].quantity - answer.quantity) > 0) {
                        var newQuantity = (res[id].quantity - answer.quantity)
                        connection.query("UPDATE products SET quantity="+ newQuantity+ "WHERE productname=" + product, function(err, res2){
                            console.log("Item Purchased!")
                        })  
                    }

                    else {
                        console.log("Not enough stock to fill order!")
                        customerChoice();
                    }
                })
            }
        }
        if(i===res.length && correct===false){
            console.log("Not a Valid Selection!")
            customerChoice();
        }
    })
}



