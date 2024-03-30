#! /usr/bin/env node

import inquirer from "inquirer";


let Balance = 1500000
let Pin = 2222
console.log(`Pin is ${Pin}`);


let Pin_answer= await inquirer.prompt(
    [
        {
            name:"pin",
            message:"enter your pin: ",
            type:"number"
        }
    ]

)
if (Pin_answer.pin === Pin) {
    console.log("Correct Your Pin!!!");
    let operation_ans=await inquirer.prompt(
        [
            {
                name:"operation",
                message:"please select option:",
                type:"list",
                choices:["withdraw","fast withdrawal","check balance"]
            }
        ]
    )
    if (operation_ans.operation==="withdraw") {
        let amount_ans = await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"enter your amount:",
                    type:"number"
                }
            ]
        )
        if( amount_ans.amount > Balance){
            console.log("Insufficient balance");
            
        }else if(Balance -= amount_ans.amount){
            console.log(`Your remaining balance is :${Balance}`);
        }
    }if (operation_ans.operation==="fast withdrawal") {
        let fast_withdrawal= await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"select amount:",
                    type:"list",
                    choices:[1000,2000,5000,10000,15000,20000],
                    
                }
            ]
        )
        if(Balance -= fast_withdrawal.amount){
            console.log(`Your remaining balance is :${Balance}`);
            
        }
    }
    else if (operation_ans.operation==="check balance") {
        console.log(`Your balance is :${Balance}`);
    }
}

else{
    console.log("Incorrect Pin Number");
    
}