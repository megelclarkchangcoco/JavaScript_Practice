// .map() = accepts a callback and applies that function
        //          to each element of an array, then returns a new array

        const numbers = [1, 2, 3, 4, 5];

        const squares = numbers.map(square);
        const cubes = numbers.map(cube);

        console.log(squares); // Should print [1, 4, 9, 16, 25]
        console.log(cubes);   // Should print [1, 8, 27, 64, 125]
        console.log(numbers); // Should print [1, 2, 3, 4, 5]

        function square(element) {
            return Math.pow(element, 2);
        }

        function cube(element) {
            return Math.pow(element, 3);
        }