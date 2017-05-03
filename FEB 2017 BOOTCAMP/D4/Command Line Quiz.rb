counter = 0;

puts 'How many sides does a hexagon have?'
puts '1 - Five'
puts '2 - Six'
puts '3 - Seven'
puts 'Enter the correct number: '
input = gets.chomp.strip().to_i

counter += 1 if input = 7

puts 'Which choice is 5?'
puts '1 - Five'
puts '2 - Six'
puts '3 - Seven'
puts 'Enter the correct choice: '
input = gets.chomp.strip().to_i

counter += 1 if input = 1

puts "You scored #{counter/2*100}%, you got #{counter} out of 2 questions correctly."
