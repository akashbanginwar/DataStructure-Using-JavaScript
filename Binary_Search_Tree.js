function BST(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

//BST Insert Method

BST.prototype.insert = function(value){
  if(value <= this.value){                              //Check new value is less then rootNode
      if(!this.left) this.left = new BST(value);        //if there is no left value create new value
      else this.left.insert(value);                     //Recursive function for insert comparison
    
  }else if(value>this.value){                           //Check new value is greter then rootNode
    if(!this.right) this.right = new BST(value);        //if there is no right value create new value
    else this.right.insert(value);                      //Recursive function for insert comparison
  }
};

//BST contain value Method

BST.prototype.contains = function(value){
  if(value === this.value) return true;
  else if(value < this.value){
    if(!this.left) return false;
    else return this.left.contains(value);
  }else if(value > this.value){
    if(!this.right) return false;
    else return this.right.contains(value);
  }
}

// Implement DFS
// BST.prototype.dft = function(iteratorFunc){
//   if(this.left) this.left.dft(iteratorFunc);
//   iteratorFunc(this.value);
//   if(this.right) this.right.dft(iteratorFunc);
// };

// Implement DFS in-order
// BST.prototype.dft = function(iteratorFunc, order){
//   if(this.left) this.left.dft(iteratorFunc, order);
//   if(order === 'in-order')iteratorFunc(this.value);
//   if(this.right) this.right.dft(iteratorFunc, order);
// };

// Implement DFS pre-order & post-Order
BST.prototype.dft = function(iteratorFunc, order){
  if(order === 'pre-order') iteratorFunc(this.value);       //pre-order Root-Left-Right
  if(this.left) this.left.dft(iteratorFunc, order);
  if(order === 'in-order')iteratorFunc(this.value);         //in-order Left-Root-Right
  if(this.right) this.right.dft(iteratorFunc, order);
  if(order === 'post-order')iteratorFunc(this.value);       //post-order Left-Right-Root
};

//Implement Breadth First Search Traversal (Level-Order)

BST.prototype.bft = function(iteratorFunc){
  var queue = [this];                                    //Implementing queue (this)we are using for starting node
  while(queue.length){                                  //while to traverse till whole queue length
    var treeNode = queue.shift();                      //this will take fo=irst node outof the queue & store into variable
    iteratorFunc(treeNode);
    if(treeNode.left) queue.push(treeNode.left);      //Push tree node left value into back of our queue
    if(treeNode.right) queue.push(treeNode.right);   //Push tree node right value into back of our queue
    
    }  
};

BST.prototype.getMinVal = function(){
  if(this.left) return this.left.getMinVal();
  else return this.value;
  
};

BST.prototype.getMaxVal = function(){
  if(this.right) return this.right.getMaxVal();
  else return this.value;
};


//Dft log function
// function log(value){
//   console.log(value);
// }

//Bft log function
function log(node){
  console.log(node.value);
}

var bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(45);
bst.insert(60);
bst.insert(100);
bst.insert(10);
bst.insert(35);
bst.insert(59);
bst.insert(85);
bst.insert(105);

//bst.bft(log);
bst.getMaxVal();




