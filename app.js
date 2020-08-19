



var budgetController = (function () {

var expenseVal = function (values,description, type) {
   this.values = values;
   this.description = description;
   this.type = type;
}

expenseVal.prototype.getValues = function () {
     return this.values

}

expenseVal.prototype.getDesc = function () {
    return this.description
}

expenseVal.prototype.getType = function () {
    return this.type
}


return {
    
    getExpense: function (value, description, type) {
      var addItem;
        addItem = new expenseVal(value, description,type);
        console.log(addItem)   
       return addItem
       
    },
   getValue: function (value, description,type) {
       newDesc = new expenseVal(value, description,type)  
       console.log(addItem.getDesc());  
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
    var html = '<ul>%income%</ul>';
    var htmlNew = '%income%';
    var ctrlAddItem = function () {
     var type = UIController.getInput().type  
      var newItem = budgetCtrl.getExpense(UIController.getInput().value, UIController.getInput().description, UIController.getInput().type);
      if (type === 'inc') {
           html = html.replace(htmlNew, newItem.values + ' ' + newItem.description);
         console.log(newItem.values)
          document.querySelector('.__list').insertAdjacentHTML('beforeend', html)
          htmlNew = newItem.values + ' ' + newItem.description
 
      } else if (type === 'exp' ) {
        html = html.replace(htmlNew,  newItem.values + ' ' + newItem.description);
        console.log(newItem.values)
         document.querySelector('.__nextList').insertAdjacentHTML('beforeend', html)
         htmlNew = newItem.values + ' ' + newItem.description
      } 
  
    }
 


    var ctrlDeleteItem = function () {
       if (document.getElementById('.add__type') === '-') {

       }
    }



document.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) {
      ctrlAddItem()
  }



});

document.getElementById('__submit').addEventListener('click', ctrlAddItem)

})(UIController, budgetController);