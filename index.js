'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
//////////////////////////////////////////////////////////////
/**
  * _.identity: Designed to identity values in a collection based on a test. 
  * Takes a collection, Array or Object, and passes each value 
  * in the collection through a test Function. The test Function returns 
  * true if the value passes the test, false otherwise. 
  * Returns the same value that is used as the argument. f(x) = x this function
  * looks useless, but is used throughout Underscore as a default iteratee.
  * Values that pass the test are collected and returned in an output Array.
  * 
  * @param {Value} collection: The collection to filter.
  * @param {Function} test: The Function to be applied to each value in 
  * the collection. The test Function must return a Boolean based on some 
  * logic which tests the value given to it.
  * 
  * @return {Array}: An Array containing the filtered collection values. 
  * The Array will contain only the values that passed the test.
  * 
  * Usage: 
  * 
  *      const letters = ['a', 'b', 'b', 'c'];
  *      const onlyBs = filter(letters, function(letter) {
  *          return letter === 'b';
  *      });
  *      console.log(onlyBs); // -> ['b', 'b']
  */
 function identity(value) {
     // ...code
  return value;
  
 }
 
 module.exports.identity = identity;
 //////////////////////////////////////////////////////////////
/**
  * _.typeOf: Designed to typeOf values in a collection based on a test. 
  * Takes a collection, Array or Object, and passes each value 
  * in the collection through a test Function. The test Function returns 
  * true if the value passes the test, false otherwise. Values that pass 
  * the test are collected and returned in an output Array.
  * 
  * @param {Any} value: Any datatype
  * @param {Function} test: The Function to be applied to each value in 
  * the collection. The test Function must return a Boolean based on some 
  * logic which tests the value given to it.
  * 
  * @return {Array}: An Array containing the filtered collection values. 
  * The Array will contain only the values that passed the test.
  * 
  * Usage: 
  * 
  *      const letters = ['a', 'b', 'b', 'c'];
  *      const onlyBs = filter(letters, function(letter) {
  *          return letter === 'b';
  *      });
  *      console.log(onlyBs); // -> ['b', 'b']
  */
 function typeOf(value) {
     // ...code
     if (value === null) {
       return "null";
    } if (value === undefined){
    return "undefined";
    } if (Array.isArray(value)){
    return "array";
    } if(typeof value === "string"){
    return "string";
    } if (typeof value === "number"){
        return "number";
    } if (typeof value === "boolean"){
    return "boolean";
    } if (typeof value === "object"){
        return "object";
    }else {
        return "function";
    }
 }
 module.exports.typeOf = typeOf;
 //////////////////////////////////////////////////////////////
/**
  * first: Designed to Returns the first element of an array
  * first values in a collection based on a test. 
  * 
  * 
  * @param {Array and Number} collection: The collection to filter.
  * @param {Function} test: The Function to be applied to each value in 
  * the collection. The test Function must return a Boolean based on some 
  * logic which tests the value given to it.
  * 
  * @return {Array}: An Array containing the filtered collection values. 
  * The Array will contain only the values that passed the test.
  * 
  * Usage: 
  * 
  *      const letters = ['a', 'b', 'b', 'c'];
  *      const onlyBs = filter(letters, function(letter) {
  *          return letter === 'b';
  *      });
  *      console.log(onlyBs); // -> ['b', 'b']
  */
 function first(array, number) {
     // ...code
      if (!Array.isArray(array) || number < 0){
       return [];
   }
   if (typeof number !== "number"){
       return array[0];
   }else{
      return array.slice(0,number);
   }
 }
 module.exports.first = first;
 //////////////////////////////////////////////////////////////
/**
  * last: Designed to Return the last element of an array. 
  * will return last values in a collection based on a test. 
  * Takes a collection, Array or Object, and passes each value 
  * in the collection through a test Function. The test Function returns 
  * true if the value passes the test, false otherwise. Values that pass 
  * the test are collected and returned in an output Array.
  * 
  * @param {Array and Number} collection: The collection to last.
  * @param {Function} test: The Function to be applied to each value in 
  * the collection. The test Function must return a Boolean based on some 
  * logic which tests the value given to it.
  * 
  * @return {Array}: An Array containing the last collection values. 
  * The Array will contain only the values that passed the test.
  * 
  * Usage: 
  * 
  *      const letters = ['a', 'b', 'b', 'c'];
  *      const onlyBs = last(letters, function(letter) {
  *          return letter === 'b';
  *      });
  *      console.log(onlyBs); // -> ['b', 'b']
  */
 function last(array, number) {
     // ...code
      if (!Array.isArray(array) || number < 0){
    return [];
} if (typeof number !== "number"){
   return array[array.length-1];
} if(number > array.length) {
return array;
    
}else{
    return array.slice(array.length - number);

}
    module.exports.last = last;
 //////////////////////////////////////////////////////////////
/**
  * indexOf: Designed to return the index at which value can be
  * found in the array, or 0 if value is not present in the array.
  * Uses the native ArrayFind() function. If working with a large 
  * array, and you know that the array is already sorted, pass true 
  * for isSorted to use a faster binary search.
  * indexOf values in a collection based on a test. 
  * 
  * @param {Array or Value} collection: The collection to filter.
  * @param {Function} test: The Function to be applied to each value in 
  * the collection. The test Function must return a Boolean based on some 
  * logic which tests the value given to it.
  * 
  * @return {Array}: An Array containing the indexOf collection values. 
  * The Array will contain only the values that passed the test.
  * 
  * Usage: 
  * 
  *      const letters = ['a', 'b', 'b', 'c'];
  *      const onlyBs = indexOf(letters, function(letter) {
  *          return letter === 'b';
  *      });
  *      console.log(onlyBs); // -> ['b', 'b']
  */
 function indexOf(array, value) {
     // ...code
     for (var i = 0; i < array.length; i++){
     if (array[i] === value){
         return i;
     }
       
    }
return-1;

 }
 module.exports.indexOf = indexOf;
 //////////////////////////////////////////////////////////////
/**
  * contains: Designed to contains, _.contains(list, value, 
  * [fromIndex]) Aliases: include, includes returns true if the
  * value is present in the list. Uses indexOf internally, if 
  * list is an Array. Use fromIndex to start your search at a given index.
  * 
  * @param {Array or Value} collection: The collection to contains.
  * @param {Function} test: The Function to be applied to each value in 
  * the collection. The test Function must return a Boolean based on some 
  * logic which tests the value given to it.
  * 
  * @return {Array}: An Array containing the filtered collection values. 
  * The Array will contain only the values that passed the test.
  * 
  * Usage: 
  * 
  *      const letters = ['a', 'b', 'b', 'c'];
  *      const onlyBs = contains(letters, function(letter) {
  *          return letter === 'b';
  *      });
  *      console.log(onlyBs); // -> ['b', 'b']
  */
 function contains(array, value) {
     // ...code
       let result = false;
   for(var i = 0; i < array.length; i++){
     result = value === array[i] ? true : result;
       
   }
   return result;

 }
 module.exports.contains = contains;
 //////////////////////////////////////////////////////////////
/**
  * each: Designed to iterates over a collection of elements, yielding each in turn to an iterator function.
 The iterator is bound to the context object (component or struct), if one is passed.
 Each invocation of iterator is called with three arguments: (element, index, collection).
 If collection is an object/struct, iterator's arguments will be (value, key, collection).

  * 
  * @param {Collection, Function} collection: The collection to each.
  * @param {Function} test: The Function to be applied to each value in 
  * the collection. The test Function must return a Boolean based on some 
  * logic which tests the value given to it.
  * 
  * @return {Array}: An Array containing the each collection values. 
  * The Array will contain only the values that passed the test.
  * 
  * Usage: 
  * 
  *      const letters = ['a', 'b', 'b', 'c'];
  *      const onlyBs = each(letters, function(letter) {
  *          return letter === 'b';
  *      });
  *      console.log(onlyBs); // -> ['b', 'b']
  */
 function each(collection, func) {
     // ...code
      //trying to see if array is array
  if( Array.isArray(collection)){
      for( let i = 0; i < collection.length; i++) {
          func1(collection[i], i, collection);
      } 
    }else{
        for(var key in collection){
            func1(collection[key], key, collection);
        }
    }
 }
 module.exports.each = each;
 //////////////////////////////////////////////////////////////
/**
  * unique: Designed to produce a duplicate-free version of the
  * array, using === to test object equality. In particular only 
  * the first occurrence of each value is kept. If you know in advance
  * that the array is sorted, passing true for isSorted will run a much 
  * faster algorithm. If you want to compute unique items based on a
  * transformation, pass an iteratee function.
  * Takes a collection, Array or Object, and passes each value 
  * in the collection through a test Function. The test Function returns 
  * true if the value passes the test, false otherwise. Values that pass 
  * the test are collected and returned in an output Array.
  * 
  * @param {Array} 
  * @param {Function} test: The Function to be applied to each value in 
  * the collection. The test Function must return a Boolean based on some 
  * logic which tests the value given to it.
  * 
  * @return {Array}: An Array containing the unique collection values. 
  * The Array will contain only the values that passed the test.
  * 
  * Usage: 
  * 
  *      const letters = ['a', 'b', 'b', 'c'];
  *      const onlyBs = unique(letters, function(letter) {
  *          return letter === 'b';
  *      });
  *      console.log(onlyBs); // -> ['b', 'b']
  */
 function unique(array) {
     // ...code
     //return a new array of all elements
    let finalArr = [];
    for (var i = 0; i <array.length; i++){
      if (array.indexOf(array[i]) === i){
          finalArr.push(array[i]);
      }  
    }return finalArr;
 }
 module.exports.unique = unique;//////////////////////////////////////////////////////////////
/**
  * filter: Designed to Looks through each value in the collection,
  * returning an array of all the values that pass a truth test (iterator). 
  *  Values that pass the test are collected and returned in an output Array.
  * 
  * @param {Array and Function} collection: The collection to filter.
  * @param {Function} test: The Function to be applied to each value in 
  * the collection. The test Function must return a Boolean based on some 
  * logic which tests the value given to it.
  * 
  * @return {Array}: An Array containing the filtered collection values. 
  * The Array will contain only the values that passed the test.
  * 
  * Usage: 
  * 
  *      const letters = ['a', 'b', 'b', 'c'];
  *      const onlyBs = filter(letters, function(letter) {
  *          return letter === 'b';
  *      });
  *      console.log(onlyBs); // -> ['b', 'b']
  */
 function filter(array, func) {
     // ...code
      let finalArr = []; 
  for (var i = 0; i < array.length; i++){
      if (func1(array[i], i, array) === true){
          finalArr.push(array[i]);
      }
  }return finalArr;
 }
 module.exports.filter = filter;
 //////////////////////////////////////////////////////////////
/**
  * reject: Designed to Returns the values in collection 
  * without the elements that the truth test (iterator) passes.
  * The opposite of filter.
  * 
  * @param {Array and Function} collection: The collection to reject.
  * @param {Function} test: The Function to be applied to each value in 
  * the collection. 
  * 
  * @return {Array}: An Array containing the reject collection values. 
  * The Array will contain only the values that passed the test.
  * 
  * Usage: 
  * 
  *      const letters = ['a', 'b', 'b', 'c'];
  *      const onlyBs = filter(letters, function(letter) {
  *          return letter === 'b';
  *      });
  *      console.log(onlyBs); // -> ['b', 'b']
  */
 function reject(array, func) {
     // ...code
     let finalArr = [];
for(var i = 0; i < array.length; i++){
    if (func1(array[i], i, array) === false){
        finalArr.push(array[i]);
    }
}return finalArr;
 }
 module.exports.reject = reject;
 //////////////////////////////////////////////////////////////
/**
  * partition: Designed to Split list into two arrays: one whose
  * elements all satisfy predicate and one whose elements all do 
  * not satisfy predicate. predicate is transformed through 
  * iteratee to facilitate shorthand syntaxes.
  * Values that pass the test are collected and returned in an output Array.
  * 
  * @param {Array and Function} collection: The collection to partition.
  * @param {Function} test: The Function to be applied to each value in 
  * the collection. The test Function must return a Boolean based on some 
  * logic which tests the value given to it.
  * 
  * @return {Array}: An Array containing the partition collection values. 
  * The Array will contain only the values that passed the test.
  * 
  * Usage: 
  * 
  *      const letters = ['a', 'b', 'b', 'c'];
  *      const onlyBs = filter(letters, function(letter) {
  *          return letter === 'b';
  *      });
  *      console.log(onlyBs); // -> ['b', 'b']
  */
 function partition(array, func) {
     // ...code
      return [_.filter(array, func1), _.reject(array, func1)];
 }
 module.exports.partition = partition;//////////////////////////////////////////////////////////////
/**
  * map: Designed to produces a new array of values by mapping each 
  * value in collection through a transformation function (iterator). 
  * If collection is an object/struct, iterator's arguments will be
  * (value, key, collection). 
  * 
  * @param {Collection, Function} collection: The collection to map.
  * @param {Function} test: The Function to be applied to each value in 
  * the collection. The test Function must return a Boolean based on some 
  * logic which tests the value given to it.
  * 
  * @return {Array}: An Array containing the map collection values. 
  * The Array will contain only the values that passed the test.
  * 
  * Usage: 
  * 
  *      const letters = ['a', 'b', 'b', 'c'];
  *      const onlyBs = filter(letters, function(letter) {
  *          return letter === 'b';
  *      });
  *      console.log(onlyBs); // -> ['b', 'b']
  */
 function map(collection, func) {
     // ...code
      var finalArr = [];
    if(Array.isArray(collection)){
        for (var i = 0; i < collection.length; i++){
            finalArr.push(func1(collection[i], i, collection));
        }
    }else{
        for(var key in collection){
            finalArr.push(func1(collection[key], key, collection));
        }
    }return finalArr;
 }
 module.exports.map = map;
 //////////////////////////////////////////////////////////////
/**
  * pluck: Designed to pluck values in a collection based on a test.
  *A convenient version of what is perhaps the most common use-case
  * for map: extracting a collection of property values.
  * 
  * @param {Array of Objects, Property} collection: The collection to pluck.
  * @param {Function} test: The Function to be applied to each value in 
  * the collection. The test Function must return a Boolean based on some 
  * logic which tests the value given to it.
  * 
  * @return {Array}: An Array containing the filtered collection values. 
  * The Array will contain only the values that passed the test.
  * 
  * Usage: 
  * 
  *      const letters = ['a', 'b', 'b', 'c'];
  *      const onlyBs = pluck(letters, function(letter) {
  *          return letter === 'b';
  *      });
  *      console.log(onlyBs); // -> ['b', 'b']
  */
 function pluck(arayOfObj, property) {
     // ...code
     var final = array.map(function(element){
        return element [property];
});
  return final; 
 }
 module.exports.pluck = pluck;//////////////////////////////////////////////////////////////
/**
  * every: Alias: all. Designed to return true if all of the values in the list pass
  * the predicate truth test. Short-circuits and stops traversing the list if a false element
  * is found. predicate is transformed through iteratee to facilitate shorthand syntaxes. 
  * every values in a collection based on a test. 
  * Takes a collection, Array or Object, and passes each value 
  * in the collection through a test Function. The test Function returns 
  * true if the value passes the test, false otherwise. Values that pass 
  * the test are collected and returned in an output Array.
  * 
  * @param {Collection, Function} collection: The collection to every.
  * @param {Function} test: The Function to be applied to each value in 
  * the collection. The test Function must return a Boolean based on some 
  * logic which tests the value given to it.
  * 
  * @return {Array}: An Array containing the every collection values. 
  * The Array will contain only the values that passed the test.
  * 
  * Usage: 
  * 
  *      const letters = ['a', 'b', 'b', 'c'];
  *      const onlyBs = filter(letters, function(letter) {
  *          return letter === 'b';
  *      });
  *      console.log(onlyBs); // -> ['b', 'b']
  */
 function every(collection, func) {
     // ...code
         var truthy = true;
    if (func !== undefined){
        _.each(collection, function(element, index, collection){
            if(func(element, index, collection)=== false){
             truthy = false;   
            }
    });
}
else{
    _.each(collection, function(element){
        if (element === false){
            truthy = false;
     }
     });
    }return truthy;
 }
 module.exports.every = every;

 //////////////////////////////////////////////////////////////
/**
  * some:  Alias: any designed to retur true if any of the values 
  * in the list pass the predicate truth test. Short-circuits and 
  * stops traversing the list if a true element is found. predicate 
  * is transformed through iteratee to facilitate shorthand syntaxes. 
  * some values in a collection based on a test. 
  *  
  * @param {Collection, Function} collection: The collection to some.
  * @param {Function} test: The Function to be applied to each value in 
  * the collection. The test Function must return a Boolean based on some 
  * logic which tests the value given to it.
  * 
  * @return {Array}: An Array containing the some collection values. 
  * The Array will contain only the values that passed the test.
  * 
  * Usage: 
  * 
  *      const letters = ['a', 'b', 'b', 'c'];
  *      const onlyBs = filter(letters, function(letter) {
  *          return letter === 'b';
  *      });
  *      console.log(onlyBs); // -> ['b', 'b']
  */
 function some(collection, func) {
     // ...code
//some will have two parameters a collection and a function
         var falsy = false;
     if (func !== undefined){
         _.each(collection, 
        function(element, index, collection){
         if(func(element, index, collection) === true){
             falsy = true;
         }
         
     });
 }else{
    _.each(collection, function(element){
         if (element === true){
             falsy = true;
         }
     });
    
 }return falsy;
 }
 module.exports.some = some;
  //////////////////////////////////////////////////////////////
/**
  * reduce:  Also known as inject, designed to reduce 
  * down a collection of values into a single value. 
  * Memo is the initial state of the reduction, and each successive 
  * step of it should be returned by iterator.
  * 
  * @param {Array, Function, Seed} collection: The collection to reduce.
  * @param {Function} test: The Function to be applied to each value in 
  * the collection. The test Function must return a Boolean based on some 
  * logic which tests the value given to it.
  * 
  * @return {Array}: An Array containing the reduce collection values. 
  * The Array will contain only the values that passed the test.
  * 
  * Usage: 
  * 
  *      const letters = ['a', 'b', 'b', 'c'];
  *      const onlyBs = filter(letters, function(letter) {
  *          return letter === 'b';
  *      });
  *      console.log(onlyBs); // -> ['b', 'b']
  */
 function reduce(array, func, seed) {
     // ...code
       _.each(array, 
    function (element, index, array){
        if (seed === undefined){
            seed = array[0];
        }else{
            seed = func1(seed, element, index, array);
        }
    }); return seed;
 }
 module.exports.reduce = reduce;
  //////////////////////////////////////////////////////////////
/**
  * extend: Designed to Copy all of the properties in the source 
  * objects over to the destination object, and return the destination object.
  * It's in-order, so the last source will override properties of 
  * the same name in previous arguments.
  * 
  * @param { Object , An Object
*   ...Possibly more objects } .
  * @param {Function} test: The Function to be applied to each value in 
  * the collection. The test Function must return a Boolean based on some 
  * logic which tests the value given to it.
  * 
  * @return {Array}: An Array containing the filtered collection values. 
  * The Array will contain only the values that passed the test.
  * 
  * Usage: 
  * 
  *      const letters = ['a', 'b', 'b', 'c'];
  *      const onlyBs = filter(letters, function(letter) {
  *          return letter === 'b';
  *      });
  *      console.log(onlyBs); // -> ['b', 'b']
  */
 function extend(obj, moreObj) {
     // ...code
       _.each(array, 
    function (element, index, array){
        if (seed === undefined){
            seed = array[0];
        }else{
            seed = func1(seed, element, index, array);
        }
    }); return seed;
     
 }
 module.exports.extend = extend;
 
 
 
 