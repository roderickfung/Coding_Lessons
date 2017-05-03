string = "abcd"
arr = string.split("")
before = arr[0]
new_arr = []
1.upto(arr.length-1) do |num|
				 new_arr.push("#{before}#{arr[num]}")
				  before = arr[num]
end

p new_arr
