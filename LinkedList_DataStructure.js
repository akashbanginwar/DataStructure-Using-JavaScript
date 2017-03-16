//Constructor LinkedList function

function LinkedList(){
  this.head = null;
  this.tail = null;
}

//Constructor Node function

function Node(val, nxt, prev){
  this.val = val;
  this.nxt = nxt;
  this.prev = prev;
}

//Creating new Head node in LinkedList
LinkedList.prototype.addToHead = function(val){
  var newNode = new Node(val, this.head, null);
  if(this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

//Creating new Tail node in LinkedList
LinkedList.prototype.addToTail = function(val){
  var newNode = new Node(val, null, this.tail);
  if(this.tail) this.tail.nxt = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

//removing head node from LinkedList
LinkedList.prototype.removeHead = function(){
  if(!this.head) return null;           //Check List is empty or not
  var value = this.head.val;            //Store the value of head node
  this.head = this.head.nxt;            //Change the head pointer before removing
  if(this.head) this.head.prev = null;  //if linkedlist is not empty then set head prev node as a null
  else this.tail = null;       //if linkedlist is empty after removing orgnal head node then tail will be null 
  return value;
};

//removing tail node from LinkedList
LinkedList.prototype.removeTail = function(){
  if(!this.tail) return null;           //Check List is empty or not
  var value = this.tail.val;            //Store the value of tail node
  this.tail = this.tail.prev;           //Change the head pointer before removing
  if(this.tail) this.tail.nxt = null;   //if linkedlist is not empty then set tail next node as a null
  else this.head = null;         //if linkedlist is empty after removing orgnal tail node then head will be null 
  return value;
}

//Search value into LinkedList
LinkedList.prototype.search = function(searchValue){
  var currentNode = this.head;            //place the currentNode as a starting point from head
  while(currentNode){
    if(currentNode.val === searchValue) return currentNode.val;
    currentNode = currentNode.nxt;        //check if next node is null then return null
  }return null;
};

//Search indexOf method of a linkedlist value
LinkedList.prototype.indexOf = function(val){
  var indexes = [];
  var currentIndex = 0;
  var currentNode = this.head;
  while(currentNode){
  if(currentNode.val === val) {
    indexes.push(currentIndex);
  }
   currentNode = currentNode.nxt;
   currentIndex++;
}
return indexes;
};

//Puting value into LinkedList
var ll = new LinkedList();

ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);
ll.addToTail('5');
ll.addToTail(200);

console.log(ll.indexOf(200));