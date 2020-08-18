



var budgetController = (function () {

var expenseVal = function (values,description) {
   this.values = values;
   this.description = description;

}

expenseVal.prototype.getValues = function () {
     return this.values

}

expenseVal.prototype.getDesc = function () {
    return this.description
}

return {
    getExpense: function (value, description) {
      var addItem;
        addItem = new expenseVal(value, description);
        return addItem.getValues();
    },
   getValue: function (value, description) {
       newDesc = new expenseVal(value, description)  
       console.log(value)  
       return value; 
   }
}


    
})();

var UIController = (function (){
     return {
         getInput: function () {
             return {
                 budget: 0,
                 type: document.querySelector('.add__type').value,
                 value: document.querySelector('.add__description').value,
                 description: document.querySelector('.add__description2').value
             }
         }
     }


})();


 var appController = (function (UICTRL,budgetCtrl) {
      var ctrlAddItem = function () {
       var total = 0;
        var type = UIController.getInput().type
       if (type === 'exp') {
        document.getElementById('__expense').innerHTML += budgetCtrl.getExpense(UIController.getInput().value)
        document.getElementById('__expense').innerHTML += ' ' + budgetCtrl.getValue(UIController.getInput().description)
} else if (type === 'inc') {
        document.getElementById('__income').innerHTML += budgetCtrl.getExpense(UIController.getInput().value)
        document.getElementById('__income').innerHTML += budgetCtrl.getExpense(UIController.getInput().description)

}
    }

    var ctrlDeleteItem = function () {
       if (document.getElementById('.add__type') === '-') {

       }
    }

var updateBalance = function () {
   var income = parseInt(document.querySelector('__balance').value);
   if (income < 0) {
       return 0;
   } else {
       
   }
}


document.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) {
      ctrlAddItem()
      updateBalance();
  }

document.addEventListener('keydown', function () {
      budgetCtrl.getExpense(UIController.getInput().value)
});

});

document.getElementById('__submit').addEventListener('click', ctrlAddItem)

})(UIController, budgetController);