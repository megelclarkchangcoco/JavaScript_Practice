//How do you implement a binary search tree (BST) in JavaScript and perform an in-order traversal
// Question: Write a JavaScript class to create a binary search tree with methods to insert nodes and perform an in-order traversal to print the values in ascending order.
// Sample Input:
// const bst = new BinarySearchTree();
// bst.insert(50);
// bst.insert(30);
// bst.insert(70);
// bst.insert(20);
// bst.insert(40);
// bst.insert(60);
// bst.insert(80);
// bst.inOrderTraversal();
// Sample Output:
// [20, 30, 40, 50, 60, 70, 80]

// Define a Node class
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Define a BinarySearchTree class
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    // Method to insert a node into the BST
    insert(value) {
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    // Helper method to insert a node into the BST
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    // Method to perform in-order traversal
    inOrderTraversal() {
      const result = [];
      this.inOrderHelper(this.root, result);
      return result;
    }
  
    // Helper method for in-order traversal
    inOrderHelper(node, result) {
      if (node !== null) {
        this.inOrderHelper(node.left, result);
        result.push(node.value);
        this.inOrderHelper(node.right, result);
      }
    }
  }
  
  // Example usage
  const bst = new BinarySearchTree();
  bst.insert(50);
  bst.insert(30);
  bst.insert(70);
  bst.insert(20);
  bst.insert(40);
  bst.insert(60);
  bst.insert(80);
  
  console.log(bst.inOrderTraversal()); // Output: [20, 30, 40, 50, 60, 70, 80]