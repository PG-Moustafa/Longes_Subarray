

let longest_subarray = function(list) {
  let max_len = 0
  let new_len = 0
  let arr = []

  for (let i = 0; i < list.length; i++) {
    if ((list[i] == 0 && arr[0] == 1) || (list[i] == 1 && arr[0] == 0)) {
      arr.pop()
      new_len += 2
    }
    else arr.push(list[i])
  }

  if (new_len > max_len) 
    max_len = new_len

  return max_len
}

list = [1, 0, 1, 0, 0, 1, 1, 0, 1]
console.log(longest_subarray(list))