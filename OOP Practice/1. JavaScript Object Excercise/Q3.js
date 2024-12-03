//  Write a JavaScript function to create a node and link it to the next node in a singly linked list.
// sample input : // No input required
// Sample Output: 
//Node structure
//{ value: 1, next: { value: 2, next: null } }


// Define a node class
class Node{
    constructor(value){
        this.value = value;
        this.next =null;
    }
}

// Define a LinkedList class
class LinkedList{
    constructor(){
        this.head =null;
    }
    
    // Method to add a node to the end of the list
    append(value){
        const newNode = new Node(value);
        if(this.head === null){
          this.head = newNode;
        } else{
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // method to print the list
    printList(){
        let current = this.head;
        const values = [];
        while(current !== null){
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(' -> '));
    }
}

// variable data
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.printList();



