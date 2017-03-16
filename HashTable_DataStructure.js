
//HashTable constructor function

function HashTable(size){                   //this size will determine how many size or bucket we have
  this.buckets = Array(size);               //here we are creating new array & assign that size to buckets
  this.numBuckets = this.buckets.length;    //in numbucket variable we assign bucket length or size 
}

//HashTable constructor function

function HashNode(key, value, next){
  this.key = key;
  this.value = value;
  this.next = next || null;
}

//convert charater or string in number using charcodeAt()

HashTable.prototype.hash = function(key){
  var total = 0;
  for(var i = 0; i < key.length; i++){
    total += key.charCodeAt(i); 
  }
  var bucket = total % this.numBuckets;
  return bucket;
};


//insert & update method (it will take key and value and turn them into HashNode) & place that node into correct bucket

HashTable.prototype.insert = function(key,value){
  var index = this.hash(key);                 //it will convert into hash value                                          
  if(!this.buckets[index]) {                //here we are checking bucket is empty so put a value or not then traverse throgh linklist and put value at end of the node 
    this.buckets[index] = new HashNode(key,value); 
  }else 
  if(this.buckets[index].key === key){              //this update first HashNode
    this.buckets[index].value = value;
  }
  else{
    var currentNode = this.buckets[index];          //this will update next HashNode
    while(currentNode.next){
      if(currentNode.next.key === key){             //here we are matching the key
        currentNode.next.value = value;             //here we are update the value of specific key
        return;                                     //we are returnning this return to stop this method over here 
      }  
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key,value);     //here we insert the value at new node
  }
};


//get method

HashTable.prototype.get = function(key){
  var index = this.hash(key); 
  if(!this.buckets[index])return null;
  else{
    var currentNode = this.buckets[index];
    while(currentNode){
      if(currentNode.key === key) return currentNode.value;
      currentNode = currentNode.next;
    }
    return null;
  }
}

HashTable.prototype.retriveAll = function(){
  var allNodes = [];
  for(var i = 0; i < this.numBuckets; i++){
    var currentNode = this.buckets[i];
    while(currentNode){
      allNodes.push(currentNode);
      currentNode= currentNode.next;
    }
  }
  return allNodes;
}


var myHT = new HashTable(30);


myHT.insert('Banginwar', 'banginwar@gmail.com');
myHT.insert('Akash', 'Akash@gmail.com');
myHT.insert('Ashka', 'ashka@yahoo.com');
myHT.insert('Ashka', 'ashka123@yahoo.com')
myHT.insert('Banginwar', 'banginwar123@gmail.com');
myHT.insert('Akash', 'Akash1010@gmail.com');
myHT.insert('Akash', 'Akash1010@twitter.com');

console.log(myHT.retriveAll());

