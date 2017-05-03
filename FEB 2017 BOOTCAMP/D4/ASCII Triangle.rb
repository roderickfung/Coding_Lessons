char = 0
row = 10
count = 1
spacing = 100

row.times {|x| puts (char.to_s * count).center(spacing); count += 2 }
